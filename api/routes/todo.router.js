import express from "express";
import { getTodo } from "../controllers/todo.controller.js";
import { addTodo } from "../controllers/todo.controller.js";
import { deleteTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/getTodo", getTodo);
router.post("/addTodo", addTodo);
router.delete("/deleteTodo/:id", deleteTodo);

export default router;
