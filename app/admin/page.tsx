export default async function AdminPage() {
  const res = await fetch(
    'http://localhost:3000/api/admin',
    {
      cache: 'no-store'
    }
  )

  const data = await res.json()

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Crypto Card Admin Dashboard
      </h1>

      <p className="mb-6">
        Total Records: {data.total}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-zinc-700">
          <thead>
            <tr className="bg-zinc-900">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Wallet</th>
              <th className="p-3">NFT Type</th>
            </tr>
          </thead>

          <tbody>
            {data.records.map((item: any) => (
              <tr key={item._id}>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.wallet}</td>
                <td className="p-3">{item.nftType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}