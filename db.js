import mongoose from "mongoose";
mongoose.connect(
  `${process.env.DB_HOST}:${process.env.DB_PASSWOD}@${process.env.MONGO_URL}`,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;
const handleOpen = () => console.log("Connected to DB");
const handleError = () => console.log("console.log Error on DB connection");
db.once("open", handleOpen);
db.on("error", handleError);
