import { Router } from "express";
import { getMovies } from "../controlles/defaultController.js";

const defaultRouter = Router();

defaultRouter.get("/movies", getMovies);

export default defaultRouter;