pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Kyc is Ownable {
  mapping(address => bool) allowed;

  function setKycCompleted(address addr) public onlyOwner {
    allowed[addr] = true;
  }

  function setKycRevoked(address addr) public onlyOwner {
    allowed[addr] = false;
  }

  function kycCompleted(address addr) public view returns (bool) {
    return allowed[addr];
  }
}
