// Copyright 2019 The klaytn Authors
// This file is part of the klaytn library.
//
// The klaytn library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// The klaytn library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with the klaytn library. If not, see <http://www.gnu.org/licenses/>.

pragma solidity 0.5.6;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Metadata.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721MetadataMintable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Burnable.sol";

import "@openzeppelin/contracts/ownership/Ownable.sol";
import "./ERC721ServiceChain.sol";



contract ServiceChainNFT is ERC721Full("ServiceChainNFT", "SCN"), ERC721Burnable, ERC721MetadataMintable, ERC721ServiceChain {

    string public constant NAME = "ServiceChainToken NFT";
    string public constant SYMBOL = "SCTNFT";
    uint8 public constant DECIMALS = 0;
    string public constant TokenTYPE = "TokenType.ERC721";
    string public constant TokenURI = "ServiceChainToken.nft";

    function supportsInterface(bytes4 interfaceId) public view returns (bool) {
        return interfaceId == 0xc78080bc ;
        // type(IERC721Token).interfaceId == 0xc78080bc 
        // not supported under solidity 0.8.0
        // https://velog.io/@4e5ung/ERC721-ERC1155-%EA%B5%AC%EB%B6%84
        
        // interface IERC721Token {
        //     function NAME() external view returns (string memory);
        //     function TokenURI(uint256 tokenId) external view returns (string memory);
        //     function supportsInterface(bytes4 interfaceId) external view returns (bool);
        // }
    }

    constructor(address _bridge) ERC721ServiceChain(_bridge) public {
    }

    // registerBulk registers (startID, endID-1) tokens to the user once.
    // This is only for load test.
    function registerBulk(address _user, uint256 _startID, uint256 _endID) external onlyOwner {
        for (uint256 uid = _startID; uid < _endID; uid++) {
            mintWithTokenURI(_user, uid, "testURI");
        }
    }
}
