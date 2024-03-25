const { expect } = require("chai");
const hre = require("hardhat");
describe("AdminAuthentication", function () {
  let AdminAuthentication;
  let adminAuthentication;
  let adminAddress;

  beforeEach(async function () {
    // Deploy the contract before each test
    AdminAuthentication = await hre.ethers.getContractFactory("AdminAuthentication");
    adminAuthentication = await AdminAuthentication.deploy();
    await adminAuthentication.waitForDeployment();

    // Get the first account as the admin address
    [adminAddress] = await hre.ethers.getSigners();
  });

  it("should add admin", async function () {
    // Add an admin
    await adminAuthentication.addAdmin(adminAddress.address, "adminPassword");

    
  });

  it("should login admin", async function () {
    // Add an admin
    await adminAuthentication.addAdmin(adminAddress.address, "adminPassword");

    // Login with correct password
    const loggedIn = await adminAuthentication.login("adminPassword");
    expect(loggedIn).to.equal(true);

    // Login with incorrect password
    await expect(adminAuthentication.login("wrongPassword")).to.be.revertedWith("Incorrect password");
  });

  it("should add policy", async function () {
    // Add an admin
    await adminAuthentication.addAdmin(adminAddress.address, "adminPassword");

    // Add a policy
    await adminAuthentication.addPolicy("Policy Title", "Policy Description");

    // Check if the policy exists
    const policy = await adminAuthentication.policies(1);
    expect(policy.title).to.equal("Policy Title");
    expect(policy.description).to.equal("Policy Description");
  });

  it("should revert when adding admin with empty password", async function () {
    // Attempt to add an admin with an empty password
    await expect(adminAuthentication.addAdmin(adminAddress.address, "")).to.be.revertedWith("Empty password");
  });

  it("should revert when logging in with empty password", async function () {
    // Add an admin
    await adminAuthentication.addAdmin(adminAddress.address, "adminPassword");

    // Attempt to login with an empty password
    await expect(adminAuthentication.login("")).to.be.revertedWith("Empty password");
  });

  it("should revert when admin already exists", async function () {
    // Add an admin
    await adminAuthentication.addAdmin(adminAddress.address, "adminPassword");

    // Attempt to add the same admin again
    await expect(adminAuthentication.addAdmin(adminAddress.address, "newPassword")).to.be.revertedWith("Admin already exists");
  });

  it("should revert when logging in with non-existent admin", async function () {
    // Deploy the contract with no admins added
    const adminAuthentication = await AdminAuthentication.deploy();
  
    // Attempt to log in with an address that is not registered as an admin
    const nonAdminAddress = "0x1234567890123456789012345678901234567890";
  
    // Specify the sender address using the 'connect' method
    const signer = await hre.ethers.provider.getSigner(nonAdminAddress);
    const adminAuthenticationConnected = adminAuthentication.connect(signer);
  
    // Call the login function
    try {
      await adminAuthenticationConnected.login("password");
      // If the login function didn't revert, the test should fail
      throw new Error("Expected login to revert");
    } catch (error) {
      // Check if the error message matches the expected revert reason
      expect(error.message).to.contain("Admin does not exist");
    }
  });
  
  it("should handle policy ID collision", async function () {
    // Add an admin
    await adminAuthentication.addAdmin(adminAddress.address, "adminPassword");

    // Add a policy with ID 1
    await adminAuthentication.addPolicy("Policy Title 1", "Policy Description 1");

    // Add another policy, which should have ID 2
    await adminAuthentication.addPolicy("Policy Title 2", "Policy Description 2");

    // Check if the policy with ID 2 exists
    const policy = await adminAuthentication.policies(2);
    expect(policy.title).to.equal("Policy Title 2");
    expect(policy.description).to.equal("Policy Description 2");
  });

  it("should handle Unicode characters in passwords", async function () {
    // Add an admin with a password containing Unicode characters
    await adminAuthentication.addAdmin(adminAddress.address, "😀🔑😀");

    // Login with the Unicode password
    const loggedIn = await adminAuthentication.login("😀🔑😀");
    expect(loggedIn).to.equal(true);
  });
  
  it("should handle large number of policies", async function () {
    // Deploy the contract
    const adminAuthentication = await AdminAuthentication.deploy();
  
    // Add an admin
    await adminAuthentication.addAdmin(adminAddress.address, "adminPassword");
  
    // Add multiple policies
    const numPolicies = 10;
  
    for (let i = 0; i < numPolicies; i++) {
      await adminAuthentication.addPolicy(`Policy Title ${i}`, `Policy Description ${i}`);
    }
  
    // Check if the last policy added exists
    const lastPolicyId = numPolicies;
    const lastPolicy = await adminAuthentication.policies(lastPolicyId);
    expect(lastPolicy.title).to.equal(`Policy Title ${numPolicies - 1}`);
    expect(lastPolicy.description).to.equal(`Policy Description ${numPolicies - 1}`);
  });
});



