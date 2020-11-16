import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }]
});

UserSchema.methods.addProject = function (projectId) {
  if (!this.projects.includes(projectId)) {
    this.projects.push(projectId);
    return this.save();
  }
};

const model = mongoose.model("User", UserSchema);

export default model;
