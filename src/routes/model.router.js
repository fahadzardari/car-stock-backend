// models.routes.js
import { Router } from "express";
import { modelController } from "../controllers/model.controller.js";
import { confirmToken } from "../middlewares/confirmToken.middleware.js";

const modelRouter = Router();
modelRouter.get("/", modelController.get);
modelRouter.get("/:id", modelController.getModelById);
modelRouter.use(confirmToken);
modelRouter.post("/", modelController.create);
modelRouter.delete("/:id", modelController.delete);

export default modelRouter;
