import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRouter from "./routes/todo.router.js";
dotenv.config();

const app = express(); // Create an instance of Express
const PORT = process.env.PORT || 3002; // Define the port number from environment variables or default to 3002
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(`Could not connect to mongoDB ${error}`));

app.listen(PORT, () => {
  console.log(`Listening to the ${PORT}`);
});

app.use("/api", todoRouter);
