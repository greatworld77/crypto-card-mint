export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold text-center">
          Crypto Card NFT
        </h1>

        <p className="text-center mt-4 text-zinc-400">
          Mint your Virtual or Physical Crypto Card NFT
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-zinc-900 rounded-2xl p-8">
            <h2 className="text-3xl font-bold">
              Virtual Card NFT
            </h2>

            <p className="mt-4">
              Purchase Price: $5
            </p>

            <p className="mt-2 text-green-400">
              First 1000 users receive $5 Card Bonus
            </p>

            <button className="mt-6 w-full bg-blue-600 p-4 rounded-xl">
              Mint Virtual NFT
            </button>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8">
            <h2 className="text-3xl font-bold">
              Physical Card NFT
            </h2>

            <p className="mt-4">
              Purchase Price: $60
            </p>

            <p className="mt-2 text-green-400">
              Receive $15 Purchase Bonus
            </p>

            <button className="mt-6 w-full bg-purple-600 p-4 rounded-xl">
              Mint Physical NFT
            </button>
          </div>

        </div>

        <div className="mt-12 bg-zinc-900 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold">
            Free NFT Program
          </h2>

          <p className="mt-4">
            Receive NFT with 10% Reload Bonus (Max $500)
          </p>

          <button className="mt-6 bg-green-600 px-8 py-4 rounded-xl">
            Mint Free NFT
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <button
            disabled
            className="bg-zinc-700 p-6 rounded-xl opacity-60"
          >
            Reload Card (Coming Soon)
          </button>

          <button
            disabled
            className="bg-zinc-700 p-6 rounded-xl opacity-60"
          >
            Withdrawal (Coming Soon)
          </button>

        </div>

      </div>
    </main>
  )
}