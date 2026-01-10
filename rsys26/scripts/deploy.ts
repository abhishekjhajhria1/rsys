import  ethers  from "hardhat";

async function main() {
  console.log("Starting deployment...");

  // 1. Deploy CampaignVoting
  const CampaignVoting = await ethers.getContractFactory("CampaignVoting");
  const voting = await CampaignVoting.deploy();
  await voting.waitForDeployment();

  const votingAddress = await voting.getAddress();
  console.log("CampaignVoting deployed at:", votingAddress);

  // 2. Deploy CampaignFactory (pass voting address)
  const CampaignFactory = await ethers.getContractFactory("CampaignFactory");
  const factory = await CampaignFactory.deploy(votingAddress);
  await factory.waitForDeployment();

  const factoryAddress = await factory.getAddress();
  console.log("CampaignFactory deployed at:", factoryAddress);

  console.log("✅ Deployment successful");
}

main().catch((error) => {
  console.error("❌ Deployment failed");
  console.error(error);
  process.exit(1);
});