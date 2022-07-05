const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", () => {
  it("Should set the correct value of data variable", async () => {
    const simpleStorage = await SimpleStorage.deployed();
    await simpleStorage.set("hey boss");
    const result = await simpleStorage.get();
    assert(result === "hey boss");
  });
});
