export const reliefFundAbi = [
  {
    type: "function",
    name: "donate",
    stateMutability: "nonpayable",
    inputs: [{ name: "amount", type: "uint256" }],
    outputs: [],
  },
  {
    type: "function",
    name: "addBeneficiary",
    stateMutability: "nonpayable",
    inputs: [{ name: "beneficiary", type: "address" }],
    outputs: [],
  },
  {
    type: "function",
    name: "distribution",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: [],
  },
];
