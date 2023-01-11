import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect, should } from "chai";
should();
import { ethers } from "hardhat";

describe("ServiceNetworkKey", function () {
    async function deployServiceNetworkKeyFixture() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();

        const networkKeyModel = await ethers.getContractFactory("NetworkKeyModel");
        const networkKey = await networkKeyModel.deploy();

        return { networkKeyModel, networkKey, owner, otherAccount };
    }

    describe("Deployed Contract", function () {
        it("should get Key", async function () {
            const { networkKey } = await loadFixture(deployServiceNetworkKeyFixture);
            const id = await networkKey.getKey("1234", "test");
            expect(id).to.equals("1234:test");
        });
    });
});