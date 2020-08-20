import Image from "../models/Image";
import { map } from "lodash";
export const postImage = async (req, res) => {
  const {
    body: { projectId },
    file: { path }
  } = req;
  console.log("postImage projectId : ", projectId);
  console.log("postImage path : ", path);
  try {
    const newImage = await Image.create({
      path,
      projectId,
      creator: req.user.id
    });
    res.send(newImage);
  } catch (err) {
    console.log("[ImageControler] (postImage) err : ", err);
    res.status(400).send("create Image error");
  }
};

export const postMultiImage = async (req, res) => {
  const {
    body: { projectId }
  } = req;
  try {
    const result = map(req.files, item => {
      return { path: item.path, projectId, creator: req.user.id };
    });
    const newImage = await Image.create(result);
    res.send(newImage);
  } catch (err) {
    console.log("[ImageControler] (postImage) err : ", err);
    res.status(400).send("create Image error");
  }
};

export const getImage = async (req, res) => {
  const {
    body: { id }
  } = req;
  try {
    const getImage = await Image.findById({ _id: id });
    res.send(getImage);
  } catch (err) {
    console.log("[ImageControler] (postImage) err : ", err);
    res.status(400).send("get Image error");
  }
};

export const deleteImage = async (req, res) => {
  const {
    body: { id }
  } = req;
  try {
    const removeImage = await Image.findOneAndRemove({ _id: id });
    res.send(removeImage);
  } catch (err) {
    console.log("[ImageControler] (postImage) err : ", err);
    res.status(400).send("remove Image error");
  }
};
