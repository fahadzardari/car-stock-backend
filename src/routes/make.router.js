import { Router } from "express";
import { makeController } from "../controllers/make.controller.js";
import { confirmToken } from "../middlewares/confirmToken.middleware.js";

const makeRouter = Router();
makeRouter.get("/", makeController.get);
makeRouter.get("/:id", makeController.getMakeById);
makeRouter.use(confirmToken);
makeRouter.post("/", makeController.create);
makeRouter.delete("/:id", makeController.delete);


export default makeRouter;