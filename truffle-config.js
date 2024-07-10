module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ganache cli port
      network_id: "*",
    },
    live: {
      network_id: 1, // Ethereum Mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    },
    goerli: {
      network_id: 5, // Goerli
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    },
  },

  mocha: {
    timeout: 10000000,
    colors: true,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.21",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: "ZY6KPCXM6VVR6MRE6ARGIN8VIUQRSCM3V7",
  },
};
