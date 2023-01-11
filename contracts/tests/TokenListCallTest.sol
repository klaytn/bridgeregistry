// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

import "../../contracts/interfaces/IERC20Token.sol";
import "../../contracts/interfaces/IBridgeTokens.sol";
import "../../contracts/models/TokenModel.sol";

import "./BridgeTest.sol";
import "./ERC20Test.sol";


contract TokenListCallTest {
    Token[] registeredTokens;
    ParentBridgeTest parentTest; 
    ChildBridgeTest childTest;

    address parent; 
    address child;

    function getParent() public view returns (address){
        return parent;
    }

    function getChild() public view returns (address){
        return child;
    }

    function registered() public {
        parentTest = new ParentBridgeTest();
        parent = address(parentTest);
        Token[] memory tokens = getTokens(IBridgeTokens(parent));
        for (uint256 i = 0; i < tokens.length; i++) {
            registeredTokens.push(tokens[i]);
        }

        childTest = new ChildBridgeTest();
        child = address(childTest);
    }

    function getTokens(IBridgeTokens bridgeTokens)
        public view
        returns (Token[] memory)
    {
        address[] memory tokenContracts = bridgeTokens.getRegisteredTokenList();
        Token[] memory tokens = new Token[](tokenContracts.length);
        for (uint256 i = 0; i < tokenContracts.length; i++) {
            Token memory token;
            IERC20Token tokenContract = IERC20Token(tokenContracts[i]);

            token.tokenAddress = tokenContracts[i];
            token.name = tokenContract.NAME();
            token.symbol = tokenContract.SYMBOL();
            token.decimals = tokenContract.DECIMALS();
            tokens[i] = token;
        }
        return tokens;
    }

    function added() public {
        ERC20Test05 token05 = new ERC20Test05();
        ERC20Test06 token06 = new ERC20Test06();

        parentTest.add(address(token05));
        parentTest.add(address(token06));

        childTest.add(address(token05));
        childTest.add(address(token06));
    }

    function findTokenList() public view returns (Token[] memory) {
        return registeredTokens;
    }
}
