// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract ERC20Test01 {
    string public constant NAME = "Parent ServiceChainToken 01";
    string public constant SYMBOL = "PSCT01";
    uint8 public constant DECIMALS = 18;
    function supportsInterface(bytes4 interfaceId) public pure returns (bool) {
        return interfaceId == 0x7b6bbd84;
    }
}

contract ERC20Test02 {
    string public constant NAME = "Parent ServiceChainToken 02";
    string public constant SYMBOL = "PSCT02";
    uint8 public constant DECIMALS = 9;
    function supportsInterface(bytes4 interfaceId) public pure returns (bool) {
        return interfaceId == 0x7b6bbd84;
    }
}

contract ERC20Test03 {
    string public constant NAME = "Child ServiceChainToken 03";
    string public constant SYMBOL = "CSCT03";
    uint8 public constant DECIMALS = 1;
    function supportsInterface(bytes4 interfaceId) public pure returns (bool) {
        return interfaceId == 0x7b6bbd84;
    }
}
contract ERC20Test04 {
    string public constant NAME = "Child ServiceChainToken 04";
    string public constant SYMBOL = "CSCT04";
    uint8 public constant DECIMALS = 12;
    function supportsInterface(bytes4 interfaceId) public pure returns (bool) {
        return interfaceId == 0x7b6bbd84;
    }
}

contract ERC20Test05 {
    string public constant NAME = "Parent ServiceChainToken 05";
    string public constant SYMBOL = "PSCT05";
    uint8 public constant DECIMALS = 18;
    function supportsInterface(bytes4 interfaceId) public pure returns (bool) {
        return interfaceId == 0x7b6bbd84;
    }
}

contract ERC20Test06 {
    string public constant NAME = "Parent ServiceChainToken 06";
    string public constant SYMBOL = "PSCT06";
    uint8 public constant DECIMALS = 9;
    function supportsInterface(bytes4 interfaceId) public pure returns (bool) {
        return interfaceId == 0x7b6bbd84;
    }
}