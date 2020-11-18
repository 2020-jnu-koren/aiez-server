import Image from "../models/Image";
import Project from "../models/Project";
import { forEach, map } from "lodash";
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
      creator: req.user._id
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
    const insertProject = await Project.findById({ _id: projectId });

    console.log("req.files : ", res.files);
    const result = map(req.files, item => {
      return { path: item.path, projectId, creator: req.user._id };
    });
    const newImage = await Image.create(result);
    console.log("newImage : ", newImage);
    forEach(newImage, image => {
      insertProject.addImages(image._id);
    });
    res.send(newImage);
  } catch (err) {
    console.log("[ImageControler] (postImage) err : ", err);
    res.status(400).send("create Image error");
  }
};

export const getImage = async (req, res) => {
  const id = req.query.id;
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
