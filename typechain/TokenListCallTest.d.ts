/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface TokenListCallTestInterface extends ethers.utils.Interface {
  functions: {
    "added()": FunctionFragment;
    "findTokenList()": FunctionFragment;
    "getChild()": FunctionFragment;
    "getParent()": FunctionFragment;
    "getTokens(address)": FunctionFragment;
    "registered()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "added", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "findTokenList",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getChild", values?: undefined): string;
  encodeFunctionData(functionFragment: "getParent", values?: undefined): string;
  encodeFunctionData(functionFragment: "getTokens", values: [string]): string;
  encodeFunctionData(
    functionFragment: "registered",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "added", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "findTokenList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChild", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getParent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registered", data: BytesLike): Result;

  events: {};
}

export class TokenListCallTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TokenListCallTestInterface;

  functions: {
    added(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    findTokenList(
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, number, string, string, BigNumber] & {
          tokenAddress: string;
          tokenType: number;
          name: string;
          symbol: string;
          decimals: BigNumber;
        })[]
      ]
    >;

    getChild(overrides?: CallOverrides): Promise<[string]>;

    getParent(overrides?: CallOverrides): Promise<[string]>;

    getTokens(
      bridgeTokens: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, number, string, string, BigNumber] & {
          tokenAddress: string;
          tokenType: number;
          name: string;
          symbol: string;
          decimals: BigNumber;
        })[]
      ]
    >;

    registered(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  added(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  findTokenList(
    overrides?: CallOverrides
  ): Promise<
    ([string, number, string, string, BigNumber] & {
      tokenAddress: string;
      tokenType: number;
      name: string;
      symbol: string;
      decimals: BigNumber;
    })[]
  >;

  getChild(overrides?: CallOverrides): Promise<string>;

  getParent(overrides?: CallOverrides): Promise<string>;

  getTokens(
    bridgeTokens: string,
    overrides?: CallOverrides
  ): Promise<
    ([string, number, string, string, BigNumber] & {
      tokenAddress: string;
      tokenType: number;
      name: string;
      symbol: string;
      decimals: BigNumber;
    })[]
  >;

  registered(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    added(overrides?: CallOverrides): Promise<void>;

    findTokenList(
      overrides?: CallOverrides
    ): Promise<
      ([string, number, string, string, BigNumber] & {
        tokenAddress: string;
        tokenType: number;
        name: string;
        symbol: string;
        decimals: BigNumber;
      })[]
    >;

    getChild(overrides?: CallOverrides): Promise<string>;

    getParent(overrides?: CallOverrides): Promise<string>;

    getTokens(
      bridgeTokens: string,
      overrides?: CallOverrides
    ): Promise<
      ([string, number, string, string, BigNumber] & {
        tokenAddress: string;
        tokenType: number;
        name: string;
        symbol: string;
        decimals: BigNumber;
      })[]
    >;

    registered(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    added(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    findTokenList(overrides?: CallOverrides): Promise<BigNumber>;

    getChild(overrides?: CallOverrides): Promise<BigNumber>;

    getParent(overrides?: CallOverrides): Promise<BigNumber>;

    getTokens(
      bridgeTokens: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registered(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    added(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    findTokenList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getChild(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getParent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokens(
      bridgeTokens: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registered(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
