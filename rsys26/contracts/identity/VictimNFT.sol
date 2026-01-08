// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

interface IVolunteerNFT {
    function isVolunteer(address user) external view returns (bool);
}

contract VictimNFT is ERC721 {
    uint256 public nextTokenId;
    address public volunteerNFT;

    mapping(address => bool) public isVictim;

    modifier onlyVolunteer() {
        require(
            IVolunteerNFT(volunteerNFT).isVolunteer(msg.sender),
            "Not volunteer"
        );
        _;
    }

    constructor(address _volunteerNFT)
        ERC721("Verified Victim", "VICTIM")
    {
        volunteerNFT = _volunteerNFT;
    }

    function verifyVictim(address victim)
        external
        onlyVolunteer
    {
        require(!isVictim[victim], "Already victim");

        nextTokenId++;
        _safeMint(victim, nextTokenId);
        isVictim[victim] = true;
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
