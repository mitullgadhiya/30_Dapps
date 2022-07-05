// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// @dev HelloWorld smart contract
contract HelloWorld {

    /*
     * @dev hello function will return a string 
       @dev pure - is used when a stringto be returned is hard coded.
     */
    function hello() public pure returns (string memory) {
        return "Hello World";
    }
}
