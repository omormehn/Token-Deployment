require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    Sepolia: {
      url: "",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
