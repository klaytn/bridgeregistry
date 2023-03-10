/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StringUtil, StringUtilInterface } from "../StringUtil";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "one",
        type: "string",
      },
      {
        internalType: "string",
        name: "another",
        type: "string",
      },
    ],
    name: "stringCompare",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6101ee61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c806360353db91461003a575b600080fd5b61004d610048366004610154565b610061565b604051901515815260200160405180910390f35b80518251600091849184911461007c57600092505050610092565b8080519060200120828051906020012014925050505b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126100d857600080fd5b813567ffffffffffffffff808211156100f3576100f3610098565b604051601f8301601f19908116603f0116810190828211818310171561011b5761011b610098565b8160405283815286602085880101111561013457600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561016757600080fd5b823567ffffffffffffffff8082111561017f57600080fd5b61018b868387016100c7565b935060208501359150808211156101a157600080fd5b506101ae858286016100c7565b915050925092905056fea2646970667358221220eadf77fdfc8af16b1fd94492f46e2b1e722b3b54dadf1cf09dc8d5856b44ff6364736f6c63430008110033";

export class StringUtil__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StringUtil> {
    return super.deploy(overrides || {}) as Promise<StringUtil>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StringUtil {
    return super.attach(address) as StringUtil;
  }
  connect(signer: Signer): StringUtil__factory {
    return super.connect(signer) as StringUtil__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StringUtilInterface {
    return new utils.Interface(_abi) as StringUtilInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StringUtil {
    return new Contract(address, _abi, signerOrProvider) as StringUtil;
  }
}
