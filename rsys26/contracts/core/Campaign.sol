// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Campaign {
    /*//////////////////////////////////////////////////////////////
                                TYPES
    //////////////////////////////////////////////////////////////*/

    enum Status {
        PENDING,   // Created, waiting for votes
        ACTIVE,    // Approved, can accept donations
        PAUSED,    // Temporarily stopped
        CLOSED     // Finished, no further actions
    }

    /*//////////////////////////////////////////////////////////////
                              STORAGE
    //////////////////////////////////////////////////////////////*/

    address public initiator;
    address public votingContract;

    string public name;
    string public metadataURI;

    Status public status;

    /*//////////////////////////////////////////////////////////////
                               EVENTS
    //////////////////////////////////////////////////////////////*/

    event CampaignActivated();
    event CampaignPaused();
    event CampaignResumed();
    event CampaignClosed();

    /*//////////////////////////////////////////////////////////////
                              MODIFIERS
    //////////////////////////////////////////////////////////////*/

    modifier onlyInitiator() {
        require(msg.sender == initiator, "Campaign: not initiator");
        _;
    }

    modifier onlyVotingContract() {
        require(msg.sender == votingContract, "Campaign: not voting contract");
        _;
    }

    modifier inStatus(Status expected) {
        require(status == expected, "Campaign: invalid status");
        _;
    }

    /*//////////////////////////////////////////////////////////////
                              CONSTRUCTOR
    //////////////////////////////////////////////////////////////*/

    constructor(
        address _initiator,
        string memory _name,
        string memory _metadataURI,
        address _votingContract
    ) {
        initiator = _initiator;
        name = _name;
        metadataURI = _metadataURI;
        votingContract = _votingContract;
        status = Status.PENDING;
    }

    /*//////////////////////////////////////////////////////////////
                         STATE TRANSITIONS
    //////////////////////////////////////////////////////////////*/

    // Called by voting contract after threshold is met
    function activateCampaign()
        external
        onlyVotingContract
        inStatus(Status.PENDING)
    {
        status = Status.ACTIVE;
        emit CampaignActivated();
    }

    // Emergency / operational pause
    function pauseCampaign()
        external
        onlyInitiator
        inStatus(Status.ACTIVE)
    {
        status = Status.PAUSED;
        emit CampaignPaused();
    }

    // Resume after pause
    function resumeCampaign()
        external
        onlyInitiator
        inStatus(Status.PAUSED)
    {
        status = Status.ACTIVE;
        emit CampaignResumed();
    }

    // Permanently close campaign
    function closeCampaign()
        external
        onlyInitiator
    {
        status = Status.CLOSED;
        emit CampaignClosed();
    }
}
