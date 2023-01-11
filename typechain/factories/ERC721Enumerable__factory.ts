/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721Enumerable,
  ERC721EnumerableInterface,
} from "../ERC721Enumerable";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
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
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100276301ffc9a760e01b61005860201b60201c565b61003d6380ac58cd60e01b61005860201b60201c565b61005363780e9d6360e01b61005860201b60201c565b610126565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156100e957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b611149806101356000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806342842e0e1161008c57806370a082311161006657806370a082311461028a578063a22cb465146102b0578063b88d4fde146102de578063e985e9c5146103a4576100df565b806342842e0e1461021a5780634f6ccce7146102505780636352211e1461026d576100df565b806318160ddd116100bd57806318160ddd1461019e57806323b872dd146101b85780632f745c59146101ee576100df565b806301ffc9a7146100e4578063081812fc14610137578063095ea7b314610170575b600080fd5b610123600480360360208110156100fa57600080fd5b50357fffffffff00000000000000000000000000000000000000000000000000000000166103d2565b604080519115158252519081900360200190f35b6101546004803603602081101561014d57600080fd5b5035610409565b604080516001600160a01b039092168252519081900360200190f35b61019c6004803603604081101561018657600080fd5b506001600160a01b03813516906020013561046e565b005b6101a6610592565b60408051918252519081900360200190f35b61019c600480360360608110156101ce57600080fd5b506001600160a01b03813581169160208101359091169060400135610599565b6101a66004803603604081101561020457600080fd5b506001600160a01b0381351690602001356105f1565b61019c6004803603606081101561023057600080fd5b506001600160a01b03813581169160208101359091169060400135610673565b6101a66004803603602081101561026657600080fd5b503561068e565b6101546004803603602081101561028357600080fd5b50356106f7565b6101a6600480360360208110156102a057600080fd5b50356001600160a01b0316610754565b61019c600480360360408110156102c657600080fd5b506001600160a01b03813516906020013515156107bf565b61019c600480360360808110156102f457600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561032f57600080fd5b82018360208201111561034157600080fd5b8035906020019184600183028401116401000000008311171561036357600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061088e945050505050565b610123600480360360408110156103ba57600080fd5b506001600160a01b03813581169160200135166108e9565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081526020819052604090205460ff1690565b600061041482610917565b61045257604051600160e51b62461bcd02815260040180806020018281038252602c81526020018061104b602c913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b6000610479826106f7565b9050806001600160a01b0316836001600160a01b031614156104cf57604051600160e51b62461bcd0281526004018080602001828103825260218152602001806110a06021913960400191505060405180910390fd5b336001600160a01b03821614806104eb57506104eb81336108e9565b61052957604051600160e51b62461bcd028152600401808060200182810382526038815260200180610fc06038913960400191505060405180910390fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6007545b90565b6105a33382610934565b6105e157604051600160e51b62461bcd0281526004018080602001828103825260318152602001806110c16031913960400191505060405180910390fd5b6105ec8383836109db565b505050565b60006105fc83610754565b821061063c57604051600160e51b62461bcd02815260040180806020018281038252602b815260200180610f13602b913960400191505060405180910390fd5b6001600160a01b038316600090815260056020526040902080548390811061066057fe5b9060005260206000200154905092915050565b6105ec8383836040518060200160405280600081525061088e565b6000610698610592565b82106106d857604051600160e51b62461bcd02815260040180806020018281038252602c8152602001806110f2602c913960400191505060405180910390fd5b600782815481106106e557fe5b90600052602060002001549050919050565b6000818152600160205260408120546001600160a01b03168061074e57604051600160e51b62461bcd0281526004018080602001828103825260298152602001806110226029913960400191505060405180910390fd5b92915050565b60006001600160a01b03821661079e57604051600160e51b62461bcd02815260040180806020018281038252602a815260200180610ff8602a913960400191505060405180910390fd5b6001600160a01b038216600090815260036020526040902061074e906109fa565b6001600160a01b0382163314156108205760408051600160e51b62461bcd02815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b610899848484610599565b6108a5848484846109fe565b6108e357604051600160e51b62461bcd028152600401808060200182810382526032815260200180610f3e6032913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000908152600160205260409020546001600160a01b0316151590565b600061093f82610917565b61097d57604051600160e51b62461bcd02815260040180806020018281038252602c815260200180610f94602c913960400191505060405180910390fd5b6000610988836106f7565b9050806001600160a01b0316846001600160a01b031614806109c35750836001600160a01b03166109b884610409565b6001600160a01b0316145b806109d357506109d381856108e9565b949350505050565b6109e6838383610b7b565b6109f08382610cd2565b6105ec8282610dc7565b5490565b6000610a12846001600160a01b0316610e05565b610a1e575060016109d3565b6040517f150b7a0200000000000000000000000000000000000000000000000000000000815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a169463150b7a029490938c938b938b939260a4019060208501908083838e5b83811015610ab1578181015183820152602001610a99565b50505050905090810190601f168015610ade5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610b0057600080fd5b505af1158015610b14573d6000803e3d6000fd5b505050506040513d6020811015610b2a57600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a020000000000000000000000000000000000000000000000000000000014915050949350505050565b826001600160a01b0316610b8e826106f7565b6001600160a01b031614610bd657604051600160e51b62461bcd0281526004018080602001828103825260298152602001806110776029913960400191505060405180910390fd5b6001600160a01b038216610c1e57604051600160e51b62461bcd028152600401808060200182810382526024815260200180610f706024913960400191505060405180910390fd5b610c2781610e0b565b6001600160a01b0383166000908152600360205260409020610c4890610e55565b6001600160a01b0382166000908152600360205260409020610c6990610e6c565b600081815260016020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216600090815260056020526040812054610cfc90600163ffffffff610e7516565b600083815260066020526040902054909150808214610d97576001600160a01b0384166000908152600560205260408120805484908110610d3957fe5b906000526020600020015490508060056000876001600160a01b03166001600160a01b031681526020019081526020016000208381548110610d7757fe5b600091825260208083209091019290925591825260069052604090208190555b6001600160a01b0384166000908152600560205260409020805490610dc0906000198301610ed5565b5050505050565b6001600160a01b0390911660009081526005602081815260408084208054868652600684529185208290559282526001810183559183529091200155565b3b151590565b6000818152600260205260409020546001600160a01b031615610e52576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b50565b8054610e6890600163ffffffff610e7516565b9055565b80546001019055565b600082821115610ecf5760408051600160e51b62461bcd02815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b8154818355818111156105ec576000838152602090206105ec91810190830161059691905b80821115610f0e5760008155600101610efa565b509056fe455243373231456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243373231456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e6473a165627a7a723058209f1d4a5a45be3b091610044e5290cc0d331e0c37136b064a3f5b71dc11b75ce10029";

export class ERC721Enumerable__factory extends ContractFactory {
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
  ): Promise<ERC721Enumerable> {
    return super.deploy(overrides || {}) as Promise<ERC721Enumerable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Enumerable {
    return super.attach(address) as ERC721Enumerable;
  }
  connect(signer: Signer): ERC721Enumerable__factory {
    return super.connect(signer) as ERC721Enumerable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721EnumerableInterface {
    return new utils.Interface(_abi) as ERC721EnumerableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Enumerable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Enumerable;
  }
}