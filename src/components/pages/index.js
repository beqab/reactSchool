import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Index extends Component {
  componentDidMount() {
    //   console.log(this.props);
    //   if (!this.props.auth.isAuthenticated) {
    //     this.props.history.push("/login");
    //   } else if (this.props.auth.user.teacher) {
    //     setTimeout(() => {
    this.props.history.push("/teacher");
    // }, 1000);
    //   }
  }

  render() {
    return (
      <>
        {/* {!this.props.auth.isAuthenticated ? (
          <Redirect to="/login" />
        ) : this.props.auth.user.teacher ? (
          <Redirect to="/teacher" />
        ) : (
          <Redirect to="/login" />
        )} */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Index);
