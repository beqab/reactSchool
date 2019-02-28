import React, { Component } from "react";
import Aside from "../layout/Aside";
import { connect } from "react-redux";
import axios from "axios";
import { Route } from "react-router-dom";

export class TeacherProfile extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="teacherProfile">
          <div className="name mainColor fontCaps mb-4">
            {" "}
            {this.props.auth.user.teacher.name}{" "}
            {this.props.auth.user.teacher.second_name}
          </div>
          <div className="ProileInfoBox fontCaps d-flex align-items-center justify-content-center mx-auto mainColor">
            {" "}
            სკოლა: 52{" "}
          </div>
          <div className="ProileInfoBox fontCaps d-flex align-items-center justify-content-center mx-auto mainColor">
            {this.props.auth.user.teacher.email}
          </div>
          <div className="viewGroup d-flex justify-content-around flex-wrap">
            <div className="box">
              <img alt="alt" src="/images/Book.svg" />
              <div className="title fontCaps mainColor">მათემატიკა</div>
            </div>
            <div className="box">
              <img alt="alt" src="/images/Classrooms.svg" />
              <div className="title fontCaps mainColor">10 კლასი</div>
            </div>
            <div className="box">
              <img alt="alt" src="/images/Students.svg" />
              <div className="title fontCaps mainColor">300 მოსწავლე</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(TeacherProfile);
