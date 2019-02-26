import React, { Component } from "react";

class Aside extends Component {
  render() {
    return (
      <>
        <div class="xxx"> </div>
        <aside class="asideFileter mainBg">
          <div class="subjectTitles fontNeue">
            <span class="subTitle">
              <div>
                <img alt="alt" class="mr-1" src="./images/Georgian.svg" />{" "}
                ქართული{" "}
              </div>{" "}
              <img alt="alt" src="./images/Down_Arror.svg" />
            </span>
          </div>
          <div class="subjectTitles fontNeue">
            <span class="subTitle">
              <div>
                <img alt="alt" class="mr-1" src="./images/Georgian.svg" />{" "}
                ქართული{" "}
              </div>{" "}
              <img alt="alt" src="./images/Down_Arror.svg" />
            </span>
            <ul class="classes">
              <li class="">
                <span class=" classesTitle d-flex align-items-center" href="#">
                  <div class="d-flex">
                    {" "}
                    <div class="clssesTitle"> I </div> კლასი{" "}
                  </div>{" "}
                  <img alt="alt" src="./images/Down_Arror.svg" />{" "}
                </span>
              </li>
              <li class="">
                <span class=" classesTitle d-flex align-items-center" href="#">
                  <div class="d-flex">
                    {" "}
                    <div class="clssesTitle"> II </div> კლასი{" "}
                  </div>{" "}
                  <img alt="alt" src="./images/Down_Arror.svg" />{" "}
                </span>
              </li>
              <li class="">
                <span class=" classesTitle d-flex align-items-center" href="#">
                  <div class="d-flex">
                    {" "}
                    <div class="clssesTitle"> III </div> კლასი{" "}
                  </div>{" "}
                  <img alt="alt" src="./images/Down_Arror.svg" />{" "}
                </span>
              </li>
              <li class="">
                <span class=" classesTitle d-flex align-items-center" href="#">
                  <div class="d-flex">
                    {" "}
                    <div class="clssesTitle"> IV </div> კლასი{" "}
                  </div>{" "}
                  <img alt="alt" src="./images/Down_Arror.svg" />{" "}
                </span>
              </li>
            </ul>
          </div>
          <div class="subjectTitles open fontNeue">
            <span class="subTitle">
              <div>
                <img alt="alt" class="mr-1" src="./images/Georgian.svg" />{" "}
                ქართული{" "}
              </div>{" "}
              <img alt="alt" src="./images/Down_Arror.svg" />
            </span>
            <ul class="classes">
              <li class="">
                <span class=" classesTitle d-flex align-items-center" href="#">
                  <div class="d-flex">
                    {" "}
                    <div class="clssesTitle"> I </div> კლასი{" "}
                  </div>{" "}
                  <img alt="alt" src="./images/Down_Arror.svg" />{" "}
                </span>
              </li>
              <li class="">
                <span class=" classesTitle d-flex align-items-center" href="#">
                  <div class="d-flex">
                    {" "}
                    <div class="clssesTitle"> II </div> კლასი{" "}
                  </div>{" "}
                  <img alt="alt" src="./images/Down_Arror.svg" />{" "}
                </span>
              </li>
              <li class="open">
                <span class=" classesTitle d-flex align-items-center" href="#">
                  <div class="d-flex">
                    {" "}
                    <div class="clssesTitle"> III </div> კლასი{" "}
                  </div>{" "}
                  <img alt="alt" src="./images/Down_Arror.svg" />{" "}
                </span>
                <ul class="class_Title">
                  <li> კლასის სახელი </li>
                  <li> კლასის სახელი </li>
                  <li> კლასის სახელი </li>
                </ul>
              </li>
              <li class="">
                <span class=" classesTitle d-flex align-items-center" href="#">
                  <div class="d-flex">
                    {" "}
                    <div class="clssesTitle"> IV </div> კლასი{" "}
                  </div>{" "}
                  <img alt="alt" src="./images/Down_Arror.svg" />{" "}
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </>
    );
  }
}

export default Aside;
