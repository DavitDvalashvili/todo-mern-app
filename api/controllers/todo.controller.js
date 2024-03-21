import todoModel from "../models/todo.model.js";

export const getTodo = async (req, res, next) => {
  const active = req.query.active;
  try {
    let todo;

    // Check if the 'active' query parameter exists and is truthy
    if (active) {
      todo = await todoModel.find({ active });
    } else {
      // If 'active' query parameter does not exist or is falsy, query all todo items
      todo = await todoModel.find();
    }
    res.status(200).send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const addTodo = async (req, res, next) => {
  try {
    if (!req.body.todo) {
      return res.status(400).send({ message: "Fill required field" });
    }
    const newTodo = {
      todo: req.body.todo,
    };

    const todo = await todoModel.create(newTodo);
    return res.status(200).send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      // If 'id' parameter is not provided, return 404 Not Found response
      return res.status(404).send({ message: "Task not found" });
    } else if (id === "completed") {
      // If 'id' parameter is provided and equals "completed", delete all active=false todos
      const deleteResult = await todoModel.deleteMany({ active: false });
      if (deleteResult.deletedCount === 0) {
        return res.status(404).send({ message: "No completed tasks found" });
      }
    } else {
      // If 'id' parameter is provided and not equal to "completed", delete the todo with that id
      const deleteTodo = await todoModel.findByIdAndDelete(id);
      if (!deleteTodo) {
        return res.status(404).send({ message: "Task not found" });
      }
    }

    res.status(200).send({ message: "Tasks deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
