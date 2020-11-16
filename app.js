import "core-js";
import passport from "passport";
import session from "express-session";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import flash from "connect-flash";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import express from "express";
import userRouter from "./routers/userRouter";
import imageRouter from "./routers/imageRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./router";
import "./passport";
import projectRouter from "./routers/projectRouter";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://2020-jnu-koren.github.io/aiez-client/"
    ],
    credentials: true
  })
);
const CokieStore = MongoStore(session);

// Parser
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// Flash
app.use(flash());
// Logging
app.use(morgan("dev"));
// Security
app.use(helmet());
// Session
app.use(
  session({
    secret: "kJ`+=Mj3t}<*8A6fuW{z9}z16iqxC3",
    resave: true,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      secure: false,
      httpOnly: true
    },
    store: new CokieStore({ mongooseConnection: mongoose.connection })
  })
);
cookieParsercookieParser;
// Passport
app.use(passport.initialize());
app.use(passport.session());

// Router
app.use("/image", express.static("upload/images"));
app.use(routes.home, globalRouter);
app.use(routes.users.users, userRouter);
app.use(routes.image.images, imageRouter);
app.use(routes.projects.projects, projectRouter);

export default app;
