import passport from "passport";
import User from "../models/User";

export const signIn = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400).send("Passwords do not match");
  } else {
    try {
      const createdUser = new User({ name, email, password });
      await createdUser.save();
      req.user = createdUser;
      next();
    } catch (err) {
      console.log(err.message);
      res.status(400).send(err.message);
    }
  }
};

export const getMe = async (req, res, next) => {
  try {
    console.log("req.user : ", req.user);
    const user = await User.findById({ _id: req.user._id });
    res.send(user);
  } catch (err) {
    console.log("[userControler] (getMe) err : ", err);
    res.status(400).send("get user data error");
  }
};

export const postLogin = (req, res, next) => {
  passport.authenticate("local", { session: true }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).send("Fail to login");
    }

    req.login(user, err => {
      if (err) {
        return res.status(401).send(info.message);
      }
      console.log("[userControler] (req.login) user : ", user);
      res.user = user;
      return res.status(200).send(user);
    });
  })(req, res, next);
};
