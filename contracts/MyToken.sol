pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
  constructor(uint256 initialSupply) ERC20("Grant Token", "GBT") {
      _mint(msg.sender, initialSupply);
  }

  function decimals() public view override returns (uint8) {
    return 0;
  }
}
