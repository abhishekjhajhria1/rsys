// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/*
    ReliefPoolToken (rUSD / rUSDT)
    - Minted when donations come in
    - Used by victims to pay providers
    - Redeemed by providers for stablecoins
*/
contract ReliefPoolToken is ERC20, Ownable {
    address public treasury;

    modifier onlyTreasury() {
        require(msg.sender == treasury, "PoolToken: not treasury");
        _;
    }

    constructor(
        string memory name_,
        string memory symbol_,
        address treasury_
    )
        ERC20(name_, symbol_)
        Ownable(msg.sender)
    {
        treasury = treasury_;
    }

    // Minted when stablecoins are donated
    function mint(address to, uint256 amount)
        external
        onlyTreasury
    {
        _mint(to, amount);
    }

    // Burned when provider redeems tokens
    function burn(address from, uint256 amount)
        external
        onlyTreasury
    {
        _burn(from, amount);
    }
}
