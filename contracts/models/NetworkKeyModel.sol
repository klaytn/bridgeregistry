// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

contract NetworkKeyModel {
	struct NetworkKey {
		string chainId;
		string shortName;
	}

	function getNetworkKey(string memory chainId, string memory shortName) public pure returns (string memory key) {
		return makeNetworkKey(NetworkKey(chainId, shortName));
	}

	function makeNetworkKey(NetworkKey memory key) internal pure returns (string memory){
		return string.concat(key.chainId, ":", key.shortName);
	}
}
