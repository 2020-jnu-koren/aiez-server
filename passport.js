import passport from "passport";
import User from "./models/User";
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    // callback;
    (email, password, done) => {
      User.findOne({ email }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false, { message: "Incorrect email" });
        if (!password === user.password)
          return done(null, false, { message: "Incorrect password" });
        return done(null, user);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((_id, done) => {
  done(null, _id);
});
