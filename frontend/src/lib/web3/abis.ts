// Minimal ABIs required for frontend interaction
// Only include functions/events we actually use

export const ReliefPoolABI = [
  {
    type: "function",
    name: "totalFunds",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
  },
] as const;

export const ReliefStablecoinABI = [
 {
    type: "function",
    name: "mint",
    stateMutability: "nonpayable",
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [],
  },
] as const;

export const CampaignVotingABI = [
  {
    type: "function",
    name: "approveCampaign",
    stateMutability: "nonpayable",
    inputs: [
      { name: "name", type: "string" },
      { name: "proposer", type: "address" },
    ],
    outputs: [],
  },
] as const;


export const CampaignFactoryABI = [
  {
    type: "function",
    name: "createCampaign",
    stateMutability: "nonpayable",
    inputs: [
      { name: "name", type: "string" },
      { name: "metadataURI", type: "string" },
    ],
    outputs: [],
  },
  {
    type: "event",
    name: "CampaignCreated",
    inputs: [
      { indexed: true, name: "campaign", type: "address" },
      { indexed: true, name: "initiator", type: "address" },
      { indexed: false, name: "name", type: "string" },
    ],
  },
] as const;


export const ERC20ABI = [
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [{ type: "bool" }],
  },
] as const;

export const ReliefPoolDonateABI = [
  {
    type: "function",
    name: "donate",
    stateMutability: "nonpayable",
    inputs: [{ name: "amount", type: "uint256" }],
    outputs: [],
  },
] as const;


export const VolunteerNFTABI = [
  {
    type: "function",
    name: "issueVolunteer",
    stateMutability: "nonpayable",
    inputs: [{ name: "volunteer", type: "address" }],
    outputs: [],
  },
] as const;


export const VictimNFTABI = [
  {
    type: "function",
    name: "verifyVictim",
    stateMutability: "nonpayable",
    inputs: [{ name: "victim", type: "address" }],
    outputs: [],
  },
] as const;



export const ServiceProviderNFTABI = [
  {
    type: "function",
    name: "registerProvider",
    stateMutability: "nonpayable",
    inputs: [{ name: "provider", type: "address" }],
    outputs: [],
  },
] as const;


export const CampaignTreasuryABI = [
  {
    type: "function",
    name: "redeemForProvider",
    stateMutability: "nonpayable",
    inputs: [
      { name: "provider", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [],
  },
] as const;


export const CampaignABI = [
  {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "string" }],
  },
  {
    type: "function",
    name: "metadataURI",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "string" }],
  },
  {
    type: "function",
    name: "initiator",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "address" }],
  },
] as const;
