// Global
const HOME = "api/v1/";
const LOGIN = "api/v1/login";

// Users
const USERS = "api/v1/users";
const SIGNIN = "api/v1/signin";

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
