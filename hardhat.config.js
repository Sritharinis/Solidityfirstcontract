/** @type import('hardhat/config').HardhatUserConfig */
require('@nomicfoundation/hardhat-toolbox');

const SEPOLIA_PRIVATE_KEY = "8d9a30d7dd17f53fc433c065b1c390f06762a8fb96ac009dd8030f3714c87568";
module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "localhost",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/1f4702d19c464d54a04378d5a1d244d3",
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};

