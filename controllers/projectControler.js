import Project from "../models/Project";
export const postProject = async (req, res) => {
  const {
    body: { title }
  } = req;
  try {
    const newProject = await Project.create({
      title,
      creator: req.user.id
    });
    res.send(newProject);
  } catch (err) {
    console.log("[projectControler] (postProject) err : ", err);
    res.status(400).send("create project error");
  }
};
