// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/*
    PoolTokenV2
    - Accounting token for relief funds
    - Minted & burned ONLY by ReliefPool
*/
contract PoolTokenV2 is ERC20, Ownable {
    address public pool;

    modifier onlyPool() {
        require(msg.sender == pool, "PoolToken: not pool");
        _;
    }

    constructor(
        string memory name_,
        string memory symbol_,
        address _pool
    )
        ERC20(name_, symbol_)
        Ownable(msg.sender)
    {
        pool = _pool;
    }

    function mint(address to, uint256 amount)
        external
        onlyPool
    {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount)
        external
        onlyPool
    {
        _burn(from, amount);
    }
}
