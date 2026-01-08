// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*//////////////////////////////////////////////////////////////
                            INTERFACES
//////////////////////////////////////////////////////////////*/

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
}

interface IReliefPoolToken {
    function mint(address to, uint256 amount) external;
    function burn(address from, uint256 amount) external;
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

    function isProviderAllowed(address provider, Category category)
        external
        view
        returns (bool);
}

/*//////////////////////////////////////////////////////////////
                        CAMPAIGN TREASURY
//////////////////////////////////////////////////////////////*/

contract CampaignTreasury {
    address public campaign;
    address public stablecoin;
    address public poolToken;
    address public providerNFT;
    address public spendingRules;

    uint256 public totalDeposited;
    uint256 public totalRedeemed;

    /*//////////////////////////////////////////////////////////////
                                EVENTS
    //////////////////////////////////////////////////////////////*/

    event DonationReceived(address indexed donor, uint256 amount);
    event PoolTokensMinted(address indexed to, uint256 amount);
    event Redeemed(
        address indexed provider,
        uint256 amount,
        ISpendingRules.Category category
    );

    /*//////////////////////////////////////////////////////////////
                               MODIFIERS
    //////////////////////////////////////////////////////////////*/

    modifier onlyCampaign() {
        require(msg.sender == campaign, "Treasury: not campaign");
        _;
    }

    /*//////////////////////////////////////////////////////////////
                              CONSTRUCTOR
    //////////////////////////////////////////////////////////////*/

    constructor(
        address _campaign,
        address _stablecoin,
        address _poolToken,
        address _providerNFT,
        address _spendingRules
    ) {
        campaign = _campaign;
        stablecoin = _stablecoin;
        poolToken = _poolToken;
        providerNFT = _providerNFT;
        spendingRules = _spendingRules;
    }

    /*//////////////////////////////////////////////////////////////
                          DONATION FLOW
    //////////////////////////////////////////////////////////////*/

    function donate(uint256 amount) external {
        require(amount > 0, "Amount zero");

        IERC20(stablecoin).transferFrom(
            msg.sender,
            address(this),
            amount
        );

        totalDeposited += amount;

        // Mint pool tokens to campaign
        IReliefPoolToken(poolToken).mint(campaign, amount);

        emit DonationReceived(msg.sender, amount);
        emit PoolTokensMinted(campaign, amount);
    }

    /*//////////////////////////////////////////////////////////////
                        REDEMPTION FLOW
    //////////////////////////////////////////////////////////////*/

    function redeem(
        uint256 amount,
        ISpendingRules.Category category
    ) external {
        require(amount > 0, "Amount zero");
        require(
            totalRedeemed + amount <= totalDeposited,
            "Treasury: insufficient backing"
        );

        // ✅ Check provider identity
        require(
            IServiceProviderNFT(providerNFT).isProvider(msg.sender),
            "Not a registered provider"
        );

        // ✅ Check spending rules
        require(
            ISpendingRules(spendingRules)
                .isProviderAllowed(msg.sender, category),
            "Provider not allowed for category"
        );

        totalRedeemed += amount;

        // Burn pool tokens from provider
        IReliefPoolToken(poolToken).burn(msg.sender, amount);

        // Transfer stablecoin
        IERC20(stablecoin).transfer(msg.sender, amount);

        emit Redeemed(msg.sender, amount, category);
    }
}
