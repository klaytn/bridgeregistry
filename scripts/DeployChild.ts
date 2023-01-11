import { ethers } from "hardhat";

const fs = require('fs')
const filename  = "deployed_info.json"
const conf = JSON.parse(fs.readFileSync(filename, 'utf8'));

async function main() {

  const signers = await ethers.getSigners();
  const owner = await signers[0].getAddress();
  console.log('\n\nowner:', owner);

  const provider = new ethers.providers.JsonRpcProvider(conf.child.url);
  const gasPrice = await provider.getGasPrice();

  console.log('Gas Price:', gasPrice);

  console.log('SCN operator:', conf.child.operator);

  // Deploy bridge on SCN
  const SCNbridge = await ethers.getContractFactory("Bridge", {signer: signers[0]});
  const scnBridge = await SCNbridge.deploy( true, { 
                          gasPrice: gasPrice,
                          // maxFeePerGas: 250000000000,
                          // maxPriorityFeePerGas: 250000000000,
                          gasLimit: 8500000 });
  await scnBridge.deployed();
  conf.child.bridge = scnBridge.address; 
  console.log('SCN bridge address: ', scnBridge.address);

  // Deploy ERC20 Token on SCN
  const SCNtoken = await ethers.getContractFactory("ServiceChainToken", {signer: signers[0]});
  const scnToken = await SCNtoken.deploy(scnBridge.address, {
                          gasPrice: gasPrice,
                          // maxFeePerGas: 250000000000,
                          // maxPriorityFeePerGas: 250000000000,
                          gasLimit: 8500000 });
  await scnToken.deployed();
  conf.child.token = scnToken.address;
  console.log('SCN Token address: ', scnToken.address);

  fs.writeFileSync(filename, JSON.stringify(conf), (err) => {
      if (err) {
          console.log("Error:", err);
      }
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });