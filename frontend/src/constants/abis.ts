export const ERC20_ABI = [
  {
    name: "approve",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [{ type: "bool" }],
  },
];

export const RELIEF_POOL_ABI = [
  {
    name: "donate",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ name: "amount", type: "uint256" }],
    outputs: [],
  },
];

export const ADMIN_NFT_ABI = [
  {
    name: "issueVolunteer",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ name: "volunteer", type: "address" }],
    outputs: [],
  },
];

export const VICTIM_NFT_ABI = [
  {
    name: "verifyVictim",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ name: "victim", type: "address" }],
    outputs: [],
  },
];

export const TREASURY_ABI = [
  {
    name: "redeemForProvider",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "provider", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "category", type: "uint8" },
    ],
    outputs: [],
  },
];

export const RELIEF_POOL_EVENTS_ABI = [
  {
    type: "event",
    name: "DonationReceived",
    inputs: [
      { name: "donor", type: "address", indexed: true },
      { name: "amount", type: "uint256", indexed: false },
    ],
  },
  {
    type: "event",
    name: "PoolTokensIssued",
    inputs: [
      { name: "treasury", type: "address", indexed: true },
      { name: "amount", type: "uint256", indexed: false },
    ],
  },
  {
    type: "event",
    name: "Redeemed",
    inputs: [
      { name: "provider", type: "address", indexed: true },
      { name: "amount", type: "uint256", indexed: false },
    ],
  },
];
