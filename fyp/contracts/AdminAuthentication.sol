// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
contract AdminAuthentication  {
  struct Admin {
    bool exists;
    string password;
  }

  mapping(address => Admin) admins;

  event AdminAdded(address adminAddress);
  event AdminLoggedIn(address adminAddress);

  modifier onlyAdmin() { // Ownership pattern
    require(admins[msg.sender].exists, "Only admin can call this function");
    _;
  }

  function addAdmin(address _adminAddress, string memory _password) external {
    require(!admins[_adminAddress].exists, "Admin already exists");
    require(bytes(_password).length > 0, "Empty password");
    admins[_adminAddress] = Admin(true, _password);
    emit AdminAdded(_adminAddress);
  }

   function login(address _adminAddress, string memory _password) external view returns (bool) {
    require(admins[_adminAddress].exists, "Admin does not exist");
    require(bytes(_password).length > 0, "Empty password");
    require(keccak256(bytes(admins[_adminAddress].password)) == keccak256(bytes(_password)), "Incorrect password");
    return true;
  }

  function handleSuccessfulLogin(address _adminAddress) public {
      emit AdminLoggedIn(_adminAddress);
  }

  struct Policy {
    string title;
    string description;
  }

  // Mapping of policy ID to Policy struct
  mapping(uint256 => Policy) public policies;

  // Incrementing policy ID
  uint256 public nextPolicyId = 1;

  // Function to add a new policy, accessible only by admins
  function addPolicy(string memory _title, string memory _description) external {
    policies[nextPolicyId] = Policy(_title, _description);
    nextPolicyId++;
  }
}