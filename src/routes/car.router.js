import { Router } from "express";
import { carController } from "../controllers/car.controller.js";
import { confirmToken } from "../middlewares/confirmToken.middleware.js";
const carRouter = Router();

carRouter.use(confirmToken);

carRouter.get("/", carController.get);
carRouter.post("/", carController.create);
carRouter.get("/:id", carController.getCarById);
carRouter.delete("/:id" , carController.delete);
carRouter.patch("/:id" , carController.update);

export default carRouter;
