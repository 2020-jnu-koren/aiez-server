import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  path: {
    type: String,
    required: "File URL is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  }
});

const model = mongoose.model("Image", ImageSchema);
export default model;
