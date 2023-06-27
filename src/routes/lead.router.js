import { Router } from "express";
import { leadController } from "../controllers/lead.controller.js";
import { confirmToken } from "../middlewares/confirmToken.middleware.js";
const leadRouter = Router();

// it will be used from client side
leadRouter.post("/", leadController.create);

leadRouter.use(confirmToken);
leadRouter.get("/", leadController.get);
leadRouter.get("/:id", leadController.getLeadById);
leadRouter.delete("/:id" , leadController.delete);
leadRouter.patch("/:id" , leadController.update);

export default leadRouter;
