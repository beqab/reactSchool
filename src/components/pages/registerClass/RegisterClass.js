import React, { Component } from "react";
import classnames from "classnames";
import * as validaror from "../../validate/regiterClass/registerClass";

export class RegisterClass extends Component {
  state = {
    step: 1,
    name: "",
    school_class_id: "",
    subject_id: "",
    school_id: "",
    errors: [],
    isValid: true,
    studentsList: [[{}]]
  };
  nextStep = type => {
    if (type === "next" && this.state.step < 3) {
      if (this.state.step == 1) {
        let formData = {
          name: this.state.name,
          school_class_id: this.state.school_class_id,
          subject_id: this.state.subject_id,
          school_id: this.state.school_id
        };
        const { errors, isValid } = validaror.stepOneValidation(formData);
        if (isValid) {
          this.setState(prevState => ({
            step: prevState.step + 1
          }));
        } else {
          this.setState({
            errors: errors
          });
        }
      }
      // alert("+");
    }
    if (type === "prev" && this.state.step > 1) {
      // alert("-");
      this.setState(prevState => ({
        step: prevState.step - 1
      }));
    }
  };

  onchange = e => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    let stepOne = (
      <div className="formGroup createClass">
        <form>
          <div className="fotm_title pb-3"> კლასის შექმნა </div>
          <div className="form-group">
            <input
              onChange={this.onchange}
              type="text"
              className={classnames("form-control ", {
                "is-invalid": this.state.errors.name
              })}
              id="exampleInputEmail1"
              placeholder="კლასის სახელი"
              name="name"
              value={this.state.name}
            />
            <div className="invalid-feedback">{this.state.errors.name}</div>
          </div>

          <div className="form-group">
            <select
              onChange={this.onchange}
              value={this.state.subject_id}
              className={classnames("form-control ", {
                "is-invalid": this.state.errors.subject_id
              })}
              name="subject_id"
            >
              <option value="0" selected="selected">
                საგანი
              </option>
              <option value="1">მათემატიკა</option>
              <option value="2">ინგლისური</option>
              <option value="3">ქართული</option>
            </select>

            {/* <img className="arrow" src="./images/DownArrow.svg" /> */}
            <div className="invalid-feedback">
              {this.state.errors.subject_id}
            </div>
          </div>
          <div className="form-group">
            <input
              onChange={this.onchange}
              type="number"
              className={classnames("form-control ", {
                "is-invalid": this.state.errors.school_class_id
              })}
              placeholder="კლასი"
              name="school_class_id"
              value={this.state.school_class_id}
            />
            <div className="invalid-feedback">
              {this.state.errors.school_class_id}
            </div>
          </div>
          <div className="form-group">
            <select
              onChange={this.onchange}
              value={this.state.school_id}
              className={classnames("form-control ", {
                "is-invalid": this.state.errors.school_id
              })}
              id="sel1"
              name="school_id"
            >
              <option value="0" selected="selected">
                სკოლა
              </option>
              <option value="1">პირველი სკოლა</option>
              <option value="2">მეორე სკოლა</option>
              <option value="3">მესამე სკოლა</option>
            </select>
            <div className="invalid-feedback">
              {this.state.errors.school_id}
            </div>
          </div>
        </form>
      </div>
    );
    let stepTwo = (
      <div className="formGroup createClassSecundStep ">
        <form>
          <div className="fotm_title pb-3"> კლასის შექმნა </div>
          <div className="container addStudentContainer">
            <img className="addStudentBrn" src="./images/AddStudent.svg" />
            <div className="row addStudent">
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control "
                    aria-describedby="emailHelp"
                    placeholder="სახელი გვარი"
                  />
                  <img className="" src="./images/NameStudent.svg" />
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control "
                    aria-describedby="emailHelp"
                    placeholder="ტელეფონი"
                  />
                  <img className="code" src="./images/Code.svg" />
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );

    let stepThree = (
      <div className="formGroup createClassThirdStep ">
        <form>
          <div className="fotm_title "> ჩამოტირთე ფაილი </div>
          <img src="./images/downloadfile.svg" />
        </form>
        <div className="formControlers justify-content-between  d-flex  mx-auto ">
          <div>
            <button className="schollBtn prev bg-white mainColor fontCaps">
              ნახვა
            </button>
          </div>
          <div>
            <button className="schollBtn next text-white"> ჩამოტვირთვა </button>
          </div>
        </div>
      </div>
    );
    return (
      <>
        <div className="formPagination">
          <ul
            className={classnames("firstStep", {
              secundStep: this.state.step >= 2,
              thirdStep: this.state.step == 3
            })}
          >
            <li>
              <i className="fas fa-check" /> <span>1</span>{" "}
            </li>
            <li>
              <i className="fas fa-check" /> <span>2</span>{" "}
            </li>
            <li>
              <i className="fas fa-check" /> <span>3</span>{" "}
            </li>
          </ul>
        </div>
        {this.state.step == 1
          ? stepTwo
          : this.state.step == 2
          ? stepTwo
          : this.state.step == 3
          ? stepTwo
          : null}

        <div className="formControlers justify-content-between  d-flex w-75 mx-auto ">
          <div>
            {this.state.step == 2 ? (
              <button
                onClick={() => this.nextStep("prev")}
                className="schollBtn prev bg-white mainColor fontCaps"
              >
                უკან
              </button>
            ) : null}
          </div>
          <div>
            {this.state.step < 3 ? (
              <button
                onClick={() => this.nextStep("next")}
                className="schollBtn next text-white"
              >
                {" "}
                შემდეგი{" "}
              </button>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default RegisterClass;
