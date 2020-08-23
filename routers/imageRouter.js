import express from "express";
import { uploadImage, onlyPrivate, uploadImages } from "../middleware";
import {
  postImage,
  getImage,
  deleteImage,
  postMultiImage,
  addLabel
} from "../controllers/imageControler";

const imageRouter = express.Router();

imageRouter.post("/multi", onlyPrivate, uploadImages, postMultiImage);
imageRouter.get("/", onlyPrivate, getImage);
imageRouter.post("/", onlyPrivate, uploadImage, postImage);
imageRouter.delete("/", onlyPrivate, deleteImage);
imageRouter.post("/labels", onlyPrivate, addLabel);

export default imageRouter;
