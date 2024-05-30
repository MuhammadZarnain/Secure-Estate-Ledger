const { expect } = require("chai");
const hre = require("hardhat");

describe("AdminAuthentication", function () {
  let AdminAuthentication, adminAuthentication, owner, addr1;

  beforeEach(async function () {
    AdminAuthentication = await hre.ethers.getContractFactory("AdminAuthentication");
    [owner, addr1] = await hre.ethers.getSigners();
    adminAuthentication = await AdminAuthentication.deploy();
   
  });

  describe("Add Admin", function () {
    it("Should add a new admin", async function () {
      await expect(adminAuthentication.addAdmin(addr1.address, "password123"))
        .to.emit(adminAuthentication, "AdminAdded")
        .withArgs(addr1.address);
      
    });

    it("Should not allow adding an admin with an empty password", async function () {
      await expect(adminAuthentication.addAdmin(addr1.address, "")).to.be.revertedWith("Empty password");
    });

    it("Should not allow adding an admin that already exists", async function () {
      await adminAuthentication.addAdmin(addr1.address, "password123");
      await expect(adminAuthentication.addAdmin(addr1.address, "password123")).to.be.revertedWith("Admin already exists");
    });
  });

  describe("Login", function () {
    beforeEach(async function () {
      await adminAuthentication.addAdmin(addr1.address, "password123");
    });

    it("Should login successfully with correct credentials", async function () {
      expect(await adminAuthentication.login(addr1.address, "password123")).to.equal(true);
    });

    it("Should not login with incorrect password", async function () {
      await expect(adminAuthentication.login(addr1.address, "wrongpassword")).to.be.revertedWith("Incorrect password");
    });

    it("Should not login if admin does not exist", async function () {
      await expect(adminAuthentication.login(owner.address, "password123")).to.be.revertedWith("Admin does not exist");
    });
  });

  describe("Add Policy", function () {
    beforeEach(async function () {
      await adminAuthentication.addAdmin(owner.address, "ownerpassword");
    });

    it("Should add a policy by admin", async function () {
      await adminAuthentication.addPolicy("Policy Title", "Policy Description");
      const policy = await adminAuthentication.policies(1);
      expect(policy.title).to.equal("Policy Title");
      expect(policy.description).to.equal("Policy Description");
    });

    it("Should not increment policy ID correctly", async function () {
      await adminAuthentication.addPolicy("Policy Title 1", "Policy Description 1");
      await adminAuthentication.addPolicy("Policy Title 2", "Policy Description 2");
      const policy1 = await adminAuthentication.policies(1);
      const policy2 = await adminAuthentication.policies(2);
      expect(policy1.title).to.equal("Policy Title 1");
      expect(policy2.title).to.equal("Policy Title 2");
      expect(await adminAuthentication.nextPolicyId()).to.equal(3);
    });
  });
});

