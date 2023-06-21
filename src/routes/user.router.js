import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const userRouter = Router();

//user routers

userRouter.get("/", userController.get);
userRouter.get("/:id", userController.getById);
userRouter.post("/", userController.post);
userRouter.delete("/:id", userController.delete);
userRouter.put("/:id", userController.put);


export default userRouter;
