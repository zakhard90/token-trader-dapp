import {
  createAppKit,
  useAppKit,
  useAppKitState,
  useAppKitAccount,
  useAppKitTheme,
  useAppKitEvents,
  useWalletInfo,
  useAppKitNetwork,
  useDisconnect
} from '@reown/appkit/react'
import { sepolia } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID ?? ''

const wagmiAdapter = new WagmiAdapter({
  networks: [sepolia],
  projectId
})

const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [sepolia],
  allowUnsupportedChain: false,
  features : {allWallets : true},
  projectId
 })

export {
  modal,
  wagmiAdapter,
  useAppKit,
  useAppKitState,
  useAppKitTheme,
  useAppKitEvents,
  useAppKitAccount,
  useWalletInfo,
  useAppKitNetwork,
  useDisconnect
}