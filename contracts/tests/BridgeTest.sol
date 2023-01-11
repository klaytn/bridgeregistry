// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./ERC20Test.sol";

contract ParentBridgeTest {
    address[] public tokens;

    constructor() {
        ERC20Test01 token01 = new ERC20Test01();
        ERC20Test02 token02 = new ERC20Test02();

        tokens.push(address(token01));
        tokens.push(address(token02));
    }


    function add( address token ) external {
        tokens.push( token );
    }

    function getRegisteredTokenList() external view returns (address[] memory) {
        return tokens;
    }

    // dummy function for test
    function getRegisteredChildTokenList() external view returns (address[] memory) {
        return tokens;
    }
}

contract ChildBridgeTest {
    address[] public tokens;

    constructor() {
        ERC20Test03 token03 = new ERC20Test03();
        ERC20Test04 token04 = new ERC20Test04();

        tokens.push(address(token03));
        tokens.push(address(token04));
    }

    function add( address token ) external {
        tokens.push( token );
    }

    function getRegisteredTokenList() external view returns (address[] memory) {
        return tokens;
    }
}