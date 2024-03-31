import todoModel from "../models/todo.model.js";

export const getTodo = async (req, res, next) => {
  const filterTerm = req.params.id;
  const order = req.query.order || "desc"; // Default order is "desc"
  const sort = "createdAt";

  try {
    let todo;

    if (filterTerm == "All") {
      todo = await todoModel.find().sort({ [sort]: order });
    } else if (filterTerm == "Active") {
      todo = await todoModel.find({ active: true }).sort({ [sort]: order });
    } else if (filterTerm == "Completed") {
      todo = await todoModel.find({ active: false }).sort({ [sort]: order });
    } else {
      res.status(404).send({ message: "Todo not found" });
      console.error(res.message);
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
  try {
    const id = req.params.id;

    if (!id) {
      // If 'id' parameter is not provided, return 404 Not Found response
      return res.status(404).send({ message: "Task not found" });
    } else if (id === "completed") {
      // If 'id' parameter is provided and equals "completed", delete all active=false todo
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
