import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect, should, assert } from "chai";
should();
import { ethers } from "hardhat";

describe("ServiceBridge", function () {
    async function deployServiceBridgeFixture() {
        const [owner, enop, scop] = await ethers.getSigners();

        // BridgeRestry Contracts & Library
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


        // ServiceChain Contracts
        // EN bridge 
        const ENbridge = await ethers.getContractFactory("Bridge", {signer: owner});
        const enbridge = await ENbridge.deploy(false);
        await enbridge.deployed();
        await enbridge.registerOperator(enop.address);
        console.log('EN bridge address: ', enbridge.address);

        // EN ERC20 Token
        const ENtoken = await ethers.getContractFactory("ServiceChainToken", {signer: owner});
        const entoken = await ENtoken.deploy(enbridge.address);
        await entoken.deployed(enbridge.address);
        await entoken.addMinter(enbridge.address);
        console.log('EN Token address: ', entoken.address);

        // EN ERC721 Token 
        const ENtoken2 = await ethers.getContractFactory("ServiceChainNFT", {signer: owner});
        const entoken2 = await ENtoken2.deploy(enbridge.address);
        await entoken2.deployed(enbridge.address);
        await entoken2.addMinter(enbridge.address);
        console.log('EN NFT Token address: ', entoken2.address);

        // SCN bridge
        const SCbridge = await ethers.getContractFactory("Bridge", {signer: owner});
        const scbridge = await SCbridge.deploy(false);
        await scbridge.deployed();
        await scbridge.registerOperator(scop.address);
        console.log('SCN bridge address: ', scbridge.address);

        // SCN ERC20 Token 
        const SCtoken = await ethers.getContractFactory("ServiceChainToken", {signer: owner});
        const sctoken = await SCtoken.deploy(scbridge.address);
        await sctoken.deployed(scbridge.address);
        await sctoken.addMinter(scbridge.address);
        console.log('SCN Token address: ', sctoken.address);

        // SCN ERC721 Token
        const SCtoken2 = await ethers.getContractFactory("ServiceChainNFT", {signer: owner});
        const sctoken2 = await SCtoken2.deploy(scbridge.address);
        await sctoken2.deployed(scbridge.address);
        await sctoken2.addMinter(scbridge.address);
        console.log('SCN NFT Token address: ', sctoken2.address);
        console.log('\n\n');

        // EN-SCN pair register
        await enbridge.registerToken(entoken.address, sctoken.address);
        await enbridge.registerToken(entoken2.address, sctoken2.address);
        await enbridge.transferOwnership(enop.address);

        // SCN-EN pair register
        await scbridge.registerToken(sctoken.address, entoken.address);
        await scbridge.registerToken(sctoken2.address, entoken2.address);
        await scbridge.transferOwnership(scop.address);

        return { bridge, enbridge, entoken, scbridge, sctoken, owner, enop, scop };
    }
    describe("BridgePair Test", function () {
        it("getAllBridgePairs", async function () {
            const { bridge, enbridge, entoken, scbridge, sctoken, owner, enop, scop  } = await loadFixture(deployServiceBridgeFixture);

            const pAddress = enbridge.address; 
            const cAddress = scbridge.address; 
            
            await bridge.addBridgePair( "testBridge1", "Cypress", pAddress, "testchildNetwork:1003", cAddress  );
            const allBridges = await bridge.getAllBridgePairs();
            console.log( "Bridge pair list", allBridges );
            expect(1).to.equals(allBridges.length);
            expect("testBridge1@Cypress&testchildNetwork:1003").to.equals(allBridges[0].key);
        });
        it("getAllTokenPairs", async function () {
            const { bridge, enbridge, entoken, scbridge, sctoken, owner, enop, scop  } = await loadFixture(deployServiceBridgeFixture);

            const pAddress = enbridge.address; 
            const cAddress = scbridge.address; 
            
            await bridge.addBridgePair( "testBridge1", "Cypress", pAddress, "testchildNetwork:1003", cAddress  );
            const allTokenPairs = await bridge.getAllTokenPairs();
            console.log( "TokenPair list", allTokenPairs );
            expect(2).to.equals(allTokenPairs.length);            
        });
        it("Transfer value", async function () {
            const { bridge, enbridge, entoken, scbridge, sctoken, owner, enop, scop  } = await loadFixture(deployServiceBridgeFixture);

            const pAddress = enbridge.address; 
            const cAddress = scbridge.address; 
            const alice = '0xc40b6909eb7085590e1c26cb3becc25368e249e9';            

            await bridge.addBridgePair( "testBridge1", "Cypress", pAddress, "testchildNetwork:1003", cAddress  );
            const allBridges = await bridge.getAllBridgePairs();

            let i, j : number;
            let sel : Token;

            // transfer value from all tokens in parentBridge
            for ( i=0; i < allBridges.length ; i++) {

                const jLength = allBridges[i].tokenPairs.length;
                
                for ( j=0 ; j < jLength ; j++) {
                                        
                    // Print token info 
                    sel = allBridges[i].tokenPairs[j].parentToken;      
                    console.log( '\n(' + i + ',' + j + ')\n' + sel);

                    // TokenType.ERC20
                    if ( sel.tokenType == 0 ) {
                        const ENtoken = await ethers.getContractFactory("ServiceChainToken");
                        const entoken = await ENtoken.attach( sel.tokenAddress );

                        const tx = await entoken.requestValueTransfer(100, alice, 0, []);
                        console.log( tx );
                    }
                    // TokenType.ERC721
                    else if ( sel.tokenType == 1 ) {
                        const ENtoken721 = await ethers.getContractFactory("ServiceChainNFT");
                        const entoken721 = await ENtoken721.attach( sel.tokenAddress );

                        const tokenURI = "https://www.klaytn.com";
                        const tokenId = "12345";

                        // await entoken721.mintWithTokenURI(owner, tokenId, tokenURI).send({from: owner.address, gas:1000000});
                        await entoken721.mintWithTokenURI(owner.address, tokenId, tokenURI);
                        let owned = await entoken721.ownerOf(tokenId);
                        console.log(`Current owner: ${owned}`);
                        
                        console.log(`Transfer the tokenId (${tokenId}) to ${alice}`);
                        // Transfer main chain to service chain
                        // const tx = await entoken721.requestValueTransfer(tokenId, alice, []).send({from: owner.address, gas:1000000});
                        const tx = await entoken721.requestValueTransfer(tokenId, alice, []);
                        console.log( tx );
                    }
                } // j
            } // i 
        });
    });    
});