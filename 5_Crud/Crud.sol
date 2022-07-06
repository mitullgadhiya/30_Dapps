// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// @dev CRUD - Create Read Update Delete
contract Crud {
    // @dev a struct to define a user / an object
    struct User {
        uint256 id;
        string name;
    }
    User[] public users;
    uint256 public nextId = 1;

    // @dev creates a user
    function create(string memory name) public {
        // @dev add the user in users array
        // @dev when specifying the User[] the parameters
        // @dev have to be in exact order as in struct
        // @dev other way around when the struct is big
        // @dev here the order does not matter
        // users.push(User({name: name, nextId: nextId}));
        users.push(User(nextId, name));
        nextId++;
    }

    // @dev read the data
    // @dev a function can return more than one data type
    // @dev just need to specify the type using comma ','
    function read(uint256 id) public view returns (uint256, string memory) {
        // @dev looping through users array and check
        // @dev for each pass we'll check instaces - do they the correct id
        //for (uint256 i = 0; i < users.length; i++) {
        //if (users[i].id == id) {
        uint256 i = find(id);
        return (users[i].id, users[i].name);
    }

    // @dev update th data / state on blockchain
    function update(uint256 id, string memory name) public {
        //for (uint256 i = 0; i < users.length; i++) {
        //if (users[i].id == id) {
        uint256 i = find(id);
        users[i].name = name;
    }

    // @dev 'delete' is a special keyword in solidity
    function destroy(uint256 id) public {
        // @dev find the position in array and delete it
        uint256 i = find(id);
        delete users[i];
    }

    // @dev refactoring to minimize the code
    function find(uint256 id) internal view returns (uint256) {
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                return i;
            }
        }
        revert("User does not exist!");
    }
}
