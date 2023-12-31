
const hre = require("hardhat");


async function main() {

  /* const lockedAmount = hre.ethers.parseEther("0.001"); */
  const [deployer] =await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const UserManagement = await hre.ethers.getContractFactory("UserManagement");
  const receipt=await UserManagement.deploy();
  await receipt.waitForDeployment(); 
  console.log('Contract deployed to address:',receipt.target);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
