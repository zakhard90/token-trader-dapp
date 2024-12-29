import { Address } from 'viem'

// Ensure the address is a valid hex string with '0x' prefix
export const TRADER_ADDRESS = (process.env.NEXT_PUBLIC_TRADER_ADDRESS || '') as Address

export const TRADER_ABI = [
  {
    inputs: [{ name: "amountETH", type: "uint256" }],
    name: "tokenAmount",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenPrice",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      { name: "buyer", type: "address", indexed: true },
      { name: "ethAmount", type: "uint256", indexed: false },
      { name: "tokenAmount", type: "uint256", indexed: false }
    ],
    name: "TokensPurchased",
    type: "event"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
] as const