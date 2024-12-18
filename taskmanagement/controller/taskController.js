const model = require("../model/taskModel");

module.exports.createTask = async (req, res) => {
  try {
    console.log("its working");
    if (!req.body.title || !req.body.description) {
      return res.send({
        result: false,
        message: "insufficient parameters",
      });
    }

    let insert = await model.createTask({
      title: req.body.title,
      description: req.body.description,
    });

    console.log(insert);
    if (insert.length > 0) {
      return res.send({
        result: true,
        message: "new task added",
      });
    } else {
      return res.send({
        result: false,
        message: "something went wrong",
      });
    }
  } catch (error) {
    return res.send({ result: false, message: error.message });
  }
};

module.exports.taskUpdate = async (req, res) => {
  try {
    if (!req.body.new_title || !req.body.task_id) {
      return res.send({
        result: false,
        message: "insufficient parameters",
      });
    }
    let taskUpdate = await model.taskUpdate(
      req.body.task_id,
      req.body.new_title
    );
    let listTask = await model.listTask();
    return res.send({
      result: true,
      message: "updated successfully",
      data: listTask,
    });
  } catch (error) {
    return res.send({ result: false, message: error.message });
  }
};

module.exports.listTask = async (req, res) => {
  try {
    let listTask = await model.listTask();
    console.log(listTask);
    if (listTask.length > 0) {
      return res.send({
        result: true,
        message: "data retrieved",
        data: listTask,
      });
    } else {
      return res.send({
        result: false,
        message: "no task added yet",
      });
    }
  } catch (error) {
    return res.send({ result: false, message: error.message });
  }
};


module.exports.taskDelete = async (req, res) => {
  try {
    if (!req.body.task_id) {
      return res.send({
        result: false,
        message: "insufficient parameters",
      });
    }
    let taskDelete = await model.taskDelete(
      req.body.task_id);
    let listTask = await model.listTask();
    return res.send({
      result: true,
      message: "deleted successfully",
      data: listTask,
    });
  } catch (error) {
    return res.send({ result: false, message: error.message });
  }
};