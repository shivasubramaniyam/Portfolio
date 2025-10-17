// 1️⃣ Load environment variables at the very top
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // this reads your .env file

import { MongoClient } from "mongodb";

// 2️⃣ Now MONGO_URI will be defined
console.log("MONGO_URI =", process.env.MONGO_URI); // check if it prints your URI

const client = new MongoClient(process.env.MONGO_URI);

async function testConnection() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("portfolioDB");
    const collection = db.collection("visitors");
    console.log("Database and collection are ready:", collection.dbName);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

testConnection();
