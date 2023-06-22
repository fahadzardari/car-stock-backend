import { Router } from "express";
import { leadController } from "../controllers/lead.controller.js";
import { confirmToken } from "../middlewares/confirmToken.middleware.js";
const leadRouter = Router();

leadRouter.use(confirmToken);

leadRouter.get("/", leadController.get);
leadRouter.post("/", leadController.create);
leadRouter.get("/:id", leadController.getCarById);
leadRouter.delete("/:id" , leadController.delete);
leadRouter.patch("/:id" , leadController.update);

export default leadRouter;
