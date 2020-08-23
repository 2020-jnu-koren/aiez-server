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
  labels: [
    {
      name: { type: String },
      x: { type: Number },
      y: { type: Number },
      width: { type: Number },
      height: { type: Number }
    }
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  }
});

ImageSchema.methods.addLabel = function (labelObject) {
  this.labels.push(labelObject);
  return this.save();
};

const model = mongoose.model("Image", ImageSchema);
export default model;
