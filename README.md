# Token Trader dApp

A decentralized application for purchasing tokens using ETH, built with Next.js 14 and Wagmi v2. This dApp interfaces with a smart contract that handles token purchases using real-time ETH/USD price feeds from Chainlink.

## Prerequisites

- Node.js 18+ and npm
- MetaMask or WalletConnect compatible wallet
- Access to Ethereum network (Mainnet or Sepolia testnet)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_TRADER_ADDRESS=<your-contract-address>
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=<your-walletconnect-project-id>
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to launch the dApp.

## Usage

1. Connect your wallet using the "Connect Wallet" button
2. Enter the amount of ETH you want to spend
3. View the calculated token amount you'll receive
4. Click "Purchase Tokens" to execute the transaction
5. Confirm the transaction in your wallet

## Smart Contract Integration

The dApp interacts with the [Trader smart contract](https://github.com/zakhard90/chainlink-price-feed) which:
- Accepts ETH payments
- Uses Chainlink price feeds for ETH/USD conversion
- Mints tokens based on current exchange rates
- Has a maximum purchase limit of 100 ETH per transaction

## Configuration

### Supported Networks
- Ethereum Mainnet
- Sepolia Testnet

### Environment Variables
- `NEXT_PUBLIC_TRADER_ADDRESS`: Deployed Trader contract address
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`: WalletConnect project ID

## License

This project is licensed under the MIT License - see the LICENSE file for details.