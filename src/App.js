import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes";
import * as authActions from "./components/redux/actions/authActions";
import Header from "./components/layout/Header";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Aside from "./components/layout/Aside";
import Index from "./components/pages/index";
import CreateClass from "./components/pages/registerClass/RegisterClass";
import TeacherProfile from "./components/pages/TeacherProfile";
import Classrooms from "./components/pages/Classrooms";
import { connect } from "react-redux";
import store from "./store";

if (localStorage.jwtToken) {
  // set auth Token header aith
  setAuthToken(localStorage.jwtToken);
  // decode Token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  let tokenfotmStore = localStorage.jwtToken;
  let userData = localStorage.getItem("user");
  userData = JSON.parse(userData);
  console.log("auth", userData);
  // Set user and isAuthanticated
  store.dispatch(authActions.setCurrentUser(userData, tokenfotmStore, decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(authActions.logoutUser());
  }
  // console.log(
  //   decoded.exp,
  //   "exp",
  //   currentTime,
  //   "curent",
  //   decoded.exp - currentTime
  // );
}

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/" component={Index} />

            {/* <PrivateRoutes exact path="/teacher" component={TeacherProfile} /> */}
            {this.props.auth.isAuthenticated ? (
              <>
                <Route exact path="/createclass" component={CreateClass} />
                <section class="mainSection">
                  <Aside />
                  <Route exact path="/teacher" component={TeacherProfile} />
                  <Route exact path="/classrooms/:id" component={Classrooms} />
                </section>
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToprops = state => ({
  auth: state.auth
});

const mapDispathToPtops = dispatch => ({
  setUser: (data, token, decoded) =>
    dispatch(authActions.setCurrentUser(data, token, decoded)),
  logout: () => dispatch(authActions.logoutUser())
});

export default connect(
  mapStateToprops,
  mapDispathToPtops
)(App);
