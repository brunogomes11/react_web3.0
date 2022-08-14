// https://eth-goerli.g.alchemy.com/v2/EAGgnIVU5DkAMyAeC4GPa2-efUA_Qgyi

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/EAGgnIVU5DkAMyAeC4GPa2-efUA_Qgyi',
      accounts: ['7c79e7003a8bbaa3999676c1cd43d2e8e4472f42b846341f90b62c9324797b2f']
    }
  }
}