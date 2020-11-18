import express from "express";
import {
  postProject,
  getProject,
  putProject,
  deleteProject,
  getProjectByUserId
} from "../controllers/projectControler";
import { onlyPrivate } from "../middleware";

const projectRouter = express.Router();

projectRouter.post("/", onlyPrivate, postProject);
projectRouter.put("/", onlyPrivate, putProject);
projectRouter.delete("/", onlyPrivate, deleteProject);
projectRouter.get("/", onlyPrivate, getProject);
projectRouter.get("/user", onlyPrivate, getProjectByUserId);

export default projectRouter;
