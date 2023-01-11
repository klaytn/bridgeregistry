import { ethers } from "hardhat";

const fs = require('fs')
const filename  = "deployed_info.json"
const conf = JSON.parse(fs.readFileSync(filename, 'utf8'));

async function main() {

  const signers = await ethers.getSigners();
  const owner = signers[0];
  
  console.log('\n\n', conf);

  const ENbridge = await ethers.getContractFactory("Bridge");
  const enBridge = await ENbridge.attach( conf.parent.bridge );

  const ENtoken = await ethers.getContractFactory("ServiceChainToken");
  const enToken = await ENtoken.attach( conf.parent.token );

  // setting
  await enToken.addMinter(conf.parent.bridge);
  console.log('addMinter');
  await enBridge.registerOperator(conf.parent.operator);
  console.log('registerOperator');
  await enBridge.registerToken( conf.parent.token, conf.child.token );
  console.log('registerToken');
  await enBridge.transferOwnership(conf.parent.operator);
  console.log('transferOwnership');

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });