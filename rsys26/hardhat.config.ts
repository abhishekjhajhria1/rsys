import { defineConfig } from "hardhat/config";
import hardhatViem from "@nomicfoundation/hardhat-viem";
import "dotenv/config";

export default defineConfig({
  plugins: [hardhatViem],


  solidity: {
  compilers: [
    {
      version: "0.8.20",
      settings: {},
    },
  ],
},

  networks: {
    sepolia: {
      type: "http",
      url: process.env.SEPOLIA_RPC_URL!,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
});
