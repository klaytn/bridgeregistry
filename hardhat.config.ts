import * as dotenv from "dotenv";

import {HardhatUserConfig, task} from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

const config: HardhatUserConfig = {
    
    // solidity: "0.8.17",
    solidity: {
        compilers: [
            {
                version: "0.5.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            {
                version: "0.8.17",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
        ],
    },
    defaultNetwork: "hardhat",
    networks: {
        mainbridge: {
            url: "http://127.0.0.1:8553",
            chainId: 1000,
            //gas: 30000000,
            // gasPrice: 250000000000,
            gasPrice: 50000000000,
            accounts:[
                // 0xe6E1663d44593ccE2Ff77492Ce8b253F3d954319
                // private key of signer for deploy in parent chain
                '0xca8a1ea01a757975d5488cbaab8188dc88b565c69ffc7af4e0c6386eb557c447',
                ], 
            // accounts: {
            //     mnemonic: "test test test test test test test test test test test junk",
            //     initialIndex: 0,
            // },
            // operator: '0x9388349e71140c1f099ca8293892ab0d1e151d4f',
            allowUnlimitedContractSize: true,
        },
        subbridge: {
            url: "http://127.0.0.1:8554",
            chainId: 2000,
            //gas: 30000000,
            // gasPrice: 250000000000,
            gasPrice: 50000000000,
            accounts:[
                // 0x5e2be232b1d7acfb26cd3be819736369807fc8e7
                // private key of signer for deploy in child chain 
                '0x7c6adb02eeca9efd9e4203cc8999e0836a836cbd1f763d4f3940dee39ed55cc6',
                ], 
            // accounts: {
            //     mnemonic: "test test test test test test test test test test test junk",
            //     initialIndex: 1,
            // },
            // operator: '0xcb5e2874276d3a96ab6331cafeb80baa6453eeb0',
            allowUnlimitedContractSize: true,
        },
        hardhat: {
            accounts: {
                accountsBalance: '100000000000000000000000000',
            },
            allowUnlimitedContractSize: true,
        },
    },
};

export default config;
