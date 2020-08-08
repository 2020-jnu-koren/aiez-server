// Global
const HOME = "/";
const LOGIN = "/login";

// Users
const USERS = "/users";
const SIGNIN = "/signin";

// IMAGES
const IMAGES = "/images";
const UPLOAD = "/upload";

// Projects
const PROJECTS = "/projects";

const routes = {
  home: HOME,
  login: LOGIN,
  users: { users: USERS, signin: SIGNIN, login: LOGIN },
  image: { images: IMAGES, upload: UPLOAD },
  projects: { projects: PROJECTS }
};

export default routes;
