import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Project name is requiered"
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image"
    }
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Project", ProjectSchema);
export default model;
