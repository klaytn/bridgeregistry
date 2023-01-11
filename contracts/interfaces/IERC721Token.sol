// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IERC721Token {
    function NAME() external view returns (string memory);

    function TokenURI(uint256 tokenId) external view returns (string memory);

    // must have to be implemented
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}
