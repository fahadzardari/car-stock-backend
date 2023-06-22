// packages
import express from "express";
import dotenv from "dotenv";

// routers
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.router.js";
import carRouter from "./routes/car.router.js";
import leadRouter from "./routes/lead.router.js";
//config + variables
const app = express();
app.use(express.json());

// api endpoints
app.use("/api/users", userRouter);
app.use("/api/cars", carRouter);
app.use("/api/leads" , leadRouter);
app.use("/api/auth", authRouter);

// fallback
app.use((req, res) => {
  res.status(404).json({
    result: "Not found",
  });
});

export default app;
