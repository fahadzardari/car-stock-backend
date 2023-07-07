import { authController } from "../controllers/auth.controller.js"
import { Router } from "express"
const authRouter = Router()

// routers
authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
authRouter.post("/verify", authController.verify);

export default authRouter;