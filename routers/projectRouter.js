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
projectRouter.get("/", onlyPrivate, getProject);
projectRouter.get("/user", onlyPrivate, getProjectByUserId);
projectRouter.put("/", onlyPrivate, putProject);
projectRouter.delete("/", onlyPrivate, deleteProject);

export default projectRouter;
