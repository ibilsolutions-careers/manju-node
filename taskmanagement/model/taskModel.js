const db = require("../../db");

let createTask = async (data) => {
  let database = await db.connectDb();
  console.log(database);
  let result = await database.collection("taskCollection").insertOne(data);
  let select = await database
    .collection("taskCollection")
    .find({ _id: result.insertedId })
    .toArray();
  return select;
};

let listTask = async () => {
  let database = await db.connectDb();
  let result = await database.collection("taskCollection").find().toArray();
  return result;
};

let taskUpdate = async (taskId, newTitle) => {
  let database = await db.connectDb();
  let result = await database
    .collection("taskCollection")
    .updateOne(
      { _id: new db.ObjectId(taskId) },
      { $set: { description: newTitle } }
    );
  return result;
};

let taskDelete = async (taskId) => {
  let database = await db.connectDb();
  let result = await database
    .collection("taskCollection")
    .deleteOne({ _id: new db.ObjectId(taskId) });
  return result;
};

module.exports = {
  createTask,
  listTask,
  taskUpdate,
  taskDelete,
};
