import { Router } from "express";
import validateUser from "../middlewares/validadeUser.js";
import { postMovies, postPurchase } from "../controlles/userControllers.js";

const useRouter = Router();

useRouter.use(validateUser);
useRouter.post("/movies", postMovies);
useRouter.post("/purchases", postPurchase);

export default useRouter;