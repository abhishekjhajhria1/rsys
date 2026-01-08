// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SpendingRules {
    /*//////////////////////////////////////////////////////////////
                                TYPES
    //////////////////////////////////////////////////////////////*/

    enum Category {
        FOOD,
        WATER,
        SHELTER,
        MEDICINE,
        TRANSPORT
    }

    /*//////////////////////////////////////////////////////////////
                              STORAGE
    //////////////////////////////////////////////////////////////*/

    address public campaign;

    // category => enabled?
    mapping(Category => bool) public enabledCategory;

    // provider => category => allowed?
    mapping(address => mapping(Category => bool)) public providerCategoryAccess;

    /*//////////////////////////////////////////////////////////////
                               EVENTS
    //////////////////////////////////////////////////////////////*/

    event CategoryEnabled(Category category);
    event ProviderAuthorized(address provider, Category category);

    /*//////////////////////////////////////////////////////////////
                              MODIFIERS
    //////////////////////////////////////////////////////////////*/

    modifier onlyCampaign() {
        require(msg.sender == campaign, "SpendingRules: not campaign");
        _;
    }

    /*//////////////////////////////////////////////////////////////
                            CONSTRUCTOR
    //////////////////////////////////////////////////////////////*/

    constructor(address _campaign) {
        campaign = _campaign;
    }

    /*//////////////////////////////////////////////////////////////
                        CATEGORY MANAGEMENT
    //////////////////////////////////////////////////////////////*/

    function enableCategory(Category category)
        external
        onlyCampaign
    {
        enabledCategory[category] = true;
        emit CategoryEnabled(category);
    }

    /*//////////////////////////////////////////////////////////////
                    PROVIDER AUTHORIZATION
    //////////////////////////////////////////////////////////////*/

    function authorizeProvider(
        address provider,
        Category category
    )
        external
        onlyCampaign
    {
        require(
            enabledCategory[category],
            "Category not enabled"
        );

        providerCategoryAccess[provider][category] = true;
        emit ProviderAuthorized(provider, category);
    }

    /*//////////////////////////////////////////////////////////////
                        VIEW FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    function isProviderAllowed(
        address provider,
        Category category
    )
        external
        view
        returns (bool)
    {
        return providerCategoryAccess[provider][category];
    }
}
