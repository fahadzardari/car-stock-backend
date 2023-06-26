import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const userRouter = Router();

//user routers

userRouter.get("/", userController.getAll);
userRouter.get("/:id", userController.getById);
userRouter.post("/", userController.create);
userRouter.delete("/:id", userController.delete);
userRouter.put("/:id", userController.update);


export default userRouter;
