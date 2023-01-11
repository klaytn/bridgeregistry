// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// import "./AppModel.sol";

enum TokenType {
    ERC20,
    ERC721,
    ERC1155,
    KIP7,
    KIP17,
    KIP37,
    KLAY
}

struct Token {
    address tokenAddress;
    
    // ERC-165 has to be supported, for auto type detection with address
    // https://stackoverflow.com/questions/45364197/how-to-detect-if-an-ethereum-address-is-an-erc20-token-contract
    TokenType tokenType;  
    
    // IERC20Token feature
    string name;
    string symbol;
    uint256 decimals;
}

struct TokenPair {
    Token parentToken;
    Token childToken;
}