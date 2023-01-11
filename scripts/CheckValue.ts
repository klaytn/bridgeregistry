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
  
  console.log('\n\n', conf);

  const SCNbridge = await ethers.getContractFactory("Bridge");
  const scnbridge = await SCNbridge.attach( conf.child.bridge );

  const SCNtoken = await ethers.getContractFactory("ServiceChainToken");
  const scntoken = await SCNtoken.attach( conf.child.token );

  // account before value transfer 
  const alice = '0xc40b6909eb7085590e1c26cb3becc25368e249e9';
  const bal1 = await scntoken.balanceOf(owner.address);
  console.log("signer's balance before requestValueTransfer:", bal1.toString());
  const bal2 = await scntoken.balanceOf(scnbridge.address);
  console.log("EN bridge's balance before requestValueTransfer:", bal2.toNumber());
  const bal3 = await scntoken.balanceOf(scntoken.address);
  console.log("EN Token's balance before requestValueTransfer:", bal3.toNumber());
  const bal4 = await scntoken.balanceOf(alice);
  console.log("alice's balance before requestValueTransfer:", bal4.toNumber());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });