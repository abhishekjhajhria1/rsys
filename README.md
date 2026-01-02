# Emergency & Disaster Relief Stablecoin System

A decentralized emergency relief system built on Ethereum (Sepolia) that enables
transparent, NFT-gated distribution of stablecoin aid to verified victims.
## Problem
During disasters, aid distribution is slow, opaque, and vulnerable to misuse.

## Solution
- Victims are verified via **non-transferable NFTs**
- Donations are made in **stablecoins**
- Funds are **automatically distributed on-chain**
- No centralized custody
- Full transparency

## Architecture

### Smart Contracts (Hardhat)
- `ReliefNFT` – Soulbound NFT for verified victims
- `MockUSDC` – Stablecoin for demo
- `ReliefFund` – Collects and distributes funds

### Frontend (Next.js)
- Wallet connection (MetaMask)
- Donate stablecoins
- Admin panel for minting & distribution

## 🔐 Core Features
- NFT-gated eligibility
- ERC20-based donations
- Automated distribution
- On-chain transparency
- No backend server

## 🔮 Future Roadmap
- Volunteer authorization via soulbound NFTs
- Multi-region relief pools
- Cross-chain stablecoin support
- Identity attestations

## 🧪 Network
- Ethereum Sepolia Testnet

## ⚠️ Note
This project is built as a hackathon MVP.
