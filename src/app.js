// packages
import express from "express";
import dotenv from "dotenv";

// routers
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.router.js";

//config + variables
dotenv.config();
const app = express();
app.use(express.json());

// api endpoints
app.use("/api/user", userRouter);
// app.use("/api/car", carRouter);
// app.use("/api/lead" , leadRouter);
app.use("/api/auth", authRouter);

// fallback
app.use((req, res) => {
  res.status(404).json({
    result: "Not found",
  });
});

export default app;
