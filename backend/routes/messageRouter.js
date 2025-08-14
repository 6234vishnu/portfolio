import express from 'express'
const messageRouter=express.Router()
import { startServer } from '../controllers/messageController.js'

messageRouter.get('/startServer',startServer)

export default messageRouter