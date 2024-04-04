import todoModel from "../models/todo.model.js";

export const getTodo = async (req, res, next) => {
  const filterTerm = req.params.id;
  const order = req.query.order || "desc"; // Default order is "desc"
  const sort = "createdAt";

  try {
    let todo;

    if (filterTerm === "All") {
      todo = await todoModel.find().sort({ [sort]: order });
    } else if (filterTerm === "Active") {
      todo = await todoModel.find({ active: true }).sort({ [sort]: order });
    } else if (filterTerm === "Completed") {
      todo = await todoModel.find({ active: false }).sort({ [sort]: order });
    } else {
      // If the filterTerm doesn't match any expected value, send a 400 Bad Request response
      res.status(400).send({ message: "Invalid filterTerm" });
      return;
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
  const id = req.params.id;
  try {
    if (!id) {
      // If 'id' parameter is not provided, return 404 Not Found response
      return res.status(404).send({ message: "Task not found" });
    } else {
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

export const clearCompletedTodo = async (req, res, next) => {
  try {
    const deleteResult = await todoModel.deleteMany({ active: false });

    if (deleteResult.deletedCount === 0) {
      return res.status(404).send({ message: "No completed tasks found" });
    }

    // Return a success message indicating that completed tasks are deleted
    return res
      .status(200)
      .send({ message: "Completed tasks deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const todo = await todoModel.findById(id);

    if (!todo) {
      return res.status(404).send({ message: "Task not found" });
    }
    const updatedTodo = await todoModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
