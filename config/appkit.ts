'use client'

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { sepolia } from '@reown/appkit/networks'

const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID!

createAppKit({
  adapters: [new EthersAdapter()],
  networks: [sepolia],
  defaultNetwork: sepolia,
  projectId,
  enableWalletConnect: true,
  allWallets: 'SHOW',
  metadata: {
    name: 'Crypto Card NFT',
    description: 'Crypto Card NFT Minting App',
    url: 'https://upgraded-memory-7vx654gx6wv93p7v4-3000.app.github.dev',
    icons: ['https://upgraded-memory-7vx654gx6wv93p7v4-3000.app.github.dev/favicon.ico']
  }
})