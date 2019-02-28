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
    let name = this.state.classRoom.classRooms
      ? this.state.classRoom.classRooms.name
      : null;
    return (
      <div className="teacherProfile ">
        <div className="clssroomsConainrt">
          <div className="roomsheader d-flex">
            <div className="clssname">{this.props.match.params.id}</div>
            <div className="subjectName">subname</div>
            <div>subId</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Classrooms);
