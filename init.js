import "./db";
import app from "./app";
// DB
import "./models/Image";
import "./models/User";

const PORT = 4000;

const handleListen = () => {
  console.log(`api server listen PORT  : ${PORT}`);
};

app.listen(PORT, handleListen);
