require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

const { API_URL, PRIVATE_KEY } = process.env;

/**
* @type import('hardhat/config').HardhatUserConfig
*/
module.exports = {
  solidity: '0.8.4',
  paths: {
    artifacts: './gnosis-safe-dapp/src/artifacts',
  },
  defaultNetwork: 'rinkeby',
  networks: {
    rinkeby: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    },
  }
};
