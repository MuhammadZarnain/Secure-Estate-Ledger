// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistration {
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
        address owner;  
        bool isRegister;
    }

   struct OwnershipHistory {
        uint Land_id;
        address[] previousOwners;
    }

    struct PendingRequest {
        uint Land_id;
        string fullName;
        string fatherName;
        string cnic;
        string email;
        string permanentAddress;
        string temporaryAddress;
        string size;
        string location;
        address owner;
        string requestType; // "register" or "transfer"
    }

    mapping(uint256 => LandDetails) public landRegistry;
    mapping(uint256 => OwnershipHistory) public ownershipHistory;
    uint256 public landCounter;
    uint256[] public registeredLandIds;
    PendingRequest[] public pendingRequests;

    event LandRegistered(uint256 indexed landId, address indexed owner);
    event LandTransferred(uint256 indexed landId, address indexed from, address indexed to);
    event RequestAdded(uint256 indexed landId, string requestType, address indexed requester);
    event RequestVerified(uint256 indexed landId, string requestType, address indexed verifier);

    modifier onlyLandOwner(uint256 _landId) {
        require(msg.sender == landRegistry[_landId].owner, "You are not the owner of this land");
        _;
    }

    function addPendingRequest(
        uint256 _Land_id,
        string memory _fullName,
        string memory _fatherName,
        string memory _cnic,
        string memory _email,
        string memory _permanentAddress,
        string memory _temporaryAddress,
        string memory _size,
        string memory _location,
        address _owner,
        string memory _requestType
    ) internal {
        PendingRequest memory newRequest = PendingRequest({
            Land_id: _Land_id,
            fullName: _fullName,
            fatherName: _fatherName,
            cnic: _cnic,
            email: _email,
            permanentAddress: _permanentAddress,
            temporaryAddress: _temporaryAddress,
            size: _size,
            location: _location,
            owner: _owner,
            requestType: _requestType
        });

        pendingRequests.push(newRequest);

        emit RequestAdded(_Land_id, _requestType, _owner);
    }

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
        require(!landRegistry[_Land_id].isRegister, "Land is Already Registered");

        addPendingRequest(
            _Land_id,
            _fullName,
            _fatherName,
            _cnic,
            _email,
            _permanentAddress,
            _temporaryAddress,
            _size,
            _location,
            msg.sender,
            "register"
        );
    }

    function transferLand(
        uint256 _landId,
        address _recipient,
        string memory _recipientName,
        string memory _recipientCnic,
        string memory _recipientfatherName,
        string memory _currentAddress,
        string memory _permanentAddress,
        string memory _email
    ) external onlyLandOwner(_landId) {
        require(landRegistry[_landId].isRegister, "Land is not registered");

        string memory _size = landRegistry[_landId].size;
        string memory _location = landRegistry[_landId].location;

        addPendingRequest(
            _landId,
            _recipientName,
            _recipientfatherName,
            _recipientCnic,
            _email,
            _permanentAddress,
            _currentAddress,
            _size,
            _location,
            _recipient,
            "transfer"
        );
    }

    function getPendingRequests() external view returns (PendingRequest[] memory) {
        return pendingRequests;
    }

    function verifyRequest(uint256 _index) external {
        PendingRequest memory request = pendingRequests[_index];

        if (keccak256(bytes(request.requestType)) == keccak256(bytes("register"))) {
            _verifyRegisterRequest(request);
        } else if (keccak256(bytes(request.requestType)) == keccak256(bytes("transfer"))) {
            _verifyTransferRequest(request);
        }

        removePendingRequest(_index);
        emit RequestVerified(request.Land_id, request.requestType, msg.sender);
    }

    function _verifyRegisterRequest(PendingRequest memory request) internal {
        LandDetails memory newLand = LandDetails({
            size: request.size,
            location: request.location,
            fullName: request.fullName,
            Land_id: request.Land_id,
            email: request.email,
            fatherName: request.fatherName,
            cnic: request.cnic,
            permanentAddress: request.permanentAddress,
            temporaryAddress: request.temporaryAddress,
            owner: request.owner,
            isRegister: true
        });

        landCounter++;
        registeredLandIds.push(request.Land_id);
        landRegistry[request.Land_id] = newLand;

        emit LandRegistered(request.Land_id, request.owner);
    }

    function _verifyTransferRequest(PendingRequest memory request) internal {
        address previousOwner = landRegistry[request.Land_id].owner;

          ownershipHistory[request.Land_id].previousOwners.push(previousOwner);

        landRegistry[request.Land_id].owner = request.owner;
        landRegistry[request.Land_id].fullName = request.fullName;
        landRegistry[request.Land_id].cnic = request.cnic;
        landRegistry[request.Land_id].email = request.email;
        landRegistry[request.Land_id].fatherName = request.fatherName;
        landRegistry[request.Land_id].temporaryAddress = request.temporaryAddress;
        landRegistry[request.Land_id].permanentAddress = request.permanentAddress;

        emit LandTransferred(request.Land_id, previousOwner, request.owner);
    }

    function removePendingRequest(uint256 _index) internal {
        require(_index < pendingRequests.length, "Invalid index");

        pendingRequests[_index] = pendingRequests[pendingRequests.length - 1];
        pendingRequests.pop();
    }

    function getAllLandDetails() external view returns (LandDetails[] memory) {
        LandDetails[] memory allLands = new LandDetails[](landCounter);

        uint256 index = 0;
        for (uint256 i = 0; i < registeredLandIds.length; i++) {
            uint256 landId = registeredLandIds[i];
            if (landRegistry[landId].isRegister) {
                allLands[index] = landRegistry[landId];
                index++;
            }
        }

        return allLands;
    }

    function getLandDetails(uint256 _landId) external view returns (
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
 function getOwnershipHistory(uint256 _landId) external view returns (address[] memory) {
        return ownershipHistory[_landId].previousOwners;
    }
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

        land.fullName = _fullName;
        land.fatherName = _fatherName;
        land.cnic = _cnic;
        land.permanentAddress = _permanentAddress;
        land.size = _size;
        land.location = _location;
        land.temporaryAddress = _temporaryAddress;
    }
}
