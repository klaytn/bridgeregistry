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

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";

import "@openzeppelin/contracts/utils/Address.sol";
import "./ERC20ServiceChain.sol";




contract ServiceChainToken is ERC20, ERC20Mintable, ERC20Burnable, ERC20ServiceChain {

    string public constant NAME = "ServiceChainToken";
    string public constant SYMBOL = "SCT";
    uint8 public constant DECIMALS = 18;
    string public constant TokenTYPE = "TokenType.ERC20";

    // one billion in initial supply
    uint256 public constant INITIAL_SUPPLY = 1000000000 * (10 ** uint256(DECIMALS));

    function supportsInterface(bytes4 interfaceId) public view returns (bool) {
        return interfaceId == 0x7b6bbd84;
        // type(IERC20Token).interfaceId == 0x7b6bbd84
        // not supported under solidity 0.8.0
        // https://velog.io/@4e5ung/ERC721-ERC1155-%EA%B5%AC%EB%B6%84
        
        // interface IERC20Token {
        //     function NAME() external view returns (string memory);
        //     function SYMBOL() external view returns (string memory);
        //     function DECIMALS() external view returns (uint8);
        //     function supportsInterface(bytes4 interfaceId) external view returns (bool);
        // }
    }

    constructor(address _bridge) ERC20ServiceChain(_bridge) public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
