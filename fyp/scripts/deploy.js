
const hre = require("hardhat");


async function main() {

  /* const lockedAmount = hre.ethers.parseEther("0.001"); */
  const [deployer] =await hre.ethers.getSigners(); 
  console.log("Deploying contracts with the account:", deployer.address);
  /* deploy contract for User Registration */
  const UserManagement = await hre.ethers.getContractFactory("UserManagement");
  const receipt=await UserManagement.deploy();
  await receipt.waitForDeployment(); 
  console.log('Contract deployed to address:',receipt.target);
/*Deploy contract for admin authentication */
const AdminAuthentication = await hre.ethers.getContractFactory("AdminAuthentication");
  const rec=await AdminAuthentication.deploy();
  await rec.waitForDeployment(); 
  console.log('Contract deployed to address:',rec.target);
  /*Deploy contract for Land Registration */
const LandRegistration = await hre.ethers.getContractFactory("LandRegistration");
const rec1=await LandRegistration.deploy();
await rec1.waitForDeployment(); 
console.log('Contract deployed to address:',rec1.target);
const LandTransfer = await hre.ethers.getContractFactory("LandTransfer");
const rec12=await LandTransfer.deploy();
await rec12.waitForDeployment(); 
console.log('Contract deployed to address:',rec12.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
