import "./db";
import app from "./app";

const PORT = 4000;

const handleListen = () => {
  console.log(`api server listen PORT  : ${PORT}`);
};

app.listen(PORT, handleListen);
