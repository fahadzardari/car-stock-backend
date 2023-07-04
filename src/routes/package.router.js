// packages.routes.js
import { Router } from "express";
import { packageController } from "../controllers/package.controller.js";
import { confirmToken } from "../middlewares/confirmToken.middleware.js";

const packageRouter = Router();
packageRouter.get("/", packageController.get);
packageRouter.get("/:id", packageController.getPackageById);

packageRouter.use(confirmToken);

packageRouter.post("/", packageController.create);
packageRouter.delete("/:id", packageController.delete);

export default packageRouter;
