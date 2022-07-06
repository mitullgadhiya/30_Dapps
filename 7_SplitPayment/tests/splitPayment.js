const SplitPayment = artifacts.require("SplitPayment");

contract("SplitPayment", (accounts) => {
  let splitPayment = null;
  before(async () => {
    const splitPayment = await SplitPayment.deployed();
  });

  it("Should split payment", async () => {
    const recipients = [accounts[1], accounts[2], accounts[3]];
    const amounts = [400, 200, 300];
    const initialBalances = await Promise.all(
      recipients.map((recipient) => {
        return web3.eth.getBalance(recipient);
      })
    );
    await splitPayment.send(recipients, amounts, {
      from: accounts[0],
      value: 900,
    });
    const finalBalances = await Promise.all(
      recipients.map((recipient) => {
        return web3.eth.getBalance(recipient);
      })
    );
    recipients.forEach((_item, i) => {
      const finalBalance = web3.utils.toBN(finalBalances[i]);
      const initialBalance = web3.utils.toBN(initialBalances[i]);
      assert(finalBalance.sub(initialBalance).toNumber() === amount[i]);
    });
  });

  it("Should NOT split payments if array length mismatch", async () => {
    const recipients = [accounts[1], accounts[2], accounts[3]];
    const amounts = [400, 200];
    try {
      await splitPayment.send(recipients, amounts, {
        from: accounts[0],
        value: 900,
      });
    } catch (e) {
      assert(e.message.included("to must be same length as array"));
      return;
    }
    assert(false);
  });

  it("Should NOT split payment if the caller is not owner", async () => {
    const recipients = [accounts[1], accounts[2], accounts[3]];
    const amounts = [400, 200, 300];
    try {
      await splitPayment.send(recipients, amounts, {
        from: accounts[5],
        value: 900,
      });
    } catch (e) {
      assert(e.message.includes("Only owner can send transfer."));
      return;
    }
    assert(false);
  });
});
