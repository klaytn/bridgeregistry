import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect, should, assert } from "chai";
should();
import { ethers } from "hardhat";

describe("ServiceNetwork", function () {
    async function deployServiceNetworkFixture() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();

        // Deploy StringUtil
        const StringUtil = await ethers.getContractFactory("StringUtil");
        const libString = await StringUtil.deploy();
        await libString.deployed();

        // Deploy IterableBridgeMap
        const IterableBridgeMap = await ethers.getContractFactory("IterableBridgeMap", {
            signer: owner,
            libraries: {
                StringUtil: libString.address,
            },
        });
        const libBridge = await IterableBridgeMap.deploy();
        await libBridge.deployed();

        // Deploy IterableNetworkMap
        const IterableNetworkMap = await ethers.getContractFactory("IterableNetworkMap", {
            signer: owner,
            libraries: {
                StringUtil: libString.address,
            },
        });
        const libNetwork = await IterableNetworkMap.deploy();
        await libNetwork.deployed();

        const ServiceNetwork = await ethers.getContractFactory("ServiceNetwork", {
            signer: owner,
            libraries: {
                StringUtil: libString.address,
                IterableBridgeMap: libBridge.address,
                IterableNetworkMap: libNetwork.address,
            }
        });
        const network = await ServiceNetwork.deploy();

        return { ServiceNetwork, network, owner, otherAccount };
    }

    describe("Networks", function () {
        it("should be empty", async function () {
            const { network } = await loadFixture(deployServiceNetworkFixture);
            const networks = await network.getAllNetworks();
            expect(0).to.equals(networks.length);
        });
        it("should add one Network", async function () {
            const { network } = await loadFixture(deployServiceNetworkFixture);
            await network.addNetwork("123", "test", "Henry Test", "http://127.0.0.1:7351", 123, "Henry Token", "HRT", 18);
            const testNetwork = await network.getNetwork("123:test");
            // console.log("testNetwork is ", testNetwork);

            const allNetworks = await network.getAllNetworks();
            // console.log("All Networks is ", allNetworks);
            expect(1).to.equals(allNetworks.length);
            expect("123:test").to.equals(allNetworks[0].key);

            const networks = await network.getActiveNetworks();
            // console.log("Active Networks is ", networks);
            expect(1).to.equals(networks.length);
            expect("").to.equals(networks[0].key);

            const key = await network.getNetworkKey("1234", "test");
            await network.deleteNetwork(key);

        });
        it("should find an added Network", async function () {
            const { network } = await loadFixture(deployServiceNetworkFixture);
            await network.addNetwork("123", "test", "Henry Test", "http://127.0.0.1:7351", 123, "Henry Token", "HRT", 18);
            const key = await network.getNetworkKey("123", "test");
            const testNetwork = await network.getNetwork(key);
            key.should.equal("123:test");
            testNetwork.should.have.property("chainId");
            testNetwork.chainId.should.equal('123');
            await network.deleteNetwork(key);
        });
        it("should delete the added Network", async function () {
            const { network } = await loadFixture(deployServiceNetworkFixture);
            await network.addNetwork("123", "test", "Henry Test", "http://127.0.0.1:7351", 123, "Henry Token", "HRT", 18);
            const key = await network.getNetworkKey("123", "test");
            key.should.equal("123:test");
            await network.deleteNetwork(key);
            const testNetwork = await network.getNetwork(key);
            testNetwork.should.have.property("chainId");
            testNetwork.chainId.should.empty;
        });
    });
    describe("Error Tests", function () {
        it("should cause the error because of a different input key", async function () {
            const { network } = await loadFixture(deployServiceNetworkFixture);
            await network.addNetwork("123", "test", "Henry Test", "http://127.0.0.1:7351", 123, "Henry Token", "HRT", 18);
            await expect(
                network.updateNetwork("1234:badkey", "123", "test", "Henry Test", "http://127.0.0.1:7351", 123)
            ).to.be.revertedWith("VM Exception while processing transaction: reverted with reason string 'Not Found, current key 1234:badkey is dirrent from 123:test'");
        });
        it("should cause the error because same key is inserted", async function () {
            const { network } = await loadFixture(deployServiceNetworkFixture);
            await network.addNetwork("123", "test", "Henry Test", "http://127.0.0.1:7351", 123, "Henry Token", "HRT", 18);
            await expect(
                network.addNetwork("123", "test", "Henry Test 2", "http://127.0.0.1:7351", 123, "Henry Token", "HRT", 18)
            ).to.be.revertedWith("VM Exception while processing transaction: reverted with reason string '123:test already exists'");
        });
    });
});