const express = require('express');
const app = express();
const path = require('path');
const { MongoClient } = require('mongodb');

const PORT = 3030;
app.use(express.urlencoded({ extended: true }));

// Serve signup form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const MONGO_URL = "mongodb://leader:example@localhost:27017";
const client = new MongoClient(MONGO_URL);

// GET all users
app.get('/getUsers', async (req, res) => {
  try {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("my-sample-db");
    const data = await db.collection('users').find({}).toArray();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Database query error');
  } finally {
    await client.close();
  }
});

// POST to add user (signup)
app.post('/signup', async (req, res) => {
  try {
    await client.connect();
    const db = client.db("my-sample-db");
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).send('All fields required');
    }
    const result = await db.collection('users').insertOne({ email, username, password });
    res.send(`User inserted with _id: ${result.insertedId}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Signup error');
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
