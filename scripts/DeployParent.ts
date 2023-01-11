import { ethers } from "hardhat";

const fs = require('fs')
const filename  = "deployed_info.json"
const conf = JSON.parse(fs.readFileSync(filename, 'utf8'));

async function main() {

  const signers = await ethers.getSigners();
  const owner = await signers[0].getAddress();
  console.log('\n\nowner:', owner);

  const provider = new ethers.providers.JsonRpcProvider(conf.parent.url);
  const gasPrice = await provider.getGasPrice();

  console.log('Gas Price:', gasPrice);

  console.log('EN operator:', conf.parent.operator);

  // Deploy bridge on EN
  const ENbridge = await ethers.getContractFactory("Bridge", {signer: signers[0]});
  const enBridge = await ENbridge.deploy(true,{ 
                          gasPrice: gasPrice,
                          // maxFeePerGas: 250000000000,
                          // maxPriorityFeePerGas: 250000000000,
                          gasLimit: 8500000 });
  await enBridge.deployed();
  conf.parent.bridge = enBridge.address; 
  console.log('EN bridge address: ', enBridge.address);


  // Deploy ERC20 Token on EN
  const ENtoken = await ethers.getContractFactory("ServiceChainToken", {signer: signers[0]});
  const enToken = await ENtoken.deploy( enBridge.address, {
                          gasPrice: gasPrice,
                          // maxFeePerGas: 250000000000,
                          // maxPriorityFeePerGas: 250000000000,
                          gasLimit: 8500000 });
  await enToken.deployed();
  conf.parent.token = enToken.address;
  console.log('EN Token address: ', enToken.address);

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