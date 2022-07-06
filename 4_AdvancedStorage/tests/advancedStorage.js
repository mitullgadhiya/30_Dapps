const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', () => {
    it('Should add an element to ids array', async () => {
        const advancedStorage = await AdvancedStorage.deployed();
        await advancedStorage.add(27);
        const result = await advancedStorage.ids(0);
        // @dev we are using the bignumber library to handle the flows
        // @dev https://github.com/indutny/bn.js
        assert(result === 27);
    });
});