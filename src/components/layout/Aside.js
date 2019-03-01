import React, { Component } from "react";
import axios from "axios";
import isEmpty from "../validate/idEmty";
import classnames from "classnames";
import { withRouter, NavLink } from "react-router-dom";
// import {} from 'react-redux'

class Aside extends Component {
  state = {
    classRooms: [],
    openSub: [],
    openClass: []
  };
  componentDidMount() {
    axios
      .get("classrooms")
      .then(res => {
        console.log(res.data);
        this.setState({
          classRooms: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  openSubject = subID => {
    let prevArr = [...this.state.openSub];
    if (prevArr.indexOf(subID) === -1) {
      prevArr.push(subID);
    } else {
      prevArr = prevArr.filter(el => el != subID);
    }
    this.setState({
      openSub: prevArr
    });
  };
  openClass = (openClass, e) => {
    e.stopPropagation();
    let prevArr = [...this.state.openClass];
    if (prevArr.indexOf(openClass) === -1) {
      prevArr.push(openClass);
    } else {
      prevArr = prevArr.filter(el => el != openClass);
    }
    this.setState({
      openClass: prevArr
    });
  };
  featchClass = (classId, e) => {
    e.stopPropagation();
    alert(classId);
    // this.props.history.push("/classrooms/" + classId);
  };
  render() {
    let clssList = this.state.classRooms.classrooms;
    let numeric = [
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IIX",
      "IX",
      "X",
      "XI",
      "XII"
    ];
    let renderSide = () => {
      let element;
      if (clssList) {
        element = Object.keys(clssList).map((sub, index) => {
          console.log(clssList[sub], "test");
          if (!isEmpty(clssList[sub])) {
            return (
              <div
                onClick={() => this.openSubject(sub)}
                class={classnames("subjectTitles fontNeue closed", {
                  open: this.state.openSub.indexOf(sub) != -1
                })}
              >
                <span class="subTitle">
                  <div>
                    <img
                      alt="alt"
                      class="mr-1"
                      src={`/images/${
                        sub == 1
                          ? "Math.svg"
                          : sub == 2
                          ? "English.svg"
                          : sub == 3
                          ? "Georgian.svg"
                          : null
                      }`}
                    />{" "}
                    {sub == 1
                      ? "მათემატიკა"
                      : sub == 2
                      ? "ინგლისური"
                      : sub == 3
                      ? "ქართული"
                      : null}
                  </div>{" "}
                  <img alt="alt" src="/images/Down_Arror.svg" />
                </span>
                <ul class="classes">
                  {Object.keys(clssList[sub]).map((classNum, inde) => {
                    return (
                      <li
                        onClick={e => this.openClass(classNum + sub, e)}
                        class={classnames("t", {
                          open:
                            this.state.openClass.indexOf(classNum + sub) != -1
                        })}
                      >
                        <span
                          class=" classesTitle d-flex align-items-center"
                          href="#"
                        >
                          <div class="d-flex">
                            {" "}
                            <div class="clssesTitle">
                              {" "}
                              {numeric[inde]}{" "}
                            </div>{" "}
                            კლასი{" "}
                          </div>{" "}
                          <img alt="alt" src="/images/Down_Arror.svg" />{" "}
                        </span>
                        <ul class="class_Title">
                          {Object.keys(clssList[sub][classNum]).map(
                            (className, i) => {
                              return (
                                <li
                                  onClick={e =>
                                    this.featchClass(
                                      clssList[sub][classNum][i]["id"],
                                      e
                                    )
                                  }
                                >
                                  {" "}
                                  <NavLink
                                    to={
                                      "/classrooms/" +
                                      clssList[sub][classNum][i]["id"]
                                    }
                                  >
                                    {" "}
                                    {clssList[sub][classNum][i]["name"]}{" "}
                                  </NavLink>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
        });
      }
      return element;
    };
    renderSide();
    return (
      <>
        <div class="xxx"> </div>
        <aside class="asideFileter mainBg">{renderSide()}</aside>
      </>
    );
  }
}

export default withRouter(Aside);
