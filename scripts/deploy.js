const {ethers} = require("hardhat");

async function main() {
  console.log("Deploying the contract...");

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy(); // Deploy the contract

  await token.waitForDeployment(); // Wait for the deployment to complete
  console.log("Contract deployed at address:", token.target); // Use .target to get the address
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
