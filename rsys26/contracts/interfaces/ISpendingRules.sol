// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ISpendingRules {
    enum Category {
        FOOD,
        WATER,
        SHELTER,
        MEDICINE,
        TRANSPORT
    }

    function isProviderAllowed(
        address provider,
        Category category
    ) external view returns (bool);
}
