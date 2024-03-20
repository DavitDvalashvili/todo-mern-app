import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  id: String,
  task: String,
  isCompleted: {
    type: String,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

TodoSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  },
});

const todoModel = mongoose.model("todoCollection", TodoSchema);

export default todoModel;
