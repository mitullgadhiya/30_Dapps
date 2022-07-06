// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract EtherWallet {
    // @dev restrict the send from public to only owner
    address public owner;

    // @dev contructor
    constructor(address _owner) {
        owner = _owner;
    }

    // @dev deposit function
    function deposit() public payable {}

    // @dev send function
    function send(address payable to, uint256 amount) public {
        if (msg.sender == owner) {
            to.transfer(amount);
            return;
        }
        revert("Sender in not allowed");
    }

    // @dev balanceOf function
    function balanceOf() public view returns (uint256) {
        return address(this).balance;
    }
}
