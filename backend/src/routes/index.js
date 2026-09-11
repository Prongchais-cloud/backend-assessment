import { Router } from "express";
import { router as routes} from "./product.routes.js";

export const router = Router();

router.use("/product", routes)