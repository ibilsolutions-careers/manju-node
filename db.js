const { MongoClient, ObjectId } = require("mongodb");

let client;
let db;

let connectDb = async () => {
  if (!db) {
    try {
      console.log("connected to mongo db");
      client = await MongoClient.connect("mongodb://localhost:27017/", {
        useUnifiedTopology: true,
      });
      console.log(client);
      db = client.db("task");
      console.log(db);
    } catch (error) {
      console.log(error);
      console.log("cannot connect mongo db");
    }
  }
  return db;
};

module.exports = { connectDb, ObjectId };
