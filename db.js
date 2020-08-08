import mongoose from "mongoose";

console.log("process.env.MONGO_URL : ", process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;
const handleOpen = () => console.log("Connected to DB");
const handleError = () => console.log("console.log Error on DB connection");
db.once("open", handleOpen);
db.on("error", handleError);
