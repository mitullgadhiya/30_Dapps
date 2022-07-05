// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// @dev read and write on blockchain 
contract SimpleStorage {
    string public data;

    // @dev changes the state on the blockchain
    function set(string memory _data) public {
        data = _data;
    }
    // @dev reads the data on the blockchain
    function get() public view returns (string memory) {
        return data;
    }
}
