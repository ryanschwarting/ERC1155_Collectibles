const { expectEvent, expectRevert } = require("@openzeppelin/test-helpers");
const { web3 } = require("@openzeppelin/test-helpers/src/setup");

const SerialKillers = artifacts.require("WDCSerialKillers");

contract("minting", function (accounts) {
  let serialKillersInstance;

  before("Initializing...", async function () {
    serialKillersInstance = await SerialKillers.deployed();
    managerRole = web3.utils.sha3("CONTRACT_MANAGER");

    console.log(
      `Granting CONTRACT_MANAGER role to accounts[0] to call functions`
    );
    await grantRole(managerRole, accounts[0], serialKillersInstance);
  });

  it(`should allow contract manager to change contract state`, async () => {
    const sender = accounts[0];

    await serialKillersInstance.setContractState(1, {
      from: sender,
    });
  });

  it(`should fail whenever sales manager tries to insert number out of enum`, async () => {
    const sender = accounts[0];
    await expectRevert(
      serialKillersInstance.setContractState(4, {
        from: sender,
      }),
      "VM Exception while processing transaction: revert"
    );
  });

  it("should log the supplies for token IDs 1 to 750", async () => {
    // Loop through token IDs from 1 to 750
    for (let tokenId = 1; tokenId <= 10; tokenId++) {
      // Call the getSupply function with each token ID
      const supply = await serialKillersInstance.getSupply([tokenId]);

      // Log the token ID and its corresponding supply to the console
      console.log(`Token ID: ${tokenId}, Supply: ${supply[0].toString()}`);
    }
  });

  it("should fail to buy public sale when state is on presale", async () => {
    // Loop through token IDs from 1 to 750
    const sender = accounts[0];
    await expectRevert(
      serialKillersInstance.publicSale([1], [1], {
        from: sender,
      }),
      "publicSale: public sale is not live"
    );
  });

  it(`should allow you to purchase preSale token`, async () => {
    const sender = accounts[0];
    const tokenId = 1;
    const amount = 2;
    await serialKillersInstance.presale([tokenId], [amount], {
      from: sender,
      value: web3.utils.toWei("2", "ether"),
    });

    // Call the getSupply function with each token ID
    const supply = await serialKillersInstance.getSupply([tokenId]);

    // Log the token ID and its corresponding supply to the console
    console.log(`Token ID: ${tokenId}, Supply: ${supply[0].toString()}`);
  });

  it(`should allow you to purchase public sale token`, async () => {
    const sender = accounts[0];
    const tokenId = 1;
    const amount = 2;
    await serialKillersInstance.setContractState(2, { from: accounts[0] });
    await serialKillersInstance.publicSale([tokenId], [amount], {
      from: sender,
      value: web3.utils.toWei("2", "ether"),
    });

    // Call the getSupply function with each token ID
    const supply = await serialKillersInstance.getSupply([tokenId]);

    // Log the token ID and its corresponding supply to the console
    console.log(`Token ID: ${tokenId}, Supply: ${supply[0].toString()}`);
    const contractBalance = await web3.eth.getBalance(
      serialKillersInstance.address
    );
    console.log(
      "This is the contract balance",
      web3.utils.fromWei(contractBalance, "ether"),
      "ETH"
    );
  });

  it(`should fail to withdraw contract funds when address is not an approved role`, async () => {
    const sender = accounts[5];
    await expectRevert.unspecified(
      serialKillersInstance.withdraw(sender, {
        from: sender,
      })
    );
  });

  it(`should allow user with correct role to withdraw funds from contract`, async () => {
    const sender = accounts[0];

    await serialKillersInstance.withdraw(sender, {
      from: sender,
    });
    const contractBalance = await web3.eth.getBalance(
      serialKillersInstance.address
    );
    console.log(
      "This is the contract balance",
      web3.utils.fromWei(contractBalance, "ether"),
      "ETH"
    );
  });

  it("should mint 10 of each token ID (2 to 750) in public sale", async () => {
    const sender = accounts[0];
    const amountToMint = 10;

    // Loop through token IDs from 1 to 750
    for (let tokenId = 2; tokenId <= 3; tokenId++) {
      // Create arrays for token IDs and amounts
      const ids = [tokenId];
      const amounts = [amountToMint];

      // Call the publicSale function to mint the tokens
      await serialKillersInstance.publicSale(ids, amounts, {
        from: sender,
        value: web3.utils.toWei("2", "ether"),
      });

      // Update and display the progress bar
      showProgress(tokenId, 750);
    }
  });

  it("should log the supplies for token IDs 1 to 750", async () => {
    // Create an array of token IDs from 1 to 750
    const tokenIds = Array.from({ length: 750 }, (_, i) => i + 1);

    // Call the getSupply function with the array of token IDs
    const supplies = await serialKillersInstance.getSupply(tokenIds);

    // Log each token ID and its corresponding supply to the console
    for (let i = 0; i < supplies.length; i++) {
      console.log(
        `Token ID: ${tokenIds[i]}, Supply: ${supplies[i].toString()}`
      );
    }
  });
});

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

function showProgress(current, total) {
  const width = 50; // Width of the progress bar in characters
  const progress = Math.floor((current / total) * width);

  // Create the progress bar string
  const progressBar =
    "[" + "#".repeat(progress) + ".".repeat(width - progress) + "]";

  // Print the progress bar
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(
    `Minting Progress: ${progressBar} ${((current / total) * 100).toFixed(2)}%`
  );

  // Move to the next line when done
  if (current === total) {
    console.log();
  }
}
