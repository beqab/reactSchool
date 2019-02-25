import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
