import express from "express";
import { postProject } from "../controllers/projectControler";
import { onlyPrivate } from "../middleware";

const projectRouter = express.Router();

projectRouter.post("/", onlyPrivate, postProject);

export default projectRouter;
