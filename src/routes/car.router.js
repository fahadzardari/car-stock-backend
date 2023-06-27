import { Router } from "express";
import { carController } from "../controllers/car.controller.js";
import { confirmToken } from "../middlewares/confirmToken.middleware.js";
const carRouter = Router();

// will be used from client side that's why no middleware
carRouter.get("/", carController.get);
carRouter.get("/:id", carController.getCarById);


carRouter.use(confirmToken);
carRouter.post("/", carController.create);
carRouter.delete("/:id" , carController.delete);
carRouter.patch("/:id" , carController.update);

export default carRouter;
