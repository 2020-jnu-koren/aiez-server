// Global
const HOME = "/";
const LOGIN = "/login";

// Users
const USERS = "users";
const SIGNIN = "signin";

// IMAGES
const IMAGES = "api/v1/images";
const UPLOAD = "api/v1/upload";

// Projects
const PROJECTS = "api/v1/projects";

const routes = {
  home: HOME,
  login: LOGIN,
  users: { users: USERS, signin: SIGNIN, login: LOGIN },
  image: { images: IMAGES, upload: UPLOAD },
  projects: { projects: PROJECTS }
};

export default routes;
