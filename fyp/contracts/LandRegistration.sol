// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./UserManagement.sol";
contract LandRegistration is UserManagement{
    // Struct to represent the land details
    struct LandDetails {
        uint Land_id;
        string fullName;
        string fatherName;
        string cnic;
        string email;
        string permanentAddress;
        string temporaryAddress;
        string size;
        string location;
        address owner;  // Address of the person who owns the land
        bool isRegister;
    }

    // Mapping to store land details by land ID
    mapping(uint256 => LandDetails) public landRegistry;

    // Event emitted when a new land is registered
   // event LandRegistered(uint256 indexed landId, address indexed owner);

    // Modifier to check if the caller is the owner of the land
    modifier onlyLandOwner(uint256 _landId) {
        require(msg.sender == landRegistry[_landId].owner, "You are not the owner of this land");
        _;
    }

    // Function to register a new land
    function registerLand(
        string memory _fullName,
        uint _Land_id,
        string memory _size,
        string memory _location,
        string memory _fatherName,
        string memory _email,
        string memory _cnic,
        string memory _permanentAddress,
        string memory _temporaryAddress
    ) external {
            require(  !landRegistry[_Land_id].isRegister, "Land is Already Registered");

        // Increment land counter
        //landCounter++;

        // Create a new LandDetails struct
        LandDetails memory newLand = LandDetails({
            size: _size,
            location: _location,
            fullName: _fullName,
            Land_id: _Land_id,
            email: _email,
            fatherName: _fatherName,
            cnic: _cnic,
            permanentAddress: _permanentAddress,
            temporaryAddress: _temporaryAddress,
            owner: msg.sender,
            isRegister: true

        });

        // Store the new land details in the registry
        landRegistry[_Land_id] = newLand;

        // Emit an event
        //emit LandRegistered(landCounter, msg.sender);
    }

    // Function to get land details by land ID
    function getLandDetails(uint256 _landId)
        external
        view
        returns (
            string memory fullName,
            string memory email,
            string memory fatherName,
            string memory cnic,
            string memory permanentAddress,
            string memory temporaryAddress,
            string memory _size,
            string memory _location,
            address owner
        )
    {
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

    // Function to update land details (only the owner can update)
    function updateLandDetails(
        uint256 _landId,
        string memory _fullName,
        string memory _fatherName,
        string memory _cnic,
        string memory _permanentAddress,
        string memory _size,
        string memory _location,
        string memory _temporaryAddress
    ) external onlyLandOwner(_landId) {
        LandDetails storage land = landRegistry[_landId];

        // Update the land details
        land.fullName = _fullName;
        land.fatherName = _fatherName;
        land.cnic = _cnic;
        land.permanentAddress = _permanentAddress;
        land.size= _size;
        land.location= _location;
        land.temporaryAddress = _temporaryAddress;
    }
}