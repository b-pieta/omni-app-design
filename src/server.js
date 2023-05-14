import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import { Configuration, OpenAIApi } from "openai";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();


const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/test', (req, res) => {
  res.send('Test route is working');
});


const client = new MongoClient(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connect();

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

app.post('/subscribe', async (req, res) => {
  const email = req.body.email;

  try {
    const collection = client.db('omniai-emails').collection('omniai');
    await collection.insertOne({ email: email });
    console.log('Email saved to MongoDB!');
    res.status(200).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Error saving email to MongoDB:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});



const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
