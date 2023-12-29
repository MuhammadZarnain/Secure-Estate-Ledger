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

  

    function registerUser(
        string memory _CNIC,
        string memory _name,
        string memory _fatherName,
        string memory _phoneNumber,
        string memory _email,
        string memory _password,
        string memory _permanentAddress,
        string memory _currentAddress
    ) external  {

       // require(bytes(_email).length > 0, "Email Address cannot be empty");
        //require(bytes(_password).length > 0, "Password cannot be empty");
        require(users[msg.sender].isregister == false, "User with this Ethereum Address already exists");
        //require(emailToAddress[_email] == address(0), "User with this Email Address already exists");
        
        User memory newUser = User({
            cnic: _CNIC,
            name: _name,
            fatherName: _fatherName,
            phoneNumber: _phoneNumber,
            email: _email,
            password: _password,
            permanentAddress: _permanentAddress,
            currentAddress: _currentAddress,
            isregister: false
        });

        users[msg.sender] = newUser;
       
        
    }

    function loginUser(string memory _email, string memory _password) external {
        require(keccak256(bytes(users[msg.sender].email)) == keccak256(bytes(_email)), "Email does not match");
        require(keccak256(bytes(users[msg.sender].password)) == keccak256(bytes(_password)), "Password does not match");

        users[msg.sender].isregister = true;

    }
    function getUser() public view returns (string memory, string memory, string memory, string memory) {
        User memory user = users[msg.sender];
        return (user.cnic,user.name, user.email, user.password);
    }

     function logoutUser() external {
        users[msg.sender].isregister = false;
    }
}