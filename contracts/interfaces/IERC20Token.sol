// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IERC20Token {
    function NAME() external view returns (string memory);

    function SYMBOL() external view returns (string memory);

    function DECIMALS() external view returns (uint8);

    // must have to be implemented
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}
