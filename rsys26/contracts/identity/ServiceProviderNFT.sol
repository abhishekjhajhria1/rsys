// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/*
    ServiceProviderNFT
    - Soulbound identity for verified service providers
    - Issued by Campaign only
*/
contract ServiceProviderNFT is ERC721, Ownable {
    uint256 public nextTokenId;
    address public campaign;

    // provider address => tokenId
    mapping(address => uint256) public providerToken;

    event ProviderRegistered(address indexed provider, uint256 tokenId);

    modifier onlyCampaign() {
        require(msg.sender == campaign, "ProviderNFT: not campaign");
        _;
    }

    constructor(address _campaign)
        ERC721("Relief Service Provider", "RSP")
        Ownable(msg.sender)
    {
        campaign = _campaign;
    }

    function registerProvider(address provider)
        external
        onlyCampaign
    {
        require(provider != address(0), "Invalid provider");
        require(providerToken[provider] == 0, "Already registered");

        nextTokenId++;
        uint256 tokenId = nextTokenId;

        _safeMint(provider, tokenId);
        providerToken[provider] = tokenId;

        emit ProviderRegistered(provider, tokenId);
    }

    // 🔒 Soulbound: disable transfers
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256,
        uint256
    ) internal pure {
        require(
            from == address(0) || to == address(0),
            "ProviderNFT: non-transferable"
        );
    }

    function isProvider(address provider)
        external
        view
        returns (bool)
    {
        return providerToken[provider] != 0;
    }
}
