import express from "express";
const messageRouter = express.Router();
import { startServer, sendMessage } from "../controllers/messageController.js";

messageRouter.get("/startServer", startServer);
messageRouter.post("/coustomerMessage", sendMessage);

export default messageRouter;
