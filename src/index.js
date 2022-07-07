import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import defaultRouter from "./routes/defaultRouter.js";
import authRouter from './routes/authRouter.js'

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.use(authRouter);

server.use(cors());
server.use(defaultRouter);

const PORT = process.env.PORT;

server.listen(PORT, () => console.log("Server is listening on port."));