describe("LandRegistration Contract", function () {
  let LandRegistration;
  let landRegistration;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    LandRegistration = await hre.ethers.getContractFactory("LandRegistration");
    [owner, addr1, addr2] = await hre.ethers.getSigners();
    landRegistration = await LandRegistration.deploy();

  });

  describe("Register Land", function () {
    it("Should add a pending registration request", async function () {
      await landRegistration.registerLand(
        "John Doe",
        1,
        "1000 sqft",
        "123 Main St",
        "Father Name",
        "john@example.com",
        "12345-1234567-1",
        "Permanent Address",
        "Temporary Address"
      );

      const pendingRequests = await landRegistration.getPendingRequests();
      expect(pendingRequests.length).to.equal(1);
      expect(pendingRequests[0].fullName).to.equal("John Doe");
    });

    it("Should revert if the land is already registered", async function () {
      await landRegistration.registerLand(
        "John Doe",
        1,
        "1000 sqft",
        "123 Main St",
        "Father Name",
        "john@example.com",
        "12345-1234567-1",
        "Permanent Address",
        "Temporary Address"
      );

      await landRegistration.verifyRequest(0);

      await expect(
        landRegistration.registerLand(
          "Jane Doe",
          1,
          "1000 sqft",
          "123 Main St",
          "Father Name",
          "jane@example.com",
          "12345-1234567-1",
          "Permanent Address",
          "Temporary Address"
        )
      ).to.be.revertedWith("Land is Already Registered");
    });
  });

  describe("Transfer Land", function () {
    it("Should add a pending transfer request", async function () {
      await landRegistration.registerLand(
        "John Doe",
        1,
        "1000 sqft",
        "123 Main St",
        "Father Name",
        "john@example.com",
        "12345-1234567-1",
        "Permanent Address",
        "Temporary Address"
      );

      await landRegistration.verifyRequest(0);

      await landRegistration.transferLand(
        1,
        addr1.address,
        "Jane Doe",
        "12345-1234567-2",
        "Father Name",
        "Current Address",
        "Permanent Address",
        "jane@example.com"
      );

      const pendingRequests = await landRegistration.getPendingRequests();
      expect(pendingRequests.length).to.equal(1);
      expect(pendingRequests[0].owner).to.equal(addr1.address);
    });

    it("Should revert if the caller is not the owner", async function () {
      await landRegistration.registerLand(
        "John Doe",
        1,
        "1000 sqft",
        "123 Main St",
        "Father Name",
        "john@example.com",
        "12345-1234567-1",
        "Permanent Address",
        "Temporary Address"
      );

      await landRegistration.verifyRequest(0);

      await expect(
        landRegistration.connect(addr1).transferLand(
          1,
          addr2.address,
          "Jane Doe",
          "12345-1234567-2",
          "Father Name",
          "Current Address",
          "Permanent Address",
          "jane@example.com"
        )
      ).to.be.revertedWith("You are not the owner of this land");
    });
  });

  describe("Verify Requests", function () {
    it("Should verify a registration request", async function () {
      await landRegistration.registerLand(
        "John Doe",
        1,
        "1000 sqft",
        "123 Main St",
        "Father Name",
        "john@example.com",
        "12345-1234567-1",
        "Permanent Address",
        "Temporary Address"
      );

      await landRegistration.verifyRequest(0);

      const landDetails = await landRegistration.getLandDetails(1);
      expect(landDetails.fullName).to.equal("John Doe");
      expect(landDetails.isRegister);
    });

    it("Should verify a transfer request", async function () {
      await landRegistration.registerLand(
        "John Doe",
        12,
        "1000 sqft",
        "123 Main St",
        "Father Name",
        "john@example.com",
        "12345-1234567-1",
        "Permanent Address",
        "Temporary Address"
      );

      await landRegistration.verifyRequest(0);

      await landRegistration.transferLand(
        12,
        addr1.address,
        "Jane Doe",
        "12345-1234567-2",
        "Father Name",
        "Current Address",
        "Permanent Address",
        "jane@example.com"
      );

      await landRegistration.verifyRequest(0);

    });
  });
});

describe("UserManagement contract", function () {
  let UserManagement;
  let userManagement;
  let owner;
  let addr1;
  beforeEach(async function () {
    UserManagement = await hre.ethers.getContractFactory("UserManagement");
    userManagement = await UserManagement.deploy();
      [owner, addr1] = await hre.ethers.getSigners();
  });

  it("Should register a new user successfully", async function () {
   
    await expect(
      await userManagement.registerUser(
        "1234567890123",
        "John Doe",
        "John's Father",
        "1234567890",
        "john@example.com",
        "password123",
        "Permanent Address",
        "Current Address"
      )
    )
     
  });

  it("Should not allow registering with the same Ethereum address twice", async function () {
    await userManagement.registerUser(
      "1234567890123",
      "John Doe",
      "John's Father",
      "1234567890",
      "john@example.com",
      "password123",
      "Permanent Address",
      "Current Address"
    );

  });

  it("Should log in an existing user", async function () {
    await userManagement.registerUser(
      "1234567890123",
      "John Doe",
      "John's Father",
      "1234567890",
      "john@example.com",
      "password123",
      "Permanent Address",
      "Current Address"
    );

    await userManagement.loginUser("john@example.com", "password123");
    const user = await userManagement.users(owner.address);
    expect(user.isregister).to.equal(true);
  });

  it("Should log out a user", async function () {
    await userManagement.registerUser(
      "1234567890123",
      "John Doe",
      "John's Father",
      "1234567890",
      "john@example.com",
      "password123",
      "Permanent Address",
      "Current Address"
    );

    await userManagement.loginUser("john@example.com", "password123");
    await userManagement.logoutUser();
    const user = await userManagement.users(owner.address);
    expect(user.isregister).to.equal(false);
  });

  it("Should get user details", async function () {
    await userManagement.registerUser(
      "1234567890123",
      "John Doe",
      "John's Father",
      "1234567890",
      "john@example.com",
      "password123",
      "Permanent Address",
      "Current Address"
    );

    const userDetails = await userManagement.getUser(owner.address);
    expect(userDetails[1]).to.equal("John Doe");
    expect(userDetails[2]).to.equal("John's Father");
    expect(userDetails[3]).to.equal("1234567890");
  });
});