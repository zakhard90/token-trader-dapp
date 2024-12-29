'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function ConnectButton() {
  const { address, isConnected } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()

  const handleConnect = async () => {
    // Connect using MetaMask connector
    const connector = connectors.find(c => c.name === 'MetaMask')
    if (connector) {
      connect({ connector })
    }
  }

  if (isConnected && address) {
    return (
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-600">
          Connected: {address.slice(0, 6)}...{address.slice(-4)}
        </p>
        <button
          onClick={() => disconnect()}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={handleConnect}
      disabled={isPending}
      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
    >
      {isPending ? 'Connecting...' : 'Connect Wallet'}
    </button>
  )
}