import express from "express";
import { uploadImage } from "../middleware";
import routes from "../router";

const imageRouter = express.Router();

imageRouter.get("/", (req, res) => {
  res.send("image api");
});

imageRouter.post(routes.image.upload, uploadImage, (req, res) => {
  console.log(req.file);
  res.send(req.file);
});
export default imageRouter;
