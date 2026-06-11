import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'

const uri = process.env.MONGODB_URI!

export async function GET() {
  try {
    const client = new MongoClient(uri)

    await client.connect()

    const db = client.db('crypto-card')

    const records = await db
      .collection('mints')
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    await client.close()

    return NextResponse.json({
      total: records.length,
      records
    })
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Unknown error'
      },
      { status: 500 }
    )
  }
}