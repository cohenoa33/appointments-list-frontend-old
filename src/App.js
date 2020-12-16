import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";

import api from "./services/api";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Appointments from "./components/Appointments";

class App extends React.Component {
  handleLoginSubmit = (e, user) => {
    e.preventDefault();
    api.auth
      .login(user)
      .then((json) => {
        if (!json.error) {
          this.handleAuthResponse(json);
        } else {
          alert("Wrong Username or Password");
        }
      })
      .catch((err) => console.log(err));
  };

  handleSignUpSubmit = (e, user) => {
    e.preventDefault();
    api.auth.signup(user).then((data) => {
      if (!data.error) {
        this.handleAuthResponse(data);
      } else {
        alert(data.error);
      }
    });
  };
  componentDidMount() {
    if (localStorage.token) {
      api.auth.reauth().then((data) => {
        if (!data.error) {
          this.props.setLogin(data);
        } else {
          alert("Please Login");
        }
      });
    }
  }

  handleAuthResponse = (data) => {
    if (data.user) {
      localStorage.token = data.jwt;
      console.log("Hello im In");
    } else {
      alert("Something Went Wrong....");
    }
  };

  handleLogout = () => {
    localStorage.removeItem("token");
  };

  renderLogin = () => <Login handleLoginSubmit={this.handleLoginSubmit} />;
  renderSignup = () => <Signup handleSignUpSubmit={this.handleSignUpSubmit} />;
  renderHome = () => <Appointments />;

  render() {
    return (
      <div>
        {this.renderLogin()}
        {this.renderSignup()}
        <button onClick={this.handleLogout}>Logout</button>

        <Switch>
          <Route path="/home" component={this.renderHome()} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // setLogin: (user) => dispatch(setLogin(user)),
    // setLogout: () => dispatch(setLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
