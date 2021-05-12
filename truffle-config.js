const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const AccountIndex = 3;

require("dotenv").config({path: "./.env"});

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 7545,
      host: "127.0.0.1",
      network_id: 5777
    },
    ganache_local: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", AccountIndex);
      },
      network_id: 5777
    }
  },
  compilers: {
    solc: {
      version: "0.8.4",
    },
  },
};
