// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*//////////////////////////////////////////////////////////////
                            INTERFACES
//////////////////////////////////////////////////////////////*/

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
}

interface IPoolToken {
    function mint(address to, uint256 amount) external;
    function burn(address from, uint256 amount) external;
}

interface IServiceProviderNFT {
    function isProvider(address provider) external view returns (bool);
}

interface ICampaign {
    function initiator() external view returns (address);
}

/*//////////////////////////////////////////////////////////////
                            RELIEF POOL
//////////////////////////////////////////////////////////////*/

contract ReliefPool {
    address public campaign;
    address public stablecoin;      // rUSD
    address public poolToken;       // PoolTokenV2
    address public treasury;        // CampaignTreasuryV2
    address public providerNFT;     // ServiceProviderNFT

    uint256 public totalDonated;
    uint256 public totalRedeemed;

    /*//////////////////////////////////////////////////////////////
                                EVENTS
    //////////////////////////////////////////////////////////////*/

    event DonationReceived(address indexed donor, uint256 amount);
    event PoolTokensIssued(address indexed treasury, uint256 amount);
    event Redeemed(address indexed provider, uint256 amount);

    /*//////////////////////////////////////////////////////////////
                              MODIFIERS
    //////////////////////////////////////////////////////////////*/

    modifier onlyCampaignOrInitiator() {
        require(
            msg.sender == campaign ||
            msg.sender == ICampaign(campaign).initiator(),
            "Pool: not authorized"
        );
        _;
    }

    modifier onlyTreasury() {
        require(msg.sender == treasury, "Pool: not treasury");
        _;
    }

    /*//////////////////////////////////////////////////////////////
                              CONSTRUCTOR
    //////////////////////////////////////////////////////////////*/

    constructor(
        address _campaign,
        address _stablecoin,
        address _providerNFT
    ) {
        campaign = _campaign;
        stablecoin = _stablecoin;
        providerNFT = _providerNFT;
    }

    /*//////////////////////////////////////////////////////////////
                        ONE-TIME SETTERS
    //////////////////////////////////////////////////////////////*/

    function setTreasury(address _treasury)
        external
        onlyCampaignOrInitiator
    {
        require(treasury == address(0), "Treasury already set");
        treasury = _treasury;
    }

    function setPoolToken(address _poolToken)
        external
        onlyCampaignOrInitiator
    {
        require(poolToken == address(0), "PoolToken already set");
        poolToken = _poolToken;
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

        totalDonated += amount;

        IPoolToken(poolToken).mint(treasury, amount);

        emit DonationReceived(msg.sender, amount);
        emit PoolTokensIssued(treasury, amount);
    }

    /*//////////////////////////////////////////////////////////////
                        REDEMPTION FLOW
    //////////////////////////////////////////////////////////////*/

    function redeem(address provider, uint256 amount)
        external
        onlyTreasury
    {
        require(amount > 0, "Amount zero");

        require(
            IServiceProviderNFT(providerNFT).isProvider(provider),
            "Not registered provider"
        );

        totalRedeemed += amount;

        IPoolToken(poolToken).burn(msg.sender, amount);
        IERC20(stablecoin).transfer(provider, amount);

        emit Redeemed(provider, amount);
    }
}
