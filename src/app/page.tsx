'use client'

import ConnectButton from '@/components/ConnectButton'
import PurchaseForm from '@/components/PurchaseForm'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Token Trader dApp
          </h1>
          
          <ConnectButton />
          
          <PurchaseForm />
        </div>
      </div>
    </main>
  )
}