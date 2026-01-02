
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ReliefNFT is ERC721, Ownable{
    uint256 private _tokenIdCounter;

    constructor() 
        ERC721("Relief Eligibility NFT", "RELIEF" ) 
        Ownable(msg.sender)
    {}

    function mint(address victim) external onlyOwner {

        require(balanceOf(victim) == 0, "Already has NFT" );
        _tokenIdCounter++;
        _safeMint(victim, _tokenIdCounter);

    }

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override returns (address){
        address from = _ownerOf(tokenId);

        if (from != address(0) && to != address(0)){
            revert("soulbound: non-transferable");
        }

        return super._update(to, tokenId, auth);
    }
}