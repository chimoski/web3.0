// https://eth-ropsten.alchemyapi.io/v2/5Pkvhs_fILcejPH9_Fpbc-Lv2zQXkqzs

require ('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity : '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/5Pkvhs_fILcejPH9_Fpbc-Lv2zQXkqzs',
      accounts :['8b8cfb5b12834275303f144b6a52bf421f25c4b2721d37b368c0965c6ab08ab5']
    }
  }
}