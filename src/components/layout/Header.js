import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "../redux/actions/authActions";
import { withRouter } from "react-router-dom";
import { stat } from "fs";

class Header extends Component {
  logOut = e => {
    e.preventDefault();
    this.props.logOut();
  };

  getProfile = () => {
    if (this.props.user.user.teacher) {
      this.props.history.push("/teacher");
    }
  };

  render() {
    return (
      <header className="header d-flex px-4 fixed-top  justify-content-between align-content-center">
        <a href="#" className=" align-self-center">
          <img src="./images/shcoolLogo.png" alt="" />
        </a>
        <div className="right_Side d-flex align-self-center text-white">
          {this.props.user.isAuthenticated ? (
            <>
              <div
                onClick={this.getProfile}
                className="name   mr-5 align-self-center"
              >
                {this.props.user.user.teacher
                  ? `${this.props.user.user.teacher.name} ${
                      this.props.user.user.teacher.second_name
                    }`
                  : null}{" "}
              </div>
              <a onClick={this.logOut} href="#">
                {" "}
                <img src="./images/Log_Out.svg" />{" "}
              </a>
            </>
          ) : null}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(authActions.logoutUser())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
