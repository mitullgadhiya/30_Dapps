const Crud = artifacts.require("Crud");

contract("Crud", () => {
  let crud = null;
  before(async () => {
    const crud = await Crud.deployed();
  });

  // @dev testing the 'create' and 'read' function
  it("Should create a new user", async () => {
    await crud.create("Nicolas");
    const user = await crud.read(1);
    assert(user[0].toNumber === 1);
    assert(user[1] === "Nicolas");
  });

  // @dev testing the 'update' function
  it("Should update a user", async () => {
    await crud.update(1, "tesla");
    const user = await crud.read(1);
    assert(user[0].toNumber === 1);
    assert(user[1] === "tesla");
  });

  it("should NOT update non-existing user", async () => {
    try {
      await crud.update(2, "Ghost");
    } catch (e) {
      assert(e.message.includes("User does not exist!"));
      return;
    }
    assert(false);
  });

  // @dev testing the 'destroy' function
  it("Should destroy a user", async () => {
    await crud.destroy(1);
    try {
      await crud.read(1);
    } catch (e) {
      assert(e.message.includes("User does not exist!"));
      return;
    }
    assert(false);
  });

  it("Should not destroy non-existing user", async () => {
    try {
      await crud.destroy(10);
    } catch (e) {
      assert(e.message.includes("User does not exist!"));
      return;
    }
    assert(false);
  });
});
