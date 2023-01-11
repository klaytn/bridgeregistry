import { ethers } from "hardhat";
const axios = require('axios');

const fs = require('fs')
const filename  = "deployed_info.json"
const conf = JSON.parse(fs.readFileSync(filename, 'utf8'));

async function jsonRpcReq(url, log, method, params) {
  if (typeof jsonRpcReq.id == undefined) jsonRpcReq.id = 0;

  console.log(log)
  await axios.post(url, {
      "jsonrpc":"2.0","method":method,"params":params,"id": jsonRpcReq.id++
  }).then(res => {
    if (res.data.error != undefined) {
      console.log(res.data.error);
      process.exit(res.data.code);
    }
  }).catch(err => {
    if (err != undefined) {
      console.log(err);
      process.exit(1);
    }
  });
}

async function main() {

  const signers = await ethers.getSigners();
  const owner = signers[0];

  // BridgeRestry Contracts & Library
  const StringUtil = await ethers.getContractFactory("StringUtil");
  const stringUtilLib = await StringUtil.deploy();
  await stringUtilLib.deployed();

  const IterableBridgeMap = await ethers.getContractFactory("IterableBridgeMap", {
      signer: owner,
      libraries: {
          StringUtil: stringUtilLib.address,
      },
  });
  const iterableBridgeMapLib = await IterableBridgeMap.deploy();
  await iterableBridgeMapLib.deployed();

  const ServiceBridge = await ethers.getContractFactory("ServiceBridge", {
      signer: owner,
      libraries: {
          IterableBridgeMap: iterableBridgeMapLib.address,
      }
  });
  const serviceBridge = await ServiceBridge.deploy();
  await serviceBridge.deployed();

  
  console.log('\n\n', conf);

  const tx1 = await serviceBridge.addBridgePair( "testBridge1", "1000", conf.parent.bridge, "2000", conf.child.bridge);
  console.log( "addBridgePair", tx1 );

  const allTokenPairs = await serviceBridge.getAllTokenPairs();
  console.log( "TokenPair list", allTokenPairs );

  const allBridges = await serviceBridge.getAllBridgePairs();
  console.log( "Bridge pair list", allBridges );
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });