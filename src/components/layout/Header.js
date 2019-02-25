import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header d-flex px-4  justify-content-between align-content-center">
        <a href="#" className=" align-self-center">
          <img src="./images/shcoolLogo.png" alt="" />
        </a>
        <div className="right_Side d-flex align-self-center text-white">
          <div className="name mr-5 align-self-center"> სახელი გვარი </div>
          <a href="#">
            {" "}
            <img src="./images/Log_Out.svg" />{" "}
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
