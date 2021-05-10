var MyToken = artifacts.require("MyToken");
var MyTokenSale = artifacts.require("MyTokenSale");

module.exports = async (deployer) => {
  let addr = await web3.eth.getAccounts();

  await deployer.deploy(MyToken, 21000000);
  await deployer.deploy(MyTokenSale, 1, addr[0], MyToken.address);

  // Fund the MyTokenSale contract with minted tokens
  let instance = await MyToken.deployed();
  await instance.transfer(MyTokenSale.address, 21000000);
}
