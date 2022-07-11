import { Router } from "express";
import validateUser from "../middlewares/validadeUser.js";
import { getPurchases, postMovies, postPurchase } from "../controlles/userControllers.js";

const useRouter = Router();

useRouter.use(validateUser);
useRouter.post("/movies", postMovies);
useRouter.get("/purchases", getPurchases);
useRouter.post("/purchases", postPurchase);

export default useRouter;