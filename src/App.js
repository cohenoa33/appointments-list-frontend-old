import React from "react";

import "./App.css";

import api from "./services/api";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Appointments from "./components/Appointments";

class App extends React.Component {
  state = {
    user: {},
    jwt: "",
    isUser: false,
    appointments: [],
  };
  componentDidMount() {
    if (localStorage.token) {
      api.auth.reauth().then((data) => {
        if (!data.error) {
          this.setLogin(data);
        } else {
          alert(data.error);
        }
      });
    }
  }

  setLogin = (data) => {
    this.setState({
      user: data.user.user,
      jwt: data.user.jwt,
      isUser: true,
      appointments: data.user.appointments,
    });
  };

  setLogout = () => {
    this.setState({ user: {}, jwt: "", isUser: false, appointments: [] });
  };

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
      this.setLogin(data);
    } else {
      alert(data);
    }
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setLogout();
  };

  renderLogin = () => <Login handleLoginSubmit={this.handleLoginSubmit} />;
  renderSignup = () => <Signup handleSignUpSubmit={this.handleSignUpSubmit} />;
  renderHome = () => (
    <Appointments
      appointments={this.state.appointments}
      deleteAppointment={this.handleDeleteAppointment}
      updateAppointment={this.handleUpdateAppointment}
    />
  );

  handleDeleteAppointment = (appointmentId) => {
    // delete app on backend, remove from state
  };
  handleUpdateAppointment = (appointment) => {
    // Update app on backend, update  state
  };
  render() {
    return (
      <div>
        {!this.state.isUser ? (
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
// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//     isUser: state.isUser,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setLogin: (user) => dispatch(setLogin(user)),
//     setLogout: () => dispatch(setLogout()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
