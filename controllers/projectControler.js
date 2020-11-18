import Project from "../models/Project";
import User from "../models/User";
export const postProject = async (req, res) => {
  const {
    body: { title }
  } = req;
  try {
    const newProject = await Project.create({
      title,
      creator: req.user._id
    });
    const user = await User.findById(req.user._id);
    user.addProject(newProject._id);
    res.send(newProject);
  } catch (err) {
    console.log("[projectControler] (postProject) err : ", err);
    res.status(400).send("create project error");
  }
};

export const getProject = async (req, res) => {
  const id = req.query.id;
  try {
    const project = await Project.findById({ _id: id });
    res.send(project);
  } catch (err) {
    console.log("[projectControler] (postProject) err : ", err);
    res.status(400).send("get project error");
  }
};

export const getProjectByUserId = async (req, res) => {
  try {
    const project = await Project.find({ creator: req.user._id });
    res.send(project);
  } catch (err) {
    console.log("[projectControler] (postProject) err : ", err);
    res.status(400).send("get project error");
  }
};

export const putProject = async (req, res) => {
  const {
    body: { id, title }
  } = req;
  try {
    await Project.findOneAndUpdate({ _id: id }, { title });
    res.send("sucess edit project");
  } catch (err) {
    console.log("[projectControler] (postProject) err : ", err);
    res.status(400).send("put project error");
  }
};

export const deleteProject = async (req, res) => {
  const {
    body: { id }
  } = req;
  try {
    const project = await Project.findOneAndRemove({ _id: id });
    res.send(project);
  } catch (err) {
    console.log("[projectControler] (postProject) err : ", err);
    res.status(400).send("remove project error");
  }
};
