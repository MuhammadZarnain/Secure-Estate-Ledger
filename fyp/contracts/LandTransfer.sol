// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./LandRegistration.sol";

contract LandTransfer is LandRegistration {
    struct Land {
        address owner;
        string fullName;
        string recipientName;
        string cnic;
        string recipientCnic;
        string currentAddress;
        string permanentAddress;
        string email;
        bool isTransferred;
    }

    mapping(uint256 => Land) public lands;

    function incrementLandCounter() public {
        landCounter++;
    }

    function transferLand(
        string memory _fullName,
        string memory _recipientName,
        string memory _cnic,
        string memory _recipientCnic,
        string memory _currentAddress,
        string memory _permanentAddress,
        string memory _email
    ) external {
        landCounter++;
        lands[landCounter] = Land({
            owner: msg.sender,
            fullName: _fullName,
            recipientName: _recipientName,
            cnic: _cnic,
            recipientCnic: _recipientCnic,
            currentAddress: _currentAddress,
            permanentAddress: _permanentAddress,
            email: _email,
            isTransferred: false
        });
    }

    function initiateTransfer(uint256 _landId) external {
        require(lands[_landId].owner == msg.sender, "You are not the owner of this land");
        require(!lands[_landId].isTransferred, "Land is already transferred");
        
        // Additional checks to ensure the land is registered
        require(bytes(lands[_landId].fullName).length > 0, "Land is not registered");

        // If all conditions are met, mark the land as transferred
        lands[_landId].isTransferred = true;
        emit LandTransferred(_landId, msg.sender, address(0)); // Transfer to address(0) signifies transfer to nobody
    }

    function getLandDetails(uint256 _landId) external view override returns (
        string memory fullName,
        string memory email,
        string memory fatherName,
        string memory cnic,
        string memory permanentAddress,
        string memory temporaryAddress,
        string memory _size,
        string memory _location,
        address owner
    ) {
        LandDetails memory land = landRegistry[_landId];
        return (
            land.fullName,
            land.email,
            land.fatherName,
            land.cnic,
            land.permanentAddress,
            land.temporaryAddress,
            land.size,
            land.location,
            land.owner
        );
    }
}