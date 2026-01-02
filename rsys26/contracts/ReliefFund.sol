// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./ReliefNFT.sol";

contract ReliefFund is Ownable {
    IERC20 public stablecoin;
    ReliefNFT public reliefNFT;

    address[] public beneficiaries;

    constructor(
        address _stablecoin,
        address _reliefNFT
    ) Ownable(msg.sender) {
        stablecoin = IERC20(_stablecoin);
        reliefNFT = ReliefNFT(_reliefNFT);
    }

    function donate(uint256 amount) external{
        require(amount>0 , "amount must be > 0");
        stablecoin.transferFrom(msg.sender, address(this), amount);
    }

    function addBeneficiary(address beneficiary) external onlyOwner {
        require(reliefNFT.balanceOf(beneficiary) > 0, "No Relief NFT");
        beneficiaries.push(beneficiary);
    }

    function distribution() external onlyOwner{
        uint256 count = beneficiaries.length;
        require(count > 0 , "No beneficiaries");

         uint256 totalBalance = stablecoin.balanceOf(address(this));
        require(totalBalance > 0, "No funds");

        uint256 amountPerUser = totalBalance / count;

        for (uint256 i = 0; i < count; i++) {
            stablecoin.transfer(beneficiaries[i], amountPerUser);
        }
    }

    function beneficiaryCount() external view returns (uint256) {
        return beneficiaries.length;
    }
    
}