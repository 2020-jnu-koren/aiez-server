import passport from "passport";
import User from "../models/User";
import routes from "../router";

export const signIn = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400).send("Passwords do not match");
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();
    } catch (err) {
      console.log(err.message);
      res.status(400).send(err.message);
    }
  }
};

export const getMe = async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.user.id });
    res.send(user);
  } catch (err) {
    console.log("[ImageControler] (postImage) err : ", err);
    res.status(400).send("get user data error");
  }
};

export const postLogin = passport.authenticate("local", {
  successRedirect: routes.home
});
