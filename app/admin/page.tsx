export default async function AdminPage() {
  const res = await fetch('http://localhost:3000/api/admin', {
    cache: 'no-store'
  })

  const data = await res.json()

  const virtualCount = data.records.filter((x: any) => x.nftType === 'Virtual Card NFT').length
  const physicalCount = data.records.filter((x: any) => x.nftType === 'Physical Card NFT').length
  const freeCount = data.records.filter((x: any) => x.nftType === 'Free NFT').length

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Crypto Card Admin Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-zinc-900 p-5 rounded-xl">Total: {data.total}</div>
        <div className="bg-blue-900 p-5 rounded-xl">Virtual: {virtualCount}</div>
        <div className="bg-purple-900 p-5 rounded-xl">Physical: {physicalCount}</div>
        <div className="bg-green-900 p-5 rounded-xl">Free: {freeCount}</div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-zinc-700 text-sm">
          <thead>
            <tr className="bg-zinc-900">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Wallet</th>
              <th className="p-3 text-left">NFT Type</th>
              <th className="p-3 text-left">Bonus</th>
              <th className="p-3 text-left">Shipping</th>
              <th className="p-3 text-left">Created</th>
            </tr>
          </thead>

          <tbody>
            {data.records.map((item: any) => (
              <tr key={item._id} className="border-t border-zinc-800">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.wallet}</td>
                <td className="p-3">{item.nftType}</td>
                <td className="p-3">{item.bonus}</td>
                <td className="p-3">
                  {item.address ? `${item.address}, ${item.city}, ${item.country}, ${item.postalCode}, ${item.phone}` : '-'}
                </td>
                <td className="p-3">{new Date(item.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}