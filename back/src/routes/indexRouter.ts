import { Router } from "express";
import userRouter from "./usersRouter";
import appointmentRouter from "./appointmentsRouter";
// import auth from "../middlewares/auth";

const indexRouter:Router = Router();
indexRouter.use("/users", userRouter)
indexRouter.use("/appointments",appointmentRouter)

export default indexRouter;