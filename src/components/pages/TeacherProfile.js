import React, { Component } from "react";
import Aside from "../layout/Aside";

export class TeacherProfile extends Component {
  render() {
    return (
      <>
        <Aside />
        <div className="teacherProfile">
          <div className="name mainColor fontCaps mb-4"> სახელი გვარი </div>
          <div className="ProileInfoBox fontCaps d-flex align-items-center justify-content-center mx-auto mainColor">
            {" "}
            სკოლა: 52{" "}
          </div>
          <div className="ProileInfoBox fontCaps d-flex align-items-center justify-content-center mx-auto mainColor">
            {" "}
            mail@gmail.com{" "}
          </div>
          <div className="viewGroup d-flex justify-content-around flex-wrap">
            <div className="box">
              <img alt="alt" src="./images/Book.svg" />
              <div className="title fontCaps mainColor">მათემატიკა</div>
            </div>
            <div className="box">
              <img alt="alt" src="./images/Classrooms.svg" />
              <div className="title fontCaps mainColor">10 კლასი</div>
            </div>
            <div className="box">
              <img alt="alt" src="./images/Students.svg" />
              <div className="title fontCaps mainColor">300 მოსწავლე</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TeacherProfile;
