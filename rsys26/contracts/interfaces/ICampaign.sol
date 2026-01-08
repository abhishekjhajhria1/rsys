// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ICampaign {
    enum Status {
        PENDING,
        ACTIVE,
        PAUSED,
        CLOSED
    }

    function activateCampaign() external;
    function pauseCampaign() external;
    function resumeCampaign() external;
    function closeCampaign() external;

    function status() external view returns (Status);
    function initiator() external view returns (address);
}
