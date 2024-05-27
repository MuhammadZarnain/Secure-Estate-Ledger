// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract UserManagement {
    struct User {
        string cnic;
        string name;
        string fatherName;
        string phoneNumber;
        string email;
        string password;
        string permanentAddress;
        string currentAddress;
        bool isregister;
    }

    mapping(address => User) public users;
    mapping(string => address) emailToAddress;
    mapping(address => string) addressToName;
    uint public totalUsers;
    address[] public registeredUsers;
  
 event UserRegistered(
        address indexed userAddress,
        string cnic,
        string name,
        string email
    );
   
    function registerUser(
        string memory _CNIC,
        string memory _name,
        string memory _fatherName,
        string memory _phoneNumber,
        string memory _email,
        string memory _password,
        string memory _permanentAddress,
        string memory _currentAddress
    ) external {
        //guardcheck pattern
        require(!users[msg.sender].isregister, "User with this Ethereum Address already exists");
        
        User memory newUser = User({
            cnic: _CNIC,
            name: _name,
            fatherName: _fatherName,
            phoneNumber: _phoneNumber,
            email: _email,
            password: _password,
            permanentAddress: _permanentAddress,
            currentAddress: _currentAddress,
            isregister: true // Update isregister to true
        });

        users[msg.sender] = newUser;
        emailToAddress[_email] = msg.sender;
        addressToName[msg.sender] = _name;
        totalUsers++; // Increment totalUsers counter
        registeredUsers.push(msg.sender);
        
        emit UserRegistered(msg.sender, _CNIC, _name, _email);
    }


    function loginUser(string memory _email, string memory _password) external {
        require(keccak256(bytes(users[msg.sender].email)) == keccak256(bytes(_email)), "Email does not match");
        require(keccak256(bytes(users[msg.sender].password)) == keccak256(bytes(_password)), "Password does not match");

        users[msg.sender].isregister = true;

    }
     function getAllUsers() public view returns (User[] memory) {
        User[] memory allUsers = new User[](totalUsers);
        for (uint i = 0; i < totalUsers; i++) {
            allUsers[i] = users[registeredUsers[i]];
        }
        return allUsers;
    }
    function getUser(address _owner) public view returns (
        string memory, 
        string memory, 
        string memory, 
        string memory, 
        string memory, 
        string memory, 
        string memory, 
        string memory, 
        bool
    ) {
        User memory user = users[_owner];
        return (
            user.cnic, 
            user.name, 
            user.fatherName, 
            user.phoneNumber, 
            user.email, 
            user.password, 
            user.permanentAddress, 
            user.currentAddress, 
            user.isregister
        );
    }
    

     function logoutUser() external {
        users[msg.sender].isregister = false;
    }
    function getNameForAddress(address _userAddress) public view returns (string memory) {
        return addressToName[_userAddress];
    }
}