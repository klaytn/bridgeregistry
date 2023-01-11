// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

library StringUtil {
    function stringCompare(string memory one, string memory another)
        public
        pure
        returns (bool)
    {
        bytes memory first = bytes(one);
        bytes memory second = bytes(another);

        if (first.length != second.length) {
            return false;
        } else {
            return keccak256(first) == keccak256(second);
        }
    }
}
