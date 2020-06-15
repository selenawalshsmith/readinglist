import setAuthToken from "./setAuthToken";

const logoutUser = token => {
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  //dispatch(setCurrentUser({}));
};

export default logoutUser;
