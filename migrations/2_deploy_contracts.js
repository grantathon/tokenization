var MyToken = artifacts.require("MyToken");
var MyTokenSale = artifacts.require("MyTokenSale");
var MyKyc = artifacts.require("Kyc");

require("dotenv").config({path: "../.env"});
// console.log(process.env);

module.exports = async (deployer) => {
  let addr = await web3.eth.getAccounts();

  await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
  await deployer.deploy(MyKyc);
  await deployer.deploy(MyTokenSale, 1, addr[0], MyToken.address, MyKyc.address);

  // Fund the MyTokenSale contract with minted tokens
  let instance = await MyToken.deployed();
  await instance.transfer(MyTokenSale.address, process.env.INITIAL_TOKENS);
}
