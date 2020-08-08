export const postImage = (req, res) => {
  console.log(req.file);
  res.send(req.file);
};
