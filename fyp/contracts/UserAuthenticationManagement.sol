// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract UserAuthenticationManagement {
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
    mapping(address => string) addressToName; // New mapping to store names associated with addresses

    function registerUser(
        string memory _CNIC,
        string memory _name,
        string memory _fatherName,
        string memory _phoneNumber,
        string memory _email,
        string memory _password,
        string memory _permanentAddress,
        string memory _currentAddress
    ) public {

        require(users[msg.sender].isregister == false, "User with this Ethereum Address already exists");

        User memory newUser = User({
            cnic: _CNIC,
            name: _name,
            fatherName: _fatherName,
            phoneNumber: _phoneNumber,
            email: _email,
            password: _password,
            permanentAddress: _permanentAddress,
            currentAddress: _currentAddress,
            isregister: true
        });

        users[msg.sender] = newUser;
        emailToAddress[_email] = msg.sender;
        addressToName[msg.sender] = _name; // Store the name associated with the Ethereum address
    }

    function loginUser(string memory _email, string memory _password) public view returns (bool) {
        address userAddress = emailToAddress[_email];
        require(userAddress != address(0), "Email not found");

        User memory user = users[userAddress];

        // Note: In a real-world scenario, you should use a secure password hashing algorithm
        return (keccak256(abi.encodePacked(_password)) == keccak256(abi.encodePacked(user.password)));
    }

    function getUser() public view returns (string memory, string memory, string memory, string memory) {
        User memory user = users[msg.sender];
        return (user.cnic, user.name, user.email, user.password);
    }

    // New function to retrieve the name associated with an address
    function getNameForAddress(address _userAddress) public view returns (string memory) {
        return addressToName[_userAddress];
    }
}
