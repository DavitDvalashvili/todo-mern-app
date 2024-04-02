import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    id: String,
    todo: {
      type: String,
      require: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

TodoSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  },
});

const todoModel = mongoose.model("todoCollection", TodoSchema);

export default todoModel;
