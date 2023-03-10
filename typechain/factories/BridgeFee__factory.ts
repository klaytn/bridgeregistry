/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { BridgeFee, BridgeFeeInterface } from "../BridgeFee";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "feeOfERC20",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "feeReceiver",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "feeOfKLAY",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_feeReceiver",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "fee",
        type: "uint256",
      },
    ],
    name: "KLAYFeeChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        name: "fee",
        type: "uint256",
      },
    ],
    name: "ERC20FeeChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "feeReceiver",
        type: "address",
      },
    ],
    name: "FeeReceiverChanged",
    type: "event",
  },
];

export class BridgeFee__factory {
  static readonly abi = _abi;
  static createInterface(): BridgeFeeInterface {
    return new utils.Interface(_abi) as BridgeFeeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeFee {
    return new Contract(address, _abi, signerOrProvider) as BridgeFee;
  }
}
