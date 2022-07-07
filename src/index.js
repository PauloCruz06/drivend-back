import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import defaultRouter from "./routes/defaultRouter.js";

dotenv.config();

const server = express();

server.use(cors());
server.use(defaultRouter);

const PORT = process.env.PORT;

server.listen(PORT, () => console.log("Server is listening on port."));