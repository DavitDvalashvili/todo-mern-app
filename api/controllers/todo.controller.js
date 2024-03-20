import todoModel from "../models/todo.model.js";

export const getTodo = async (res, req, next) => {
  try {
    const tasks = todoModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
  }
};
