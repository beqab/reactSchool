import axios from "axios";
import setAuthToken from "../../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// export const resaveUserData = data => {
//   return {
//     type: "RESAVE_USER_DATA",
//     payload: data
//   };
// };

//  login user
export const loginUser = userdata => dispatch => {
  axios
    .post("http://localhost:8000/api/schools/auth/login", userdata)
    .then(res => {
      //   Save to localstorage
      console.log(res.data);
      localStorage.setItem("jwtToken", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      setAuthToken(res.data.token);
      let decode = jwt_decode(res.data.token);
      console.log(decode);
      dispatch(setCurrentUser(res.data, res.data.token, decode));
    })
    .catch(err => console.log(err));
  //   return {
  //     type: "RESAVE_USER_DATA",
  //     payload: data
  //   };
};

// set user
export const setCurrentUser = (data, token, decode) => {
  // let JwtToken = data.token;
  return {
    type: "SET_CURRENT_USER",
    payload: data,
    token: token,
    decode: decode
  };
};

// logout user

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("user");
  setAuthToken(false);
  dispatch(setCurrentUser({}, false, null));
};
