// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

import "./TokenModel.sol";

struct BridgePair {
    // BridgePair's key made by name @ parentBridge.name : childBridge.name
    string key;
    string name;

    // // struct 구조
    // Bridge parentBridge;
    // Bridge childBridge;

    string parentBridgeName;
    address parentBridgeAddress;
    string childBridgeName;
    address childBridgeAddress;
    TokenPair[] tokenPairs;
}

// struct Bridge {
//     string name;
//     address bridgeAddress;
//     bool depth;
//     Token[] registeredTokens;
// }