// Global
const HOME = "/";
const LOGIN = "/login";
// const JOIN = "/join";
// const LOGOUT = "/logout";
// const SEARCH = "/search";

// Users
const USERS = "/users";
// const USER_DETAIL = "/:id";
// const USER_EDIT_PROFILE = "/edit-profile";
// const CHANGE_PASSWORD = "/change-password";

// IMAGES
const IMAGES = "/images";
const UPLOAD = "/upload";
// const VIDEO_DETAIL = "/:id";
// const EDIT_VIDEO = "/:id/edit";
// const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  login: LOGIN,
  users: USERS,
  image: { images: IMAGES, upload: UPLOAD }
};

export default routes;
