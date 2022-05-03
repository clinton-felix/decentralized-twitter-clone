const { expect } = require("chai");
const { ethers } = require("hardhat");
const { assert } = require("assert")



describe("UserStorage", function () {
  it("can create a new User", async function () {
    const UserStorgae = await ethers.getContractFactory("UserStorage");
    const userStorage = await UserStorgae.deploy();
    await userStorage.deployed();


    const username = await ethers.utils.formatBytes32String("Clinton");
    const createUserTx = await userStorage.createUser(username);

    console.log(createUserTx);

    await createUserTx.wait();
  });

  it("can get user", async () => {
      const UserStorgae = await ethers.getContractFactory("UserStorage");
      const userStorage = await UserStorgae.deploy();
      const storage = await userStorage.deployed()
      const userID = 1

      const userInfo = await storage.getUserFromId(userID)
      const username = await userInfo[1]

      await assert.equal(username, "Clinton")

  })
});
