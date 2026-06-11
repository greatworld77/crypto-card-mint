'use client'

export default function WalletButtons() {
  const dappUrl = encodeURIComponent(window.location.href)

  const wallets = [
    {
      name: 'MetaMask',
      link: `https://metamask.app.link/dapp/${window.location.host}`
    },
    {
      name: 'Trust Wallet',
      link: `https://link.trustwallet.com/open_url?coin_id=60&url=${dappUrl}`
    },
    {
      name: 'Coinbase Wallet',
      link: `https://go.cb-w.com/dapp?cb_url=${dappUrl}`
    },
    {
      name: 'Uniswap Wallet',
      link: `https://wallet.uniswap.org/`
    },
    {
      name: 'Rainbow Wallet',
      link: `https://rainbow.me/`
    }
  ]

  return (
    <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Choose Wallet</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {wallets.map((wallet) => (
          <button
            key={wallet.name}
            onClick={() => window.location.href = wallet.link}
            className="bg-zinc-800 hover:bg-zinc-700 p-4 rounded-xl"
          >
            {wallet.name}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <appkit-button />
      </div>
    </div>
  )
}