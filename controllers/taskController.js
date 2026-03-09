const Task = require("../models/Task.js");

exports.createTask = async (req, res) => {

  const { title, description } = req.body;

  try {

    const task = await Task.create({
      title,
      description,
      user: req.user.id
    });

    res.json(task);

  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getTasks = async (req, res) => {

  try {

    const tasks = await Task.find({ user: req.user.id });

    res.json(tasks);

  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteTask = async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({ message: "Task deleted" });

  } catch (error) {
    res.status(500).json(error);
  }
};