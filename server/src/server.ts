import express from 'express';
import payload from 'payload';
import cors, { CorsOptions } from 'cors';
import { connectToDatabase } from './mongodb';
import { mediaManagement } from "payload-cloudinary-plugin";

require('dotenv').config();
const app = express();

const corsOptions: CorsOptions = {
  origin: 'http://localhost:3000',
  allowedHeaders: ['Origin', 'Content-Type', 'Accept'],
};

// Apply CORS middleware before defining routes
app.use(cors(corsOptions));

// Cloudinary
const cloudinaryConfig = {
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.CLOUD_API_KEY}`,
  api_secret: `${process.env.CLOUD_API_SECRET}`,
};

app.use(mediaManagement(cloudinaryConfig));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// API route for fetching books
app.get('/api/getBooks', async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    console.log("connected to mongodb server")
    const books = await db.collection('books').find({}).toArray();
    res.status(200).json({ books });
    console.log(books)
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here
  app.listen(4000);
}

start();
