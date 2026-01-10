// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*//////////////////////////////////////////////////////////////
                            INTERFACES
//////////////////////////////////////////////////////////////*/

interface IPoolToken {
    function transfer(address to, uint256 amount) external returns (bool);
}

interface IReliefPool {
    function redeem(address provider, uint256 amount) external;
}

interface IVictimNFT {
    function isVictim(address user) external view returns (bool);
}

interface IServiceProviderNFT {
    function isProvider(address provider) external view returns (bool);
}

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

/*//////////////////////////////////////////////////////////////
                    CAMPAIGN TREASURY V2
//////////////////////////////////////////////////////////////*/

contract CampaignTreasuryV2 {
    address public campaign;
    address public pool;
    address public poolToken;
    address public victimNFT;
    address public providerNFT;
    address public spendingRules;

    /*//////////////////////////////////////////////////////////////
                              MODIFIERS
    //////////////////////////////////////////////////////////////*/

    modifier onlyCampaign() {
        require(msg.sender == campaign, "Treasury: not campaign");
        _;
    }

    modifier onlyVictim() {
        require(
            IVictimNFT(victimNFT).isVictim(msg.sender),
            "Not verified victim"
        );
        _;
    }

    /*//////////////////////////////////////////////////////////////
                              CONSTRUCTOR
    //////////////////////////////////////////////////////////////*/

    constructor(
        address _campaign,
        address _pool,
        address _poolToken,
        address _victimNFT,
        address _providerNFT,
        address _spendingRules
    ) {
        campaign = _campaign;
        pool = _pool;
        poolToken = _poolToken;
        victimNFT = _victimNFT;
        providerNFT = _providerNFT;
        spendingRules = _spendingRules;
    }

    /*//////////////////////////////////////////////////////////////
                    DISTRIBUTION TO VICTIMS
    //////////////////////////////////////////////////////////////*/

    function distributeToVictim(
        address victim,
        uint256 amount
    ) external onlyCampaign {
        require(amount > 0, "Amount zero");

        IPoolToken(poolToken).transfer(victim, amount);
    }

    /*//////////////////////////////////////////////////////////////
                    REDEMPTION VIA POOL
    //////////////////////////////////////////////////////////////*/

    function redeemForProvider(
        address provider,
        uint256 amount,
        ISpendingRules.Category category
    ) external onlyVictim {
        require(amount > 0, "Amount zero");

        require(
            IServiceProviderNFT(providerNFT).isProvider(provider),
            "Invalid provider"
        );

        require(
            ISpendingRules(spendingRules)
                .isProviderAllowed(provider, category),
            "Category not allowed"
        );

        // Treasury calls pool → pool pays provider
        IReliefPool(pool).redeem(provider, amount);
    }
}
