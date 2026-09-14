require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");

const { MAINNET_RPC_URL, SEPOLIA_RPC_URL, DEPLOYER_PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      // Tests fork mainnet so the bonding curve can graduate into the real Uniswap V2 contracts
      ...(MAINNET_RPC_URL && { forking: { url: MAINNET_RPC_URL } }),
      chainId: 1,
    },
    ...(SEPOLIA_RPC_URL && DEPLOYER_PRIVATE_KEY && {
      sepolia: {
        url: SEPOLIA_RPC_URL,
        accounts: [DEPLOYER_PRIVATE_KEY],
      },
    }),
  }
};
