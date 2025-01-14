// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract Token {
    string public name = "Sri";
    string public symbol = "ST";
    uint public totalSupply = 10000 * 10**18;
    address public owner;
    uint8 public decimals = 18; // Declare decimals only as a state variable
    mapping(address => uint) public balance;

    event Transfer(address indexed _from, address indexed _to, uint256 value);

    constructor() {
        balance[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address _to, uint amount) external {
        require(balance[msg.sender] >= amount, "Not sufficient Balance");
        balance[msg.sender] -= amount;
        balance[_to] += amount;
        emit Transfer(msg.sender, _to, amount);
    }

    function balanceOf(address account) external view returns (uint256) {
        return balance[account];
    }
}
