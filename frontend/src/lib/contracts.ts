export const CAMPAIGN_FACTORY_ADDRESS =
  "0xYOUR_FACTORY_ADDRESS_HERE";

export const CAMPAIGN_FACTORY_ABI = [
  {
    "inputs": [],
    "name": "totalCampaigns",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "campaigns",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  }
];
