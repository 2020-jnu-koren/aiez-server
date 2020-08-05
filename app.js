import "core-js";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import express from "express";
import userRouter from "./routers/userRouter";
import imageRouter from "./routers/imageRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./router";
console.log("routes : ", routes);
const app = express();
// Parser
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Logging
app.use(morgan("dev"));
// Security
app.use(helmet());

// Router
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.image.images, imageRouter);

export default app;
