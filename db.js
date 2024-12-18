const { MongoClient, ObjectId } = require("mongodb");

let client;
let db;

let connectDb = async () => {
  if (!db) {
    try {
      console.log("connected to mongo db");
      client = new MongoClient.connect("mongodb://localhost:27017");
      console.log(client);
      db = client.db("task");
      console.log(db);
    } catch (error) {
      console.log("cannot connect mongo db");
    }
  }
  return db;
};

module.exports = { connectDb, ObjectId };
