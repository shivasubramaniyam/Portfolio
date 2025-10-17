import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
const client = new MongoClient(process.env.MONGO_URI);

export async function GET() {
  try {
    await client.connect();
    const db = client.db("PortfolioDB");
    const collection = db.collection("visitor");
    // Add new visit record
    const currentTime = new Date();
    await collection.insertOne({ time: currentTime });
    console.log("New visit at:", currentTime);

    // Get total visits
    const count = await collection.countDocuments();
    return NextResponse.json({ count });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    await client.close();
  }
}
