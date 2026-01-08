// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
    Minimal interface to talk to Campaign.sol
    We only need ONE function.
*/
interface ICampaign {
    function activateCampaign() external;
}

contract CampaignVoting {
    // 🔢 Fixed vote threshold for hackathon
    uint256 public constant VOTE_THRESHOLD = 5;

    // campaign => number of votes
    mapping(address => uint256) public voteCount;

    // campaign => voter => voted?
    mapping(address => mapping(address => bool)) public hasVoted;

    event Voted(
        address indexed campaign,
        address indexed voter,
        uint256 totalVotes
    );

    event CampaignApproved(address indexed campaign);

    function vote(address campaign) external {
        require(!hasVoted[campaign][msg.sender], "Already voted");

        hasVoted[campaign][msg.sender] = true;
        voteCount[campaign]++;

        emit Voted(campaign, msg.sender, voteCount[campaign]);

        // If threshold reached → activate campaign
        if (voteCount[campaign] >= VOTE_THRESHOLD) {
            ICampaign(campaign).activateCampaign();
            emit CampaignApproved(campaign);
        }
    }
}
