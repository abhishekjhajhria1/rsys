// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ReliefStablecoin is ERC20, Ownable {
    constructor()
        ERC20("Relief USD", "rUSD")
        Ownable(msg.sender)
    {}

    // Mint for testing / demo (hackathon-safe)
    function mint(address to, uint256 amount)
        external
        onlyOwner
    {
        _mint(to, amount);
    }
}
