import multer from "multer";

const multerImage = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload/images");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + "_" + file.originalname);
    }
  })
});

export const localsMiddleware = (req, res, next) => {
  res.locals.user = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    console.log("onlyPrivate");
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

export const uploadImage = multerImage.single("img");
export const uploadImages = multerImage.array("img");
