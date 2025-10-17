import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local"
  );
}

let client;
let clientPromise;

if (!clientPromise) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function GET(request) {
  const ipHeader = request?.headers?.get("x-forwarded-for") ?? null;
  const ip = ipHeader ? ipHeader.split(",")[0].trim() : "unknown";
  try {
    const mongoClient = await clientPromise;
    const db = mongoClient.db("PortfolioDB");
    const collection = db.collection("visitor");

    const currentTime = new Date();
    await collection.insertOne({ time: currentTime, ip: ip });
    console.log("New visit at:", currentTime);

    const count = await collection.countDocuments();

    return NextResponse.json({ count });
  } catch (error) {
    console.error("Visitor API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
