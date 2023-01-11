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

  const scnBridge = await ethers.getContractAt("Bridge", conf.child.bridge);
  const scnToken = await ethers.getContractAt("ServiceChainToken", conf.child.token);  

  const provider = new ethers.providers.JsonRpcProvider(conf.child.url);
  const gasPrice = await provider.getGasPrice();

  console.log('Gas Price:', gasPrice);

  // setting
  await scnToken.addMinter(conf.child.bridge, {gasPrice: gasPrice, gasLimit: 8500000 });
  console.log('addMinter');
  await scnBridge.registerOperator(conf.child.operator, {gasPrice: gasPrice, gasLimit: 8500000 });
  console.log('registerOperator');
  await scnBridge.registerToken( conf.child.token, conf.parent.token, {gasPrice: gasPrice, gasLimit: 8500000 });
  console.log('registerToken');
  await scnBridge.transferOwnership( conf.child.operator, {gasPrice: gasPrice, gasLimit: 8500000 });
  console.log('transferOwnership');


  const url = conf.child.url;
  const log1 = 'registering bridges to the child node'
  await jsonRpcReq(url, log1, 'subbridge_registerBridge', [conf.child.bridge, conf.parent.bridge]);

  const log2 = 'subscribing bridges to the child node'
  await jsonRpcReq(url, log2, 'subbridge_subscribeBridge', [conf.child.bridge, conf.parent.bridge]);

  const log3 = 'register token to subbridge..'
  await jsonRpcReq(url, log3, 'subbridge_registerToken', [conf.child.bridge, conf.parent.bridge, conf.child.token, conf.parent.token]);


  console.log(`subbridge.registerBridge("${conf.child.bridge}", "${conf.parent.bridge}")`)
  console.log(`subbridge.subscribeBridge("${conf.child.bridge}", "${conf.parent.bridge}")`)
  console.log(`subbridge.registerToken("${conf.child.bridge}", "${conf.parent.bridge}", "${conf.child.token}", "${conf.parent.token}")`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });