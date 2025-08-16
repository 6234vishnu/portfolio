import express from "express";
import dotenv from "dotenv";
import messageRouter from "../routes/messageRouter.js";
dotenv.config();
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 5000; // default to 5000 if not set
const frontendUrl=process.env.FRONTEND_URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: frontendUrl, //  frontend URL
  methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"], // allowed HTTP methods
}))

app.get("/", (req, res) => {
  res.send("server is running");
});
app.use("/api",messageRouter)

app.listen(PORT, () => {
  console.log(`server running on: http://localhost:${PORT}`);
});
