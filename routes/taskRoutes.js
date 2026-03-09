const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware.js");
const {
  createTask,
  getTasks,
  deleteTask
} = require("../controllers/taskController.js");

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getTasks);
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;