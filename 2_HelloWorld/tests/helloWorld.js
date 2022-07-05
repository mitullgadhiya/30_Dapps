const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", () => {
  it("Should return hello World", async () => {
    const helloWorld = await HelloWorld.deployed();
    const result = await helloWorld.hello();
    assert(result === "Hello World");
  });
});
 