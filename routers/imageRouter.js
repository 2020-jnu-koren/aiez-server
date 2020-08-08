import express from "express";
import { uploadImage } from "../middleware";
import routes from "../router";
import { postImage } from "../controllers/imageControler";

const imageRouter = express.Router();

imageRouter.get("/", (req, res) => {
  res.send("image api");
});

imageRouter.post(routes.image.upload, uploadImage, postImage);

export default imageRouter;
