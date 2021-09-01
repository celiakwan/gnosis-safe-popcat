const hre = require('hardhat');

const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);

  const Popcat = await hre.ethers.getContractFactory('Popcat');
  const popcat = await Popcat.deploy();
  console.log('Contract deployed to address:', popcat.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
