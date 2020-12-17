import React from "react";
import { connect } from "react-redux";
import "./App.css";

import { setLogin, setLogout } from "./actions";
import api from "./services/api";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Appointments from "./components/Appointments";

class App extends React.Component {
  componentDidMount() {
    if (localStorage.token) {
      api.auth.reauth().then((data) => {
        if (!data.error) {
          this.props.setLogin(data);
        } else {
          alert(data.error);
        }
      });
    }
  }
  handleLoginSubmit = (e, user) => {
    e.preventDefault();
    api.auth
      .login(user)
      .then((json) => {
        if (!json.error) {
          this.handleAuthResponse(json);
        } else {
          alert(json.error);
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

  handleAuthResponse = (data) => {
    if (data.user) {
      localStorage.token = data.jwt;
      this.props.setLogin(data);
    } else {
      alert(data);
    }
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.setLogout();
  };

  renderLogin = () => <Login handleLoginSubmit={this.handleLoginSubmit} />;
  renderSignup = () => <Signup handleSignUpSubmit={this.handleSignUpSubmit} />;
  renderHome = () => <Appointments />;

  render() {
    return (
      <div>
        {!this.props.isUser ? (
          <>
            {this.renderLogin()}
            {this.renderSignup()}
          </>
        ) : (
          <>
            <button onClick={this.handleLogout}>Logout</button>
            {this.renderHome()}
          </>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    isUser: state.isUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (user) => dispatch(setLogin(user)),
    setLogout: () => dispatch(setLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
