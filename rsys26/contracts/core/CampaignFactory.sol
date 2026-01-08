// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// ✅ THIS IMPORT IS REQUIRED
import "./Campaign.sol";

contract CampaignFactory {
    address public votingContract;

    Campaign[] public campaigns;

    event CampaignCreated(
        address indexed campaign,
        address indexed initiator,
        string name
    );

    constructor(address _votingContract) {
        votingContract = _votingContract;
    }

    function createCampaign(
        string calldata name,
        string calldata metadataURI
    ) external {
        Campaign campaign = new Campaign(
            msg.sender,
            name,
            metadataURI,
            votingContract
        );

        campaigns.push(campaign);

        emit CampaignCreated(address(campaign), msg.sender, name);
    }

    function totalCampaigns() external view returns (uint256) {
        return campaigns.length;
    }
}
