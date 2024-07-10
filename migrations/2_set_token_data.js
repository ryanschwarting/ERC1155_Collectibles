const ERC1155_CONTRACT = artifacts.require("DigitalCollectible");

const NUM_OF_SPLITS = 1;
const settings = {
  development: {
    // uri: "https://atlascorp.mypinata.cloud/ipfs/",
    tokenData: [
      {
        maxSupply: 10,
        price: web3.utils.toWei("0.001", "ether"),
      },
      {
        maxSupply: 10,
        price: web3.utils.toWei("0.001", "ether"),
      },
      {
        maxSupply: 10,
        price: web3.utils.toWei("0.001", "ether"),
      },
      // {
      //   maxSupply: 10,
      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
      // {
      //   maxSupply: 10,

      //   price: web3.utils.toWei("0.001", "ether"),
      // },
    ],
  },
  1: {},
  5: {
    tokenData: [
      {
        maxSupply: 100,
        price: web3.utils.toWei("0.001", "ether"),
      },
      {
        maxSupply: 100,
        price: web3.utils.toWei("0.001", "ether"),
      },
      {
        maxSupply: 100,
        price: web3.utils.toWei("0.001", "ether"),
      },
      {
        maxSupply: 100,
        price: web3.utils.toWei("0.001", "ether"),
      },
      {
        maxSupply: 100,
        price: web3.utils.toWei("0.001", "ether"),
      },
      {
        maxSupply: 100,
        price: web3.utils.toWei("0.001", "ether"),
      },
      {
        maxSupply: 100,
        price: web3.utils.toWei("0.001", "ether"),
      },
      {
        maxSupply: 100,
        price: web3.utils.toWei("0.001", "ether"),
      },
      {
        maxSupply: 100,
        price: web3.utils.toWei("0.001", "ether"),
      },
      {
        maxSupply: 100,
        price: web3.utils.toWei("0.001", "ether"),
      },
    ],
  },
};

module.exports = async function (deployer, network, accounts) {
  let instance = await ERC1155_CONTRACT.deployed();
  let tokenDataArr;
  let tokenIds;

  if (network === "development") {
    console.log("Deploying to Development");
    tokenDataArr = split(settings.development.tokenData, NUM_OF_SPLITS);
    managerRole = web3.utils.sha3("CONTRACT_MANAGER");

    console.log(
      `Granting CONTRACT_MANAGER role to accounts[0] to call functions`
    );
    await grantRole(managerRole, accounts[0], instance);
  } else if (network === "dashboard") {
    let networkId = await getNetworkId();
    console.log(`Deploying to Network: ${networkId}`);
    tokenDataArr = split(settings[networkId].tokenData, NUM_OF_SPLITS);

    managerRole = web3.utils.sha3("CONTRACT_MANAGER");

    console.log(
      `Granting CONTRACT_MANAGER role to accounts[0] to call functions`
    );
    // await grantRole(
    //   managerRole,
    //   "0x4B71540312C9f523D5fd18057Fd8F0C062F175C1",
    //   instance
    // );
  } else {
    console.log(`Unknown Network: ${network}`);
    return;
  }
  console.log("GETTING NO ERRORS YET");

  for (let i = 0; i < NUM_OF_SPLITS; i++) {
    console.log("Loop Iteration:", i);
    console.log("tokenDataArr[i] length:", tokenDataArr[i].length);

    // Generate token IDs for the current batch of token data
    tokenIds = Array.from(
      { length: tokenDataArr[i].length },
      (_, j) => j + 1 + i * tokenDataArr[0].length
    );

    console.log(
      "Token IDs:",
      tokenIds,
      "Token Data Length:",
      tokenDataArr[i].length
    );

    // Call setTokenData with the current batch of token data and corresponding token IDs
    try {
      console.log("Before setTokenData call");
      await instance.setTokenData(tokenDataArr[i], tokenIds);
      console.log("After setTokenData call");
      console.log(`Set data for tokens: ${tokenIds}`);
    } catch (error) {
      console.log("Error in setTokenData call:", error);
    }
  }

  console.log(`Deployment to Network: ${network} - Successful`);
};

async function getNetworkId() {
  let networkId = await web3.eth.getChainId();
  console.log(`Connected Network: ${networkId}`);
  return networkId;
}

function split(array, n) {
  let result = [];
  for (let i = n; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

async function grantRole(role, address, instance) {
  console.log(`Granting ${address} the ${role} ROLE`);
  console.log("Confirming Role");
  await instance.grantRole(role, address);
  let hasRole = await instance.hasRole(role, address);
  console.log(`${address}: ${hasRole}`);
  console.log(
    "=================================================================="
  );
}
