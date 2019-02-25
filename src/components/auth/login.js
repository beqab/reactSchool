import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import * as AuthActions from "../redux/actions/authActions";

class Login extends Component {
  state = {
    code: "",
    password: ""
  };

  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const data = {
      email: this.state.code,
      password: this.state.password
    };

    this.props.loginAction(data);
  };
  render() {
    return (
      <div className="formGroup login">
        <form onSubmit={this.onSubmit}>
          <div className="fotm_title"> შესვლა </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="კოდი"
              name="code"
              onChange={this.onchange}
            />
            <img className="code" src="./images/Code.svg" />
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="პაროლი"
              name="password"
              onChange={this.onchange}
            />
            <img className="pass" src="./images/Password.svg" />
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <button className="schollBtn text-white w-100">შესვლა</button>
          <div className="text-right">
            <Link className="formLink" to="/register">
              {" "}
              რეგისტრაცია{" "}
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginAction: data => dispatch(AuthActions.loginUser(data))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
