import mongoose from "mongoose";
const MONGO_CONNECT = `mongodb://${process.env.DB_HOST}:${process.env.DB_PASSWOD}@${process.env.MONGO_URL}?authSource=admin&authMechanism=SCRAM-SHA-1`;
console.log("MONGO_CONNECT : ", MONGO_CONNECT);
mongoose
  .connect(MONGO_CONNECT, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .catch(err => console.log(err));

const db = mongoose.connection;
const handleOpen = () => console.log("Connected to DB");
const handleError = () => console.log("console.log Error on DB connection");
db.once("open", handleOpen);
db.on("error", handleError);
