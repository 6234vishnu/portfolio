import express from "express";
import dotenv from "dotenv";
import messageRouter from "../routes/messageRouter.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // default to 5000 if not set

app.get("/", (req, res) => {
  res.send("server is running");
});
app.use("/api",messageRouter)

app.listen(PORT, () => {
  console.log(`server running on: http://localhost:${PORT}`);
});
