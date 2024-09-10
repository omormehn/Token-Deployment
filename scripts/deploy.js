const hardhat = require("hardhat");
require("dotenv").config();

async function main() {
  const [deployer] = await hardhat.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  

  const contract = await hardhat.ethers.getContractFactory(
    "Token",
  );
  


  const contracts = await contract.deploy();
  await contracts.waitForDeployment();
  console.log("Token deployed to:", contracts.target);
  

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
