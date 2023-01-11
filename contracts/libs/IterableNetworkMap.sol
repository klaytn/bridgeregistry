// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "../models/NetworkModel.sol";
import "./StringUtil.sol";

library IterableNetworkMap {
    struct Map {
        string[] keys;
        mapping(string => Network) values;
        mapping(string => uint256) indexOf;
        mapping(string => bool) inserted;
    }

    function get(Map storage map, string memory key)
        public
        view
        returns (Network memory)
    {
        return map.values[key];
    }

    function exist(Map storage map, string memory key)
        public
        view
        returns (bool)
    {
        Network memory network = get(map, key);
        return StringUtil.stringCompare(key, network.key);
    }

    function getKeyAtIndex(Map storage map, uint256 index)
        public
        view
        returns (string memory)
    {
        return map.keys[index];
    }

    function size(Map storage map) public view returns (uint256) {
        return map.keys.length;
    }

    function set(
        Map storage map,
        string memory key,
        Network memory val
    ) public {
        if (map.inserted[key]) {
            map.values[key] = val;
        } else {
            map.inserted[key] = true;
            map.values[key] = val;
            map.indexOf[key] = map.keys.length;
            map.keys.push(key);
        }
    }

    function remove(Map storage map, string memory key) public {
        if (!map.inserted[key]) {
            return;
        }

        delete map.inserted[key];
        delete map.values[key];

        uint256 index = map.indexOf[key];
        string memory lastKey = removeKey(map, index);
        map.indexOf[lastKey] = index;
        delete map.indexOf[key];
    }

    function removeKey(Map storage map, uint256 keyIndex)
        private
        returns (string memory lastKey)
    {
        uint256 lastIndex = map.keys.length - 1;
        lastKey = map.keys[lastIndex];

        map.keys[keyIndex] = lastKey;
        map.keys.pop();
        return lastKey;
    }

    function getValues(Map storage map)
        public
        view
        returns (Network[] memory)
    {
        uint256 totalSize = map.keys.length;
        Network[] memory allNetworks = new Network[](totalSize);
        for (uint256 index = 0; index < totalSize; index++) {
            allNetworks[index] = map.values[map.keys[index]];
        }
        return allNetworks;
    }
}
