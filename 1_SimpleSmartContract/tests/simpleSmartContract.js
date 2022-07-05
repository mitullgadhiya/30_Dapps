const SimpleSmartContract = artifacts.require("SimpleSmartContract");

contract("SimpleSmartContract", () => {
  it("Should deploy on blockchain properly", async () => {
    const simpleSmartContract = await SimpleSmartContract.deployed();
    console.log(simpleSmartContract.address);
    assert(simpleSmartContract.address !== "");
  });
});
