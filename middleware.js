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
export const uploadImage = multerImage.single("img");
export const uploadImages = multerImage.array("img");
