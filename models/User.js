import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }]
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

UserSchema.methods.addProject = function (projectId) {
  if (!this.projects.includes(projectId)) {
    this.projects.push(projectId);
    return this.save();
  }
};

const model = mongoose.model("User", UserSchema);

export default model;
