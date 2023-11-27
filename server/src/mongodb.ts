import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config() 

const uri = process.env.DATABASE_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let connection;

const connectToDatabase = async () => {
  if (!client) {
    client = new MongoClient(`${uri}`);
    await client.connect();
    connection = client.db(`${process.env.MONGODB_DB}`);
    console.log("connected to mongodb")
  }

  return { db: connection, client };
};

export { connectToDatabase };
