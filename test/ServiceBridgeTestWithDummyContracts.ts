import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect, should, assert } from "chai";
should();
import { ethers } from "hardhat";

describe("ServiceBridge", function () {
    async function deployServiceBridgeFixture() {
        const [owner, otherAccount] = await ethers.getSigners();

        const StringUtil = await ethers.getContractFactory("StringUtil");
        const stringUtilLib = await StringUtil.deploy();
        await stringUtilLib.deployed();

        const IterableBridgeMap = await ethers.getContractFactory("IterableBridgeMap", {
            signer: owner,
            libraries: {
                StringUtil: stringUtilLib.address,
            },
        });
        const iterableBridgeMapLib = await IterableBridgeMap.deploy();
        await iterableBridgeMapLib.deployed();

        const ServiceBridge = await ethers.getContractFactory("ServiceBridge", {
            signer: owner,
            libraries: {
                IterableBridgeMap: iterableBridgeMapLib.address,
            }
        });
        const bridge = await ServiceBridge.deploy();
        await bridge.deployed();

        const TokenListCallTest = await ethers.getContractFactory("TokenListCallTest", {
            signer: owner
        });
        const tokenListCallTest = await TokenListCallTest.deploy();
        await tokenListCallTest.registered();

        return { bridge, tokenListCallTest, owner, otherAccount };
    }

    describe("BridgePair Test", function () {
        it("addBridgePair & getBridge", async function () {
            const { bridge, tokenListCallTest } = await loadFixture(deployServiceBridgeFixture);
                
            const pAddress = await tokenListCallTest.getParent(); 
            // console.log("pAddress", pAddress);
            const cAddress = await tokenListCallTest.getChild(); 
            // console.log("cAddress", cAddress);

            await bridge.addBridgePair( "testBridge", "Cypress", pAddress, "testchildNetwork:1003", cAddress  );
            const aBridge = await bridge.getBridge("testBridge@Cypress&testchildNetwork:1003");
            expect("testBridge@Cypress&testchildNetwork:1003").to.equals(aBridge.key);
        });
        it("getAllBridgePairs", async function () {
            const { bridge, tokenListCallTest } = await loadFixture(deployServiceBridgeFixture);

            const pAddress = await tokenListCallTest.getParent(); 
            const cAddress = await tokenListCallTest.getChild(); 
            
            await bridge.addBridgePair( "testBridge1", "Cypress", pAddress, "testchildNetwork:1003", cAddress  );
            await bridge.addBridgePair( "testBridge2", "Cypress", pAddress, "testchildNetwork:1004", cAddress  );
            await bridge.addBridgePair( "testBridge3", "Cypress", pAddress, "testchildNetwork:1005", cAddress  );
            const allBridges = await bridge.getAllBridgePairs();
            expect(3).to.equals(allBridges.length);
            expect("testBridge1@Cypress&testchildNetwork:1003").to.equals(allBridges[0].key);
            expect("testBridge2@Cypress&testchildNetwork:1004").to.equals(allBridges[1].key);
            expect("testBridge3@Cypress&testchildNetwork:1005").to.equals(allBridges[2].key);
        });
        it("deleteBridge", async function () {
            const { bridge, tokenListCallTest } = await loadFixture(deployServiceBridgeFixture);

            const pAddress = await tokenListCallTest.getParent(); 
            const cAddress = await tokenListCallTest.getChild(); 

            await bridge.addBridgePair( "testBridge1", "Cypress", pAddress, "testchildNetwork:1003", cAddress  );
            await bridge.addBridgePair( "testBridge2", "Cypress", pAddress, "testchildNetwork:1004", cAddress  );
            const allBridges1 = await bridge.getAllBridgePairs();
            expect(2).to.equals(allBridges1.length);
            await bridge.deleteBridge("testBridge1@Cypress&testchildNetwork:1003");
            const allBridges2 = await bridge.getAllBridgePairs();
            expect(1).to.equals(allBridges2.length);
            expect("testBridge2@Cypress&testchildNetwork:1004").to.equals(allBridges2[0].key);
            await bridge.deleteBridge("testBridge2@Cypress&testchildNetwork:1004");
            const allBridges3 = await bridge.getAllBridgePairs();
            expect(0).to.equals(allBridges3.length);
        });
        it("Get All Token List", async function () {
            const { bridge, tokenListCallTest } = await loadFixture(deployServiceBridgeFixture);
            
            const pAddress = await tokenListCallTest.getParent(); 
            const cAddress = await tokenListCallTest.getChild(); 

            await bridge.addBridgePair( "testBridge1", "Cypress", pAddress, "testchildNetwork:1003", cAddress  );
            await bridge.addBridgePair( "testBridge2", "Cypress", pAddress, "testchildNetwork:1004", cAddress  );
            await bridge.addBridgePair( "testBridge3", "Cypress", pAddress, "testchildNetwork:1005", cAddress  );

            await tokenListCallTest.added();
            await bridge.updateParentTokenList( "testBridge1@Cypress&testchildNetwork:1003" );

            const allTokenNum = await bridge.getTotalTokensNum();
            console.log( "tokens number : ", allTokenNum );        
            expect(16).to.equals(allTokenNum);
            const allTokenPairs = await bridge.getAllTokenPairs();
            console.log( "tokens list", allTokenPairs );
            expect(8).to.equals(allTokenPairs.length);
            
        });
    });    
    // describe("BridgePair In Wallet", function () {
    //     it("should be empty when deployed", async function () {
    //         const { bridge } = await loadFixture(deployServiceBridgeFixture);
    //         const bridgePairs = await bridge.getAllBridgePairs();
    //         expect(0).to.equals(bridgePairs.length);
    //     });
    //     it("should be deploy brige contract and token contracts", async function () {
    //     });
    //     it("should be add with parent and child in network", async function () {
    //     });
    //     it("should be registered the token infomations of bridge", async function () {
    //     });
    //     it("should be list the parent and child tokens of a specific network", async function () {
    //     });
    //     it("Pepper: should be check CRUD permission of networks, bridges and tokens", async function () {
    //     });
    //     it("Optional: should be list tokens with klay", async function () {
    //     });
    //     it("Optional: should be add layer 3 network and game tokens", async function () {
    //     });
    // });
});