// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IIdentity {
    function isAdmin(address user) external view returns (bool);
    function isVolunteer(address user) external view returns (bool);
    function isVictim(address user) external view returns (bool);
    function isProvider(address user) external view returns (bool);
}
