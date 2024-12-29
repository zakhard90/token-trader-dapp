'use client'

import { useState } from 'react'
import { parseEther, formatEther } from 'viem'
import { useAccount, useReadContract, useSendTransaction } from 'wagmi'
import { TRADER_ADDRESS, TRADER_ABI } from '../app/contracts'

export default function PurchaseForm() {
  const [ethAmount, setEthAmount] = useState('')
  const { address } = useAccount()
  const { data: sendTransactionData, sendTransaction, isPending } = useSendTransaction()

  const { data: tokenAmount } = useReadContract({
    address: TRADER_ADDRESS,
    abi: TRADER_ABI,
    functionName: 'tokenAmount',
    args: ethAmount ? [parseEther(ethAmount)] : undefined,
    query: {
      enabled: Boolean(ethAmount)
    }
  })

  const handlePurchase = async () => {
    if (!address || !ethAmount) return

    try {
      sendTransaction({
        to: TRADER_ADDRESS,
        value: parseEther(ethAmount),
      })
    } catch (error) {
      console.error('Error purchasing tokens:', error)
    }
  }

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-bold text-gray-800">Purchase Tokens</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            ETH Amount
          </label>
          <input
            type="number"
            value={ethAmount}
            onChange={(e) => setEthAmount(e.target.value)}
            min="0"
            step="0.01"
            placeholder="0.0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {tokenAmount && (
          <p className="text-sm text-gray-600">
            You will receive: {formatEther(tokenAmount)} tokens
          </p>
        )}

        {sendTransactionData && (
          <p className="text-sm text-green-600">
            Transaction submitted! Hash: {sendTransactionData.slice(0, 10)}...
          </p>
        )}

        {!ethAmount && (
          <p className="text-sm text-red-600">
            Please enter an amount of ETH to purchase
          </p>
        )}
        
        <button
          onClick={handlePurchase}
          disabled={!address || !ethAmount || isPending}
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {!address ? 'Connect Wallet' : 
           isPending ? 'Processing...' : 
           'Purchase Tokens'}
        </button>
      </div>
    </div>
  )
}