describe("LandRegistration", function () {
  let LandRegistration;
  let landRegistration;
  let owner;
  let addr1;
  
 

  beforeEach(async function () {
    LandRegistration = await hre.ethers.getContractFactory("LandRegistration");
    [owner, addr1] = await hre.ethers.getSigners();

    landRegistration = await LandRegistration.deploy();
    //await landRegistration.waitForDeployment();
  });
  
  it("Should register a new land", async function () {
    await landRegistration.registerLand(
      "John Doe",
      1,
      "100x100",
      "Location",
      "John's Father",
      "john@example.com",
      "123456789",
      "Permanent Address",
      "Temporary Address"
    );

    const landDetails = await landRegistration.getLandDetails(1);
    expect(landDetails[0]).to.equal("John Doe"); // fullName
    expect(landDetails[1]).to.equal("john@example.com"); // email
    expect(landDetails[2]).to.equal("John's Father"); // fatherName
    expect(landDetails[3]).to.equal("123456789"); // cnic
    expect(landDetails[4]).to.equal("Permanent Address"); // permanentAddress
    expect(landDetails[5]).to.equal("Temporary Address"); // temporaryAddress
    expect(landDetails[6]).to.equal("100x100"); // size
    expect(landDetails[7]).to.equal("Location"); // location
    expect(landDetails[8]).to.equal(owner.address); // owner
  });

  it("Should update land details", async function () {
    await landRegistration.registerLand(
      "John Doe",
      1,
      "100x100",
      "Location",
      "John's Father",
      "john@example.com",
      "123456789",
      "Permanent Address",
      "Temporary Address"
    );

    await landRegistration.connect(owner).updateLandDetails(
      1,
      "Jane Doe",
      "Jane's Father",
      "987654321",
      "New Permanent Address",
      "200x200",
      "New Location",
      "New Temporary Address"
    );

    const updatedLandDetails = await landRegistration.getLandDetails(1);
    expect(updatedLandDetails[0]).to.equal("Jane Doe"); // fullName
    expect(updatedLandDetails[1]).to.equal("john@example.com"); // email
    expect(updatedLandDetails[2]).to.equal("Jane's Father"); // fatherName
    expect(updatedLandDetails[3]).to.equal("987654321"); // cnic
    expect(updatedLandDetails[4]).to.equal("New Permanent Address"); // permanentAddress
    expect(updatedLandDetails[5]).to.equal("New Temporary Address"); // temporaryAddress
    expect(updatedLandDetails[6]).to.equal("200x200"); // size
    expect(updatedLandDetails[7]).to.equal("New Location"); // location
    expect(updatedLandDetails[8]).to.equal(owner.address); // owner
  });

 it("Should not allow non-owners to update land details", async function () {
    const Land_id = 1;
    const fullName = "John Doe";
    const fatherName = "Doe Sr.";
    const cnic = "12345-678910";
    const email = "john@example.com";
    const permanentAddress = "123 Main St";
    const temporaryAddress = "456 Elm St";
    const size = "100 sq. yards";
    const location = "City XYZ";

    await landRegistration.registerLand(
      fullName,
      Land_id,
      size,
      location,
      fatherName,
      email,
      cnic,
      permanentAddress,
      temporaryAddress
    );

    await expect(
      landRegistration.connect(addr1).updateLandDetails(
        Land_id,
        "Updated Name",
        "Updated Father Name",
        "Updated CNIC",
        "Updated Permanent Address",
        "Updated Size",
        "Updated Location",
        "Updated Temporary Address"
      )
    ).to.be.revertedWith("You are not the owner of this land");
  });
});