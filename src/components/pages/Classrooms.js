import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

export class Classrooms extends Component {
  state = {
    classRoom: []
  };

  componentDidMount() {
    axios
      .get("classrooms/" + this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        this.setState({
          classRoom: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentWillReceiveProps(props) {
    axios
      .get("classrooms/" + props.match.params.id)
      .then(res => {
        console.log(res.data);
        this.setState({
          classRoom: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let name = this.state.classRoom.classRoom
      ? this.state.classRoom.classRoom.name
      : null;
    let subj = this.state.classRoom.classRoom
      ? this.state.classRoom.classRoom.subject_id
      : null;
    if (subj == 1) {
      subj = "მათემატიკა";
    } else if (subj == 2) {
      subj = "ინგლისური";
    } else if (subj == 3) {
      subj = "ქართული";
    }
    let classId = this.state.classRoom.classRoom
      ? this.state.classRoom.classRoom.id
      : null;
    console.log(
      name,
      this.state.classRoom.classRoom
        ? this.state.classRoom.classRoom.name
        : "nnn",
      "this.state.classRoom.classRooms"
    );
    return (
      <div className="teacherProfile ">
        <div className="clssroomsConainrt">
          <div className="roomsheader d-flex">
            <div className="clssname">{name}</div>
            <div className="subjectName">{subj}</div>
            <div>{classId}</div>
          </div>
          <div className="student_line">
            <div className="chrtLine">
              <div>
                {" "}
                <img src="" />
                სახელი გვარო{" "}
              </div>{" "}
              <img src="/" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Classrooms);
