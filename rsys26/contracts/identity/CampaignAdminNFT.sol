// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CampaignAdminNFT is ERC721, Ownable {
    uint256 public nextTokenId;
    address public campaign;

    mapping(address => bool) public isAdmin;

    modifier onlyCampaign() {
        require(msg.sender == campaign, "Not campaign");
        _;
    }

    constructor(address _campaign)
        ERC721("Campaign Admin", "CADMIN")
        Ownable(msg.sender)
    {
        campaign = _campaign;
    }

    function issueAdmin(address admin)
        external
        onlyCampaign
    {
        require(!isAdmin[admin], "Already admin");

        nextTokenId++;
        _safeMint(admin, nextTokenId);
        isAdmin[admin] = true;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256,
        uint256
    ) internal pure {
        require(from == address(0) || to == address(0), "Soulbound");
    }
}
