import express from "express";
import { getTodo } from "../controllers/todo.controller.js";
import { addTodo } from "../controllers/todo.controller.js";
import { deleteTodo } from "../controllers/todo.controller.js";
import { updateTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/getTodo/:id", getTodo);
router.post("/addTodo", addTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.put("/updateTodo/:id", updateTodo);

export default router;
