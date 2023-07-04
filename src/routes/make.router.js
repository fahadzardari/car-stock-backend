import { Router } from "express";
import { makeController } from "../controllers/make.controller.js";
import { confirmToken } from "../middlewares/confirmToken.middleware.js";

const makeRouter = Router();

makeRouter.get("/", makeController.get);
makeRouter.post("/", makeController.create);
makeRouter.get("/:id", makeController.getMakeById);
makeRouter.delete("/:id", makeController.delete);


export default makeRouter;