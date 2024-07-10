const ERC1155_CONTRACT = artifacts.require("DigitalCollectible");

const settings = {
  development: {
    uri: "https://boringbrew.mypinata.cloud/ipfs/",
  },
  1: {
    uri: "https://serialkillers.mypinata.cloud/ipfs/",
  },
  5: {
    uri: "https://atlascorp.mypinata.cloud/ipfs/QmUq84Cex67RTm5eqhRm343KDg4bPyVtRNKWiewoJJWR35/{id}.json",
  },
};

module.exports = async function (deployer, network, accounts) {
  if (network == "development") {
    console.log("Deploying to Development");
    await deployer.deploy(ERC1155_CONTRACT, settings.development.uri);
    console.log("Deployment to Development - Successful");
  } else if (network == "dashboard") {
    let networkId = await getNetworkId();
    console.log(`Deploying to Network: ${networkId}`);
    await deployer.deploy(ERC1155_CONTRACT, settings[networkId].uri);
    console.log(`Deployment to Network: ${networkId} - Successful`);
  }
};

async function getNetworkId() {
  let networkId = await web3.eth.getChainId();
  console.log(`Connected Network: ${networkId}`);
  return networkId;
}
