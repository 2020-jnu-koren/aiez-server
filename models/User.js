import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: "id is requred"
  },
  password: {
    type: String,
    required: "password is requred"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("User", UserSchema);
export default model;
