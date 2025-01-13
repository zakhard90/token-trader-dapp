'use client'

import { useAppKit, useDisconnect, useAppKitNetwork } from '../app/config'

import { sepolia } from '@reown/appkit/networks'
import { useAccount, useConnect } from 'wagmi'

export function ConnectButton() {
  const modal = useAppKit()
  const { address, isConnected } = useAccount()
  
  const { isPending } = useConnect()
  const { switchNetwork } = useAppKitNetwork()

  function openAppKit() {
    modal.open()
  }

  function connectLabel() {
    return isConnected 
      ? address && !isPending ? address.slice(0,4) +'...'+ address.slice(-4) : 'Connecting...'
      : 'Connect Wallet'
  }

  return (
    <div className="action-button">
      <button
        onClick={openAppKit}
        disabled={isPending}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
      >
        {connectLabel()}
      </button>
    </div>
  )
}

export default ConnectButton