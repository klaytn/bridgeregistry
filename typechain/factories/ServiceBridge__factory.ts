/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ServiceBridge, ServiceBridgeInterface } from "../ServiceBridge";

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_parentBridgeName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_parentBridgeAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_childBridgeName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_childBridgeAddress",
        type: "address",
      },
    ],
    name: "addBridgePair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "deleteBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllBridgePairs",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "key",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "parentBridgeName",
            type: "string",
          },
          {
            internalType: "address",
            name: "parentBridgeAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "childBridgeName",
            type: "string",
          },
          {
            internalType: "address",
            name: "childBridgeAddress",
            type: "address",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "enum TokenType",
                    name: "tokenType",
                    type: "uint8",
                  },
                  {
                    internalType: "string",
                    name: "name",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "symbol",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "decimals",
                    type: "uint256",
                  },
                ],
                internalType: "struct Token",
                name: "parentToken",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "enum TokenType",
                    name: "tokenType",
                    type: "uint8",
                  },
                  {
                    internalType: "string",
                    name: "name",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "symbol",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "decimals",
                    type: "uint256",
                  },
                ],
                internalType: "struct Token",
                name: "childToken",
                type: "tuple",
              },
            ],
            internalType: "struct TokenPair[]",
            name: "tokenPairs",
            type: "tuple[]",
          },
        ],
        internalType: "struct BridgePair[]",
        name: "brigePairs",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTokenPairs",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "enum TokenType",
                name: "tokenType",
                type: "uint8",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
            ],
            internalType: "struct Token",
            name: "parentToken",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "enum TokenType",
                name: "tokenType",
                type: "uint8",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
              },
            ],
            internalType: "struct Token",
            name: "childToken",
            type: "tuple",
          },
        ],
        internalType: "struct TokenPair[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "getBridge",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "key",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "parentBridgeName",
            type: "string",
          },
          {
            internalType: "address",
            name: "parentBridgeAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "childBridgeName",
            type: "string",
          },
          {
            internalType: "address",
            name: "childBridgeAddress",
            type: "address",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "enum TokenType",
                    name: "tokenType",
                    type: "uint8",
                  },
                  {
                    internalType: "string",
                    name: "name",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "symbol",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "decimals",
                    type: "uint256",
                  },
                ],
                internalType: "struct Token",
                name: "parentToken",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "enum TokenType",
                    name: "tokenType",
                    type: "uint8",
                  },
                  {
                    internalType: "string",
                    name: "name",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "symbol",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "decimals",
                    type: "uint256",
                  },
                ],
                internalType: "struct Token",
                name: "childToken",
                type: "tuple",
              },
            ],
            internalType: "struct TokenPair[]",
            name: "tokenPairs",
            type: "tuple[]",
          },
        ],
        internalType: "struct BridgePair",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalTokensNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "updateParentTokenList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612daf806100206000396000f3fe60806040526004361061006e5760003560e01c80639e1ad67f1161004b5780639e1ad67f146100e5578063b1beb35914610107578063b7c188af14610127578063f3c475fb1461014757005b80630a5a0ffa146100775780633dafe12c146100a25780636edf1317146100c257005b3661007557005b005b34801561008357600080fd5b5061008c610174565b60405161009991906121aa565b60405180910390f35b3480156100ae57600080fd5b506100756100bd3660046122f8565b61059d565b3480156100ce57600080fd5b506100d7610623565b604051908152602001610099565b3480156100f157600080fd5b506100fa610691565b60405161009991906123de565b34801561011357600080fd5b50610075610122366004612455565b61072a565b34801561013357600080fd5b506100756101423660046122f8565b610b3a565b34801561015357600080fd5b506101676101623660046122f8565b610dd1565b6040516100999190612507565b6060600080610181610623565b90506000610190600283612530565b67ffffffffffffffff8111156101a8576101a86121c4565b6040519080825280602002602001820160405280156101e157816020015b6101ce611ee2565b8152602001906001900390816101c65790505b50905060006101ee610691565b805190915060005b8181101561059257600083828151811061021257610212612552565b602002602001015160c0015151905060005b8181101561057d576040518060a0016040528086858151811061024957610249612552565b602002602001015160c00151838151811061026657610266612552565b602002602001015160000151600001516001600160a01b0316815260200186858151811061029657610296612552565b602002602001015160c0015183815181106102b3576102b3612552565b6020026020010151600001516020015160068111156102d4576102d4612044565b81526020018685815181106102eb576102eb612552565b602002602001015160c00151838151811061030857610308612552565b60200260200101516000015160400151815260200186858151811061032f5761032f612552565b602002602001015160c00151838151811061034c5761034c612552565b60200260200101516000015160600151815260200186858151811061037357610373612552565b602002602001015160c00151838151811061039057610390612552565b602002602001015160000151608001518152508689815181106103b5576103b5612552565b6020026020010151600001819052506040518060a001604052808685815181106103e1576103e1612552565b602002602001015160c0015183815181106103fe576103fe612552565b602002602001015160200151600001516001600160a01b0316815260200186858151811061042e5761042e612552565b602002602001015160c00151838151811061044b5761044b612552565b60200260200101516020015160200151600681111561046c5761046c612044565b815260200186858151811061048357610483612552565b602002602001015160c0015183815181106104a0576104a0612552565b6020026020010151602001516040015181526020018685815181106104c7576104c7612552565b602002602001015160c0015183815181106104e4576104e4612552565b60200260200101516020015160600151815260200186858151811061050b5761050b612552565b602002602001015160c00151838151811061052857610528612552565b6020026020010151602001516080015181525086898151811061054d5761054d612552565b602002602001015160200181905250878061056790612568565b985050808061057590612568565b915050610224565b5050808061058a90612568565b9150506101f6565b509195945050505050565b6040517fdb16860e00000000000000000000000000000000000000000000000000000000815273__$162b54970ae4871b82ec7acaef59686faf$__9063db16860e906105f0906000908590600401612581565b60006040518083038186803b15801561060857600080fd5b505af415801561061c573d6000803e3d6000fd5b5050505050565b6000808061062f610691565b805190915060005b818110156106885782818151811061065157610651612552565b602002602001015160c0015151600261066a919061259a565b61067490856125b7565b93508061068081612568565b915050610637565b50919392505050565b6040517f6ac15b260000000000000000000000000000000000000000000000000000000081526000600482015260609073__$162b54970ae4871b82ec7acaef59686faf$__90636ac15b2690602401600060405180830381865af41580156106fd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261072591908101906127c5565b905090565b60608585846040516020016107419392919061296d565b60408051601f19818403018152908290527fbaef6e14000000000000000000000000000000000000000000000000000000008252915073__$162b54970ae4871b82ec7acaef59686faf$__9063baef6e14906107a4906000908590600401612581565b602060405180830381865af41580156107c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e59190612a04565b15816040516020016107f79190612a26565b60405160208183030381529060405290610847576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083e9190612a67565b60405180910390fd5b50604051639f14344960e01b815260009073__$162b54970ae4871b82ec7acaef59686faf$__90639f143449906108849084908690600401612581565b602060405180830381865af41580156108a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c59190612a7a565b9050806108d28382612b1c565b50600181016108e18882612b1c565b50600281016108f08782612b1c565b506003810180546001600160a01b0319166001600160a01b0387161790556004810161091c8582612b1c565b506005810180546001600160a01b0319166001600160a01b03851617905560006109458661148b565b905060005b8151811015610ac3578260060182828151811061096957610969612552565b602090810291909101810151825460018101845560009384529282902081518051600890950290910180546001600160a01b031981166001600160a01b039096169586178255938201519294909391928492909183916001600160a81b03191617600160a01b8360068111156109e1576109e1612044565b0217905550604082015160018201906109fa9082612b1c565b5060608201516002820190610a0f9082612b1c565b506080919091015160039091015560208281015180516004840180546001600160a01b031981166001600160a01b03909316928317825593830151929390929183916001600160a81b03191617600160a01b836006811115610a7357610a73612044565b021790555060408201516001820190610a8c9082612b1c565b5060608201516002820190610aa19082612b1c565b5060808201518160030155505050508080610abb90612568565b91505061094a565b506040516327b7a63560e21b815273__$162b54970ae4871b82ec7acaef59686faf$__90639ede98d490610b009060009087908790600401612bdc565b60006040518083038186803b158015610b1857600080fd5b505af4158015610b2c573d6000803e3d6000fd5b505050505050505050505050565b604051639f14344960e01b815260009073__$162b54970ae4871b82ec7acaef59686faf$__90639f14344990610b769084908690600401612581565b602060405180830381865af4158015610b93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb79190612a7a565b9050610bc7600682016000611f50565b6003810154600090610be1906001600160a01b031661148b565b905060005b8151811015610d5f5782600601828281518110610c0557610c05612552565b602090810291909101810151825460018101845560009384529282902081518051600890950290910180546001600160a01b031981166001600160a01b039096169586178255938201519294909391928492909183916001600160a81b03191617600160a01b836006811115610c7d57610c7d612044565b021790555060408201516001820190610c969082612b1c565b5060608201516002820190610cab9082612b1c565b506080919091015160039091015560208281015180516004840180546001600160a01b031981166001600160a01b03909316928317825593830151929390929183916001600160a81b03191617600160a01b836006811115610d0f57610d0f612044565b021790555060408201516001820190610d289082612b1c565b5060608201516002820190610d3d9082612b1c565b5060808201518160030155505050508080610d5790612568565b915050610be6565b506040516327b7a63560e21b815273__$162b54970ae4871b82ec7acaef59686faf$__90639ede98d490610d9c9060009087908790600401612bdc565b60006040518083038186803b158015610db457600080fd5b505af4158015610dc8573d6000803e3d6000fd5b50505050505050565b610e236040518060e0016040528060608152602001606081526020016060815260200160006001600160a01b031681526020016060815260200160006001600160a01b03168152602001606081525090565b604051639f14344960e01b815260009073__$162b54970ae4871b82ec7acaef59686faf$__90639f14344990610e5f9084908790600401612581565b602060405180830381865af4158015610e7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea09190612a7a565b6040518060e0016040529081600082018054610ebb90612a93565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee790612a93565b8015610f345780601f10610f0957610100808354040283529160200191610f34565b820191906000526020600020905b815481529060010190602001808311610f1757829003601f168201915b50505050508152602001600182018054610f4d90612a93565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7990612a93565b8015610fc65780601f10610f9b57610100808354040283529160200191610fc6565b820191906000526020600020905b815481529060010190602001808311610fa957829003601f168201915b50505050508152602001600282018054610fdf90612a93565b80601f016020809104026020016040519081016040528092919081815260200182805461100b90612a93565b80156110585780601f1061102d57610100808354040283529160200191611058565b820191906000526020600020905b81548152906001019060200180831161103b57829003601f168201915b505050918352505060038201546001600160a01b0316602082015260048201805460409092019161108890612a93565b80601f01602080910402602001604051908101604052809291908181526020018280546110b490612a93565b80156111015780601f106110d657610100808354040283529160200191611101565b820191906000526020600020905b8154815290600101906020018083116110e457829003601f168201915b505050918352505060058201546001600160a01b0316602080830191909152600683018054604080518285028101850182528281529401939260009084015b8282101561147c576000848152602090206040805160e0810182526008850290920180546001600160a01b0381169284019283529091839183906060840190600160a01b900460ff16600681111561119a5761119a612044565b60068111156111ab576111ab612044565b81526020016001820180546111bf90612a93565b80601f01602080910402602001604051908101604052809291908181526020018280546111eb90612a93565b80156112385780601f1061120d57610100808354040283529160200191611238565b820191906000526020600020905b81548152906001019060200180831161121b57829003601f168201915b5050505050815260200160028201805461125190612a93565b80601f016020809104026020016040519081016040528092919081815260200182805461127d90612a93565b80156112ca5780601f1061129f576101008083540402835291602001916112ca565b820191906000526020600020905b8154815290600101906020018083116112ad57829003601f168201915b5050509183525050600391909101546020918201529082526040805160a081019091526004840180546001600160a01b0381168352938301939192909190830190600160a01b900460ff16600681111561132657611326612044565b600681111561133757611337612044565b815260200160018201805461134b90612a93565b80601f016020809104026020016040519081016040528092919081815260200182805461137790612a93565b80156113c45780601f10611399576101008083540402835291602001916113c4565b820191906000526020600020905b8154815290600101906020018083116113a757829003601f168201915b505050505081526020016002820180546113dd90612a93565b80601f016020809104026020016040519081016040528092919081815260200182805461140990612a93565b80156114565780601f1061142b57610100808354040283529160200191611456565b820191906000526020600020905b81548152906001019060200180831161143957829003601f168201915b505050505081526020016003820154815250508152505081526020019060010190611140565b50505091525090949350505050565b606060008290506000816001600160a01b031663ea21eade6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156114d2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114fa9190810190612c05565b90506000826001600160a01b031663dcb6afeb6040518163ffffffff1660e01b8152600401600060405180830381865afa15801561153c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526115649190810190612c05565b825190915060008167ffffffffffffffff811115611584576115846121c4565b6040519080825280602002602001820160405280156115bd57816020015b6115aa611ee2565b8152602001906001900390816115a25790505b50905060005b82811015611ed75760008582815181106115df576115df612552565b6020026020010151905060008583815181106115fd576115fd612552565b60200260200101519050611611823b151590565b15611ec2576040516301ffc9a760e01b81527f7b6bbd8400000000000000000000000000000000000000000000000000000000600482015282906001600160a01b038216906301ffc9a790602401602060405180830381865afa15801561167c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a09190612a04565b15611b2857828585815181106116b8576116b8612552565b6020908102919091010151516001600160a01b03909116905284516000908690869081106116e8576116e8612552565b60200260200101516000015160200190600681111561170957611709612044565b9081600681111561171c5761171c612044565b81525050806001600160a01b031663a3f4df7e6040518163ffffffff1660e01b8152600401600060405180830381865afa15801561175e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526117869190810190612c9f565b85858151811061179857611798612552565b60200260200101516000015160400181905250806001600160a01b031663f76f8d786040518163ffffffff1660e01b8152600401600060405180830381865afa1580156117e9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526118119190810190612c9f565b85858151811061182357611823612552565b60200260200101516000015160600181905250806001600160a01b0316632e0f26256040518163ffffffff1660e01b8152600401602060405180830381865afa158015611874573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118989190612cd4565b60ff168585815181106118ad576118ad612552565b6020026020010151600001516080018181525050818585815181106118d4576118d4612552565b602002602001015160200151600001906001600160a01b031690816001600160a01b031681525050600085858151811061191057611910612552565b60200260200101516020015160200190600681111561193157611931612044565b9081600681111561194457611944612044565b81525050806001600160a01b031663a3f4df7e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611986573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526119ae9190810190612c9f565b6040516020016119be9190612cf7565b6040516020818303038152906040528585815181106119df576119df612552565b60200260200101516020015160400181905250806001600160a01b031663f76f8d786040518163ffffffff1660e01b8152600401600060405180830381865afa158015611a30573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611a589190810190612c9f565b604051602001611a689190612d38565b604051602081830303815290604052858581518110611a8957611a89612552565b60200260200101516020015160600181905250806001600160a01b0316632e0f26256040518163ffffffff1660e01b8152600401602060405180830381865afa158015611ada573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611afe9190612cd4565b60ff16858581518110611b1357611b13612552565b60200260200101516020015160800181815250505b6040516301ffc9a760e01b81527fc78080bc00000000000000000000000000000000000000000000000000000000600482015283906001600160a01b038216906301ffc9a790602401602060405180830381865afa158015611b8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bb29190612a04565b15611ebf5783868681518110611bca57611bca612552565b6020908102919091010151516001600160a01b0390911690528551600190879087908110611bfa57611bfa612552565b602002602001015160000151602001906006811115611c1b57611c1b612044565b90816006811115611c2e57611c2e612044565b81525050806001600160a01b031663a3f4df7e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611c70573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611c989190810190612c9f565b868681518110611caa57611caa612552565b60200260200101516000015160400181905250604051806040016040528060028152602001616e6160f01b815250868681518110611cea57611cea612552565b602002602001015160000151606001819052506000868681518110611d1157611d11612552565b602002602001015160000151608001818152505082868681518110611d3857611d38612552565b602002602001015160200151600001906001600160a01b031690816001600160a01b0316815250506001868681518110611d7457611d74612552565b602002602001015160200151602001906006811115611d9557611d95612044565b90816006811115611da857611da8612044565b81525050806001600160a01b031663a3f4df7e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611dea573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611e129190810190612c9f565b604051602001611e229190612cf7565b604051602081830303815290604052868681518110611e4357611e43612552565b60200260200101516020015160400181905250604051806040016040528060028152602001616e6160f01b815250868681518110611e8357611e83612552565b602002602001015160200151606001819052506000868681518110611eaa57611eaa612552565b60200260200101516020015160800181815250505b50505b50508080611ecf90612568565b9150506115c3565b509695505050505050565b6040805160e081018252600091810182815260608083018490526080830181905260a083015260c08201929092529081908152602001611f4b6040805160a081019091526000808252602082019081526020016060815260200160608152602001600081525090565b905290565b5080546000825560080290600052602060002090810190611f719190611f74565b50565b80821115611ff65780546001600160a81b031916815560008181611f9b6001830182611ffa565b611fa9600283016000611ffa565b5060006003919091018190556004830180546001600160a81b031916815590611fd56005850182611ffa565b611fe3600283016000611ffa565b6003820160009055505050600801611f74565b5090565b50805461200690612a93565b6000825580601f10612016575050565b601f016020900490600052602060002090810190611f7191905b80821115611ff65760008155600101612030565b634e487b7160e01b600052602160045260246000fd5b60005b8381101561207557818101518382015260200161205d565b50506000910152565b6000815180845261209681602086016020860161205a565b601f01601f19169290920160200192915050565b6001600160a01b03815116825260006020820151600781106120dc57634e487b7160e01b600052602160045260246000fd5b80602085015250604082015160a060408501526120fc60a085018261207e565b905060608301518482036060860152612115828261207e565b915050608083015160808501528091505092915050565b600082825180855260208086019550808260051b84010181860160005b8481101561219d57601f1986840301895281516040815181865261216f828701826120aa565b9150508582015191508481038686015261218981836120aa565b9a86019a9450505090830190600101612149565b5090979650505050505050565b6020815260006121bd602083018461212c565b9392505050565b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156121fd576121fd6121c4565b60405290565b6040805190810167ffffffffffffffff811182821017156121fd576121fd6121c4565b60405160e0810167ffffffffffffffff811182821017156121fd576121fd6121c4565b604051601f8201601f1916810167ffffffffffffffff81118282101715612272576122726121c4565b604052919050565b600067ffffffffffffffff821115612294576122946121c4565b50601f01601f191660200190565b600082601f8301126122b357600080fd5b81356122c66122c18261227a565b612249565b8181528460208386010111156122db57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561230a57600080fd5b813567ffffffffffffffff81111561232157600080fd5b61232d848285016122a2565b949350505050565b6000815160e0845261234a60e085018261207e565b905060208301518482036020860152612363828261207e565b9150506040830151848203604086015261237d828261207e565b91505060608301516001600160a01b0380821660608701526080850151915085830360808701526123ae838361207e565b92508060a08601511660a0870152505060c083015184820360c08601526123d5828261212c565b95945050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561243357603f19888603018452612421858351612335565b94509285019290850190600101612405565b5092979650505050505050565b6001600160a01b0381168114611f7157600080fd5b600080600080600060a0868803121561246d57600080fd5b853567ffffffffffffffff8082111561248557600080fd5b61249189838a016122a2565b965060208801359150808211156124a757600080fd5b6124b389838a016122a2565b9550604088013591506124c582612440565b909350606087013590808211156124db57600080fd5b506124e8888289016122a2565b92505060808601356124f981612440565b809150509295509295909350565b6020815260006121bd6020830184612335565b634e487b7160e01b600052601160045260246000fd5b60008261254d57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b60006001820161257a5761257a61251a565b5060010190565b82815260406020820152600061232d604083018461207e565b80820281158282048414176125b1576125b161251a565b92915050565b808201808211156125b1576125b161251a565b600067ffffffffffffffff8211156125e4576125e46121c4565b5060051b60200190565b600082601f8301126125ff57600080fd5b815161260d6122c18261227a565b81815284602083860101111561262257600080fd5b61232d82602083016020870161205a565b805161263e81612440565b919050565b600060a0828403121561265557600080fd5b61265d6121da565b9050815161266a81612440565b815260208201516007811061267e57600080fd5b6020820152604082015167ffffffffffffffff8082111561269e57600080fd5b6126aa858386016125ee565b604084015260608401519150808211156126c357600080fd5b506126d0848285016125ee565b6060830152506080820151608082015292915050565b600082601f8301126126f757600080fd5b815160206127076122c1836125ca565b82815260059290921b8401810191818101908684111561272657600080fd5b8286015b84811015611ed757805167ffffffffffffffff8082111561274b5760008081fd5b908801906040828b03601f19018113156127655760008081fd5b61276d612203565b878401518381111561277f5760008081fd5b61278d8d8a83880101612643565b8252509083015190828211156127a35760008081fd5b6127b18c8984870101612643565b81890152865250505091830191830161272a565b600060208083850312156127d857600080fd5b825167ffffffffffffffff808211156127f057600080fd5b818501915085601f83011261280457600080fd5b81516128126122c1826125ca565b81815260059190911b8301840190848101908883111561283157600080fd5b8585015b838110156129605780518581111561284c57600080fd5b860160e0818c03601f190112156128635760008081fd5b61286b612226565b888201518781111561287d5760008081fd5b61288b8d8b838601016125ee565b825250604080830151888111156128a25760008081fd5b6128b08e8c838701016125ee565b8b84015250606080840151898111156128c95760008081fd5b6128d78f8d838801016125ee565b8385015250608091506128eb828501612633565b9083015260a083810151898111156129035760008081fd5b6129118f8d838801016125ee565b838501525060c09150612925828501612633565b9083015260e08301518881111561293c5760008081fd5b61294a8e8c838701016126e6565b9183019190915250845250918601918601612835565b5098975050505050505050565b6000845161297f81846020890161205a565b7f400000000000000000000000000000000000000000000000000000000000000090830190815284516129b981600184016020890161205a565b7f26000000000000000000000000000000000000000000000000000000000000006001929091019182015283516129f781600284016020880161205a565b0160020195945050505050565b600060208284031215612a1657600080fd5b815180151581146121bd57600080fd5b60008251612a3881846020870161205a565b7f20616c7265616479206578697374730000000000000000000000000000000000920191825250600f01919050565b6020815260006121bd602083018461207e565b600060208284031215612a8c57600080fd5b5051919050565b600181811c90821680612aa757607f821691505b602082108103612ac757634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115612b1757600081815260208120601f850160051c81016020861015612af45750805b601f850160051c820191505b81811015612b1357828155600101612b00565b5050505b505050565b815167ffffffffffffffff811115612b3657612b366121c4565b612b4a81612b448454612a93565b84612acd565b602080601f831160018114612b7f5760008415612b675750858301515b600019600386901b1c1916600185901b178555612b13565b600085815260208120601f198616915b82811015612bae57888601518255948401946001909101908401612b8f565b5085821015612bcc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b838152606060208201526000612bf5606083018561207e565b9050826040830152949350505050565b60006020808385031215612c1857600080fd5b825167ffffffffffffffff811115612c2f57600080fd5b8301601f81018513612c4057600080fd5b8051612c4e6122c1826125ca565b81815260059190911b82018301908381019087831115612c6d57600080fd5b928401925b82841015612c94578351612c8581612440565b82529284019290840190612c72565b979650505050505050565b600060208284031215612cb157600080fd5b815167ffffffffffffffff811115612cc857600080fd5b61232d848285016125ee565b600060208284031215612ce657600080fd5b815160ff811681146121bd57600080fd5b60008251612d0981846020870161205a565b7f204c320000000000000000000000000000000000000000000000000000000000920191825250600301919050565b60008251612d4a81846020870161205a565b7f4c0000000000000000000000000000000000000000000000000000000000000092019182525060010191905056fea264697066735822122070f26a7ab2d742d16c42775cb572188a9a8f5aa70295c4d68b1641bc19f7fa4464736f6c63430008110033";

type ServiceBridgeConstructorParams =
  | [linkLibraryAddresses: ServiceBridgeLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ServiceBridgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class ServiceBridge__factory extends ContractFactory {
  constructor(...args: ServiceBridgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        ServiceBridge__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: ServiceBridgeLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$162b54970ae4871b82ec7acaef59686faf\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libs/IterableBridgeMap.sol:IterableBridgeMap"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ServiceBridge> {
    return super.deploy(overrides || {}) as Promise<ServiceBridge>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ServiceBridge {
    return super.attach(address) as ServiceBridge;
  }
  connect(signer: Signer): ServiceBridge__factory {
    return super.connect(signer) as ServiceBridge__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ServiceBridgeInterface {
    return new utils.Interface(_abi) as ServiceBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ServiceBridge {
    return new Contract(address, _abi, signerOrProvider) as ServiceBridge;
  }
}

export interface ServiceBridgeLibraryAddresses {
  ["contracts/libs/IterableBridgeMap.sol:IterableBridgeMap"]: string;
}