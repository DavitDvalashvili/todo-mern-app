import express from "express";
import {
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo,
  clearCompletedTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/getTodo/:id", getTodo);
router.post("/addTodo", addTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.delete("/clearCompletedTodo", clearCompletedTodo);
router.put("/updateTodo/:id", updateTodo);

export default router;
