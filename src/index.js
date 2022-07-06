import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const server = express();

const PORT = process.env.PORT;

server.listen(PORT, () => console.log("Server is listening on port."));