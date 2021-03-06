import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { connect } from "react-redux";
import { stat } from "fs";
import * as authActions from "../redux/actions/authActions";

class Register extends Component {
  state = {
    // openSlect: false,
    name: "",
    email: "",
    phone: "",
    second_name: "",
    password: "",
    password_confirmation: "",
    errors: []
  };
  toggleSelct = type => {
    if (type == "toggle") {
      this.setState(prev => ({
        openSlect: !prev.openSlect
      }));
    }
  };
  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let data = {
      name: this.state.name,
      second_name: this.state.second_name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    };
    // alert("alert");
    axios
      .post("auth/register", data)
      .then(res => {
        this.setState({
          errors: []
        });
        console.log(res.data);
        localStorage.setItem("jwtToken", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data));
        setAuthToken(res.data.token);
        let decode = jwt_decode(res.data.token);
        console.log(decode);
        this.props.featchUser(res.data, res.data.token, decode);
        // this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          errors: err.response.data.errors
        });
      });
  };
  componentDidMount() {
    if (this.props.user.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(props) {
    if (props.user.isAuthenticated) {
      this.props.history.push("/createclass");
    }
  }
  render() {
    return (
      <div className="formGroup register">
        <form onSubmit={this.onSubmit}>
          <div className="fotm_title"> რეგისტრაცია </div>
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control ", {
                "is-invalid": this.state.errors.name
              })}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="სახელი"
              name="name"
              onChange={this.onchange}
              value={this.state.name}
            />
            <img alt="alt" height="50px" src="/images/Name.svg" />
            <div className="invalid-feedback">
              {this.state.errors.name
                ? this.state.errors.name[0].replace("name", "სახელი")
                : null}
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control ", {
                "is-invalid": this.state.errors.second_name
              })}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="გვარი"
              name="second_name"
              onChange={this.onchange}
              value={this.state.second_name}
            />
            <img alt="alt" height="50px" src="/images/Name.svg" />
            <div className="invalid-feedback">
              {this.state.errors.second_name
                ? this.state.errors.second_name[0].replace(
                    "second name",
                    "გვარი"
                  )
                : null}
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control ", {
                "is-invalid": this.state.errors.phone
              })}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="მობილური"
              name="phone"
              onChange={this.onchange}
              value={this.state.phone}
            />
            <img alt="alt" height="50px" src="/images/Name.svg" />
            <div className="invalid-feedback">
              {this.state.errors.phone
                ? this.state.errors.phone[0].replace("phone", "მობილური")
                : null}
            </div>
          </div>

          {/* <div className="form-group">
            <div
              onClick={() => this.toggleSelct("toggle")}
              className="form-control selectSubj_"
            >
              {" "}
              {this.state.math ? " მათემატიკა " : null}{" "}
              {this.state.geo ? "ქართული" : null}{" "}
              {this.state.eng ? "ინგლისური" : null}
              {this.state.math || this.state.geo || this.state.eng
                ? null
                : "საგანი"}
            </div>
            <img alt="alt" className="arrow" src="/images/DownArrow.svg" />

            <div
              className={classnames("selectSubject d-flex flex-column ", {
                open: this.state.openSlect
              })}
            >
              <label>
                <input onChange={this.selevtSubj} type="checkbox" name="math" />{" "}
                მათემატიკა
              </label>
              <label>
                <input onChange={this.selevtSubj} type="checkbox" name="geo" />{" "}
                ქართული
              </label>
              <label>
                <input onChange={this.selevtSubj} type="checkbox" name="eng" />{" "}
                ინგლისური
              </label>
            </div>
          </div> */}

          <div className="form-group">
            <input
              type="email"
              className={classnames("form-control ", {
                "is-invalid": this.state.errors.email
              })}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="მეილი"
              name="email"
              onChange={this.onchange}
              value={this.state.email}
            />
            <img alt="alt" className="mail" src="/images/Mail.svg" />
            <div className="invalid-feedback">
              {this.state.errors.email
                ? this.state.errors.email[0].replace("email", "მეილი")
                : null}
            </div>
          </div>
          <div className="form-group">
            <input
              type="password"
              className={classnames("form-control ", {
                "is-invalid": this.state.errors.password
              })}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="პაროლი"
              name="password"
              onChange={this.onchange}
              value={this.state.password}
            />
            <img alt="alt" className="pass" src="/images/Password.svg" />
            <div className="invalid-feedback">
              {this.state.errors.password
                ? this.state.errors.password[0].replace("password", "პაროლი")
                : null}
            </div>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="გაიმეორეთ პაროლი"
              name="password_confirmation"
              onChange={this.onchange}
              value={this.state.password_confirmation}
            />
            <img alt="alt" className="pass" src="/images/Password.svg" />
            <div className="invalid-feedback" />
          </div>
          <button className="schollBtn text-white w-100">შესვლა</button>
          <div className="text-right">
            <Link className="formLink" to="/login">
              {" "}
              შესვლა{" "}
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

const mapDispatchToprops = dispatch => {
  return {
    featchUser: data => dispatch(authActions.setCurrentUser(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(Register);
