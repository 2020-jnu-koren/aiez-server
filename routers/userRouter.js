import express from "express";
import routes from "../router";
import { signIn, postLogin } from "../controllers/userControler";

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("user index"));
userRouter.post(routes.users.signin, signIn, postLogin);
userRouter.post(routes.users.login, postLogin);

export default userRouter;
