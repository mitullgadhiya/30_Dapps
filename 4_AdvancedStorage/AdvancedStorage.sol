// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract AdvancedStorage {

    // @dev uint is integer type [] - defines an array
    // @dev ids - be an array of integers
    uint[] public ids;

    // @dev adds elements to an array using 'push' method
    function add(uint id) public {
        ids.push(id);
    }

    // @dev gets an element from an array - ids[]
    function get(uint position) view public returns(uint) {
        return ids[position];
    }

    // @dev get the whole array - ids[]
    // @dev memory location is required when dealing with complex data-types
    function getAll() view public returns(uint[] memory) {
        return ids;
    }

    // @dev gets the length of an array - ids[]
    function length() view public returns(uint) {
        return ids.length;
    }
}