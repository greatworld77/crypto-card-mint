import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'

const uri = process.env.MONGODB_URI!

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const client = new MongoClient(uri)
    await client.connect()

    const db = client.db('crypto-card')
    const collection = db.collection('mints')

    const result = await collection.insertOne({
      ...body,
      createdAt: new Date()
    })

    await client.close()

    return NextResponse.json({
      success: true,
      id: result.insertedId
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}