import { Router } from "express";
import validateUser from "../middlewares/validadeUser.js";
import { postMovies } from "../controlles/userControllers.js";

const useRouter = Router();

useRouter.use(validateUser);
useRouter.post("/movies", postMovies);

export default useRouter;