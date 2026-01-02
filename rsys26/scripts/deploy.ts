import { network } from "hardhat";

async function main() {
  const { viem, networkName } = await network.connect();
  console.log("Deploying to:", networkName);

  // Deploy ReliefNFT
  const reliefNFT = await viem.deployContract("ReliefNFT");
  console.log("ReliefNFT:", reliefNFT.address);

  // Deploy MockUSDC
  const mockUSDC = await viem.deployContract("MockUSDC");
  console.log("MockUSDC:", mockUSDC.address);

  // Deploy ReliefFund
  const reliefFund = await viem.deployContract("ReliefFund", [
    mockUSDC.address,
    reliefNFT.address,
  ]);
  console.log("ReliefFund:", reliefFund.address);
}

main().catch(console.error);
