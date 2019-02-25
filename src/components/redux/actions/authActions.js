import axios from "axios";
import setAuthToken from "../../../utils/setAuthToken";

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
      let token1 = res.data.token;
      localStorage.setItem("jwtToken", res.data.token);
      setAuthToken(res.data.token);
      dispatch(setCurrentUser(res.data));
    })
    .catch(err => console.log(err));
  //   return {
  //     type: "RESAVE_USER_DATA",
  //     payload: data
  //   };
};

export const setCurrentUser = data => {
  console.log(data);
  let JwtToken = data.token;
  return {
    type: "SET_CURRENT_USER",
    payload: data,
    token: JwtToken
  };
};
