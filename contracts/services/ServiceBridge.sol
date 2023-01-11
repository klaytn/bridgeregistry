// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "../interfaces/IBridgeTokens.sol";
import "../interfaces/IERC20Token.sol";
import "../interfaces/IERC721Token.sol";

import "../models/TokenModel.sol";
import "../models/BridgeModel.sol";
import "../models/NetworkKeyModel.sol";
import "../libs/IterableBridgeMap.sol";

contract ServiceBridge {
    using IterableBridgeMap for IterableBridgeMap.Map;
    IterableBridgeMap.Map private bridgePairs;

    receive() external payable {}

    fallback() external payable {}

    function addBridgePair(
        string memory _name, 
        string memory _parentBridgeName, 
        address _parentBridgeAddress,
        string memory _childBridgeName, 
        address _childBridgeAddress ) public 
    {
        string memory _key; 
        _key = string.concat( _name, "@", _parentBridgeName, "&", _childBridgeName );
        require(!bridgePairs.exist(_key), string.concat(_key, " already exists"));

        // BridgePair
        BridgePair storage bridgePair = bridgePairs.get(_key);
        bridgePair.key = _key; 
        bridgePair.name = _name;

        // parentBridge
        bridgePair.parentBridgeName = _parentBridgeName;
        bridgePair.parentBridgeAddress = _parentBridgeAddress;

        // childBridge
        bridgePair.childBridgeName = _childBridgeName;
        bridgePair.childBridgeAddress = _childBridgeAddress;

        // tokenPairs
        TokenPair[] memory tPairs = getTokenPairs(_parentBridgeAddress);
        for (uint256 i = 0; i < tPairs.length; i++) {
            bridgePair.tokenPairs.push(tPairs[i]);
        }

        // insert bridgePair to the BridgeMap
        bridgePairs.set(_key, bridgePair);
    }

    function getTokenPairs(address _bridgeAddress )
        internal view 
        returns (TokenPair[] memory)
    {
        IBridgeTokens iBridgeTokens = IBridgeTokens(_bridgeAddress);
        address[] memory parentTokenContracts = iBridgeTokens.getRegisteredTokenList();
        address[] memory childTokenContracts = iBridgeTokens.getRegisteredChildTokenList();
        uint256 length = parentTokenContracts.length; 

        TokenPair[] memory tokenPairs = new TokenPair[](length);

        for (uint256 i = 0; i < length; i++) {
            address parentTokenAddress = parentTokenContracts[i];
            address childTokenAddress = childTokenContracts[i];

            if (isContract(parentTokenAddress)){ 
                IERC20Token erc20tokenContract = IERC20Token(parentTokenAddress);
                if ( erc20tokenContract.supportsInterface(type(IERC20Token).interfaceId) ) {
                    // parent token 
                    tokenPairs[i].parentToken.tokenAddress = parentTokenAddress ;
                    tokenPairs[i].parentToken.tokenType = TokenType.ERC20 ;
                    tokenPairs[i].parentToken.name = erc20tokenContract.NAME() ;
                    tokenPairs[i].parentToken.symbol = erc20tokenContract.SYMBOL() ;
                    tokenPairs[i].parentToken.decimals = erc20tokenContract.DECIMALS() ;    

                    // child token 
                    tokenPairs[i].childToken.tokenAddress = childTokenAddress ;
                    tokenPairs[i].childToken.tokenType = TokenType.ERC20 ;
                    // child token's information is not saved in parent network
                    // So we assume that childToken has the same infomation
                    // by adding name with the post fix "L2" and symbol with the post fix "L"
                    tokenPairs[i].childToken.name = string.concat( erc20tokenContract.NAME(), " L2");
                    tokenPairs[i].childToken.symbol = string.concat( erc20tokenContract.SYMBOL(), "L");
                    tokenPairs[i].childToken.decimals = erc20tokenContract.DECIMALS() ;    
                } 

                IERC721Token erc721tokenContract = IERC721Token(parentTokenAddress);
                if ( erc721tokenContract.supportsInterface(type(IERC721Token).interfaceId) ) {
                    // parent token
                    tokenPairs[i].parentToken.tokenAddress = parentTokenAddress ;
                    tokenPairs[i].parentToken.tokenType = TokenType.ERC721 ;
                    tokenPairs[i].parentToken.name = erc721tokenContract.NAME() ;
                    tokenPairs[i].parentToken.symbol = "na" ;
                    tokenPairs[i].parentToken.decimals = 0 ;    

                    // child token 
                    tokenPairs[i].childToken.tokenAddress = childTokenAddress ;
                    tokenPairs[i].childToken.tokenType = TokenType.ERC721 ;
                    // child token's information is not saved in parent network
                    // So we assume that childToken has the same infomation
                    // by adding name with the post fix "L2" 
                    tokenPairs[i].childToken.name = string.concat( erc721tokenContract.NAME(), " L2");
                    tokenPairs[i].childToken.symbol = "na" ;
                    tokenPairs[i].childToken.decimals = 0 ;    
                }
            }
        } 

        return tokenPairs;     
    }

    function isContract(address addr) internal view returns (bool) {
        uint size;
        assembly { size := extcodesize(addr) }
        return size > 0;
    }

    function deleteBridgePair(string memory key) public 
    {
        bridgePairs.remove(key);
    }

    function getBridgePair(string memory key)
        public view
        returns (BridgePair memory)
    {
        BridgePair memory bPair = bridgePairs.get( key );
        return bPair;
    }

    function getAllBridgePairs() 
        public view 
        returns (BridgePair[] memory brigePairs)
    {
        return bridgePairs.getValues();
    }

    function getTotalTokensNum()
        public view
        returns (uint256) 
    {
        uint256 totalTokenNum = 0;

        BridgePair[] memory allBridgePairs = getAllBridgePairs();

        uint256 pairSize = allBridgePairs.length;
        for (uint256 i = 0; i < pairSize; i++) {
            totalTokenNum += allBridgePairs[i].tokenPairs.length * 2; 
        }

        return totalTokenNum;
    }

    function getAllTokenPairs() 
        external view 
        returns (TokenPair[] memory)
    {
        uint256 tokenIndex = 0;
        uint256 tokenSize = getTotalTokensNum(); 
        TokenPair[] memory tokenPairs = new TokenPair[](tokenSize/2); 

        BridgePair[] memory allBridgePairs = getAllBridgePairs();
        
        uint256 bridgePairSize = allBridgePairs.length;
        for (uint256 i = 0; i < bridgePairSize; i++) {

            uint256 tokenPairSize = allBridgePairs[i].tokenPairs.length;
            for (uint256 j = 0; j < tokenPairSize; j++) {
                tokenPairs[tokenIndex].parentToken = Token({
                    tokenAddress :  allBridgePairs[i].tokenPairs[j].parentToken.tokenAddress, 
                    tokenType : allBridgePairs[i].tokenPairs[j].parentToken.tokenType,
                    name : allBridgePairs[i].tokenPairs[j].parentToken.name, 
                    symbol : allBridgePairs[i].tokenPairs[j].parentToken.symbol,
                    decimals : allBridgePairs[i].tokenPairs[j].parentToken.decimals
                }); 

                tokenPairs[tokenIndex].childToken = Token({
                    tokenAddress :  allBridgePairs[i].tokenPairs[j].childToken.tokenAddress, 
                    tokenType : allBridgePairs[i].tokenPairs[j].childToken.tokenType,
                    name : allBridgePairs[i].tokenPairs[j].childToken.name, 
                    symbol : allBridgePairs[i].tokenPairs[j].childToken.symbol,
                    decimals : allBridgePairs[i].tokenPairs[j].childToken.decimals
                }); 

                tokenIndex++; 
            }
        }

        return tokenPairs;
    }

    function updateParentTokenList(string memory key) 
        external 
    {
        // BridgePair
        BridgePair storage bPair = bridgePairs.get(key); 

        // parentBridge tokens update
        delete bPair.tokenPairs; 

        // tokenPairs
        TokenPair[] memory tokenPairs = getTokenPairs( bPair.parentBridgeAddress );
        for (uint256 i = 0; i < tokenPairs.length; i++) {
            bPair.tokenPairs.push(tokenPairs[i]);
        }

        bridgePairs.set( key, bPair);
    }
}
