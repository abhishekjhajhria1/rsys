// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

interface ICampaignAdminNFT {
    function isAdmin(address user) external view returns (bool);
}

contract VolunteerNFT is ERC721 {
    uint256 public nextTokenId;
    address public adminNFT;

    mapping(address => bool) public isVolunteer;

    modifier onlyAdmin() {
        require(
            ICampaignAdminNFT(adminNFT).isAdmin(msg.sender),
            "Not admin"
        );
        _;
    }

    constructor(address _adminNFT)
        ERC721("Campaign Volunteer", "CVOL")
    {
        adminNFT = _adminNFT;
    }

    function issueVolunteer(address volunteer)
        external
        onlyAdmin
    {
        require(!isVolunteer[volunteer], "Already volunteer");

        nextTokenId++;
        _safeMint(volunteer, nextTokenId);
        isVolunteer[volunteer] = true;
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
