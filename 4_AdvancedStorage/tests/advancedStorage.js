const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', () => {
    let advancedStorage = null;
    before(async => () {
        advancedStorage = await AdvancedStorage.deployed();
    });

    it('Should add an element to ids array', async () => {
        //const advancedStorage = await AdvancedStorage.deployed();
        await advancedStorage.add(27);
        const result = await advancedStorage.ids(0);
        // @dev we are using the bignumber library to handle the flows
        // @dev https://github.com/indutny/bn.js
        // @dev converts the js Object to number.
        assert(result.toNumber() === 27);
    });

    it('Should get an element of ids array', async () => {
        //const advancedStorage = await AdvancedStorage.deployed();
        await advancedStorage.add(12);
        const result = await advancedStorage.get(1);
        // @dev we are using the bignumber library to handle the flows
        // @dev https://github.com/indutny/bn.js
        // @dev converts the js Object to number.
        assert(result.toNumber() === 12);
    });

    it('Should get the ids array', async () => {
        //const advancedStorage = await AdvancedStorage.deployed();
        const rawIds = await advancedStorage.getAll();
        const ids = rawIds.map(id => id.toNumber());
        // @dev deepEqual library - to compare the elements inde an array.
        assert.deepEqual(ids === [27, 12]);
    });

    it('Should get the length of the ids array', async () => {
        //const advancedStorage = await AdvancedStorage.deployed();
        const length = await advancedStorage.length();
        // @dev we are using the bignumber library to handle the flows
        // @dev https://github.com/indutny/bn.js
        // @dev converts the js Object to number.
        assert(length.toNumber === 2);
    });
}); 

// @dev because the code is to repetitive we will use 
// @dev we will be using - Destructuring
// @dev check out the mocha framework for detailed explaination
