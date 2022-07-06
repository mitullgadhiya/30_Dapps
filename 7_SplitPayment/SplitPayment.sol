// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract SplitPayment {
    // @dev defining the access control - state variable
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    function send(address payable[] memory to, uint256[] memory amount)
        public
        payable
        onlyOwner()
    {
        // @dev check the length of to and amounts array to avoid false split payments.
        require(
            to.length == amount.length,
            "to and amount arrays length must be equal"
        );
        for (uint256 i = 0; i < to.length; i++) {
            to[i].transfer(amount[i]);
        }
    }

    // @dev modifier to check the required conditions before the function body code executes
    modifier onlyOwner() {
        // @dev checking the access
        require(msg.sender == owner, "Only owner can send transfer.");
        _;
    }
}
