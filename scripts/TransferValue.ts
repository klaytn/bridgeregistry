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

  

  const ENbridge = await ethers.getContractFactory("Bridge");
  const enbridge = await ENbridge.attach( conf.parent.bridge );

  const ENtoken = await ethers.getContractFactory("ServiceChainToken");
  const entoken = await ENtoken.attach( conf.parent.token );

  // account before value transfer 
  const alice = '0xc40b6909eb7085590e1c26cb3becc25368e249e9';
  const bal1 = await entoken.balanceOf(owner.address);
  console.log("signer's balance before requestValueTransfer:", bal1.toString());
  const bal2 = await entoken.balanceOf(enbridge.address);
  console.log("EN bridge's balance before requestValueTransfer:", bal2.toNumber());
  const bal3 = await entoken.balanceOf(entoken.address);
  console.log("EN Token's balance before requestValueTransfer:", bal3.toNumber());
  const bal4 = await entoken.balanceOf(alice);
  console.log("alice's balance before requestValueTransfer:", bal4.toNumber());

  // gas price 
  const provider = new ethers.providers.JsonRpcProvider(conf.parent.url);
  const gasPrice = await provider.getGasPrice();
  console.log('Gas Price:', gasPrice);

  // request to the token contract
  // const tx2 = await entoken.requestValueTransfer(100, alice, 0, [], {
  //   gasPrice: gasPrice, 
  //   gasLimit: 8500000
  // });
  // console.log( tx2 );
  // const receipt = await tx2.wait();
  // console.log(receipt);

  // direct request to the bridge
  await entoken.approve(enbridge.address, 100, {gasPrice: gasPrice, gasLimit: 8500000});
  await enbridge.requestERC20Transfer(entoken.address, alice, 100, 0, [], {gasPrice: gasPrice, gasLimit: 8500000});
  
  // account after minting
  const bal5 = await entoken.balanceOf(owner.address);
  console.log("signer's balance after requestValueTransfer:", bal5.toString());
  const bal6 = await entoken.balanceOf(enbridge.address);
  console.log("EN bridge's balance after requestValueTransfer:", bal6.toNumber());
  const bal7 = await entoken.balanceOf(entoken.address);
  console.log("EN Token's balance after requestValueTransfer:", bal7.toNumber());
  const bal8 = await entoken.balanceOf(alice);
  console.log("alice balance after requestValueTransfer:", bal8.toNumber());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });