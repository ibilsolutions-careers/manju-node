const express = require("express");
const router = express.Router();

let createTask = require("./controller/taskController");
router.post("/tasks", createTask.createTask);

router.get("/tasks", createTask.listTask);
router.delete("/tasks", createTask.taskDelete);
router.put("/tasks", createTask.taskUpdate);

module.exports = router;
