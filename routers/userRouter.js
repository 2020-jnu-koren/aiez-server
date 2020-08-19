import express from "express";
import routes from "../router";
import { signIn, postLogin, getMe } from "../controllers/userControler";

const userRouter = express.Router();

userRouter.get("/", getMe);
userRouter.post(routes.users.signin, signIn, postLogin);
userRouter.post(routes.users.login, postLogin);

export default userRouter;
