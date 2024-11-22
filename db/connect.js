const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zqxqx.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    // await client.connect();
    console.log('Connected to MongoDB');
    return client.db('duaRuqyahDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
}

module.exports = connectToDatabase;