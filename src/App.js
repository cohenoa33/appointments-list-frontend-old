import React from "react";
import "./App.css";
import api from "./services/api";

import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import Appointments from "./components/Appointments";
import AppointmentForm from "./components/AppointmentForm";
import { Alert, Container } from "reactstrap";

class App extends React.Component {
  state = {
    toggle: false,
    user: {},
    jwt: "",
    isUser: false,
    appointments: [],
    isUpdate: false,
    isNew: false,
  };
  componentDidMount() {
    if (localStorage.token) {
      api.auth.reauth().then((data) => {
        if (!data.error) {
          this.setLogin(data);
        } else {
          return <Alert color="primary"> {data.error}</Alert>;
        }
      });
    }
  }
  setToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  setLogin = (data) => {
    this.setState({
      user: data.user,
      jwt: data.jwt,
      isUser: true,
      appointments: data.user.appointments,
    });
  };

  setLogout = () => {
    this.setState({ user: {}, jwt: "", isUser: false, appointments: [] });
  };

  handleLoginSubmit = (user) => {
    api.auth
      .login(user)
      .then((data) => {
        if (!data.error) {
          this.handleAuthResponse(data);
        } else {
          alert(data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  handleSignUpSubmit = (user) => {
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

  AddAppointment = (appointment) => {
    api.appointment.add(appointment).then((data) => {
      if (!data.error) {
        this.setState({
          ...this.state,
          appointments: [...this.state.appointments, data],
        });
      } else {
        alert(data.error);
      }
    });
  };

  renderLogin = () => (
    <Login handleLoginSubmit={this.handleLoginSubmit} toggle={this.setToggle} />
  );
  renderSignup = () => (
    <Signup
      handleSignUpSubmit={this.handleSignUpSubmit}
      toggle={this.setToggle}
    />
  );
  renderAppointmentForm = (id) => (
    <AppointmentForm
      addAppointment={this.AddAppointment}
      buttonLabel={"Add New Appointment"}
      className={"Modal"}
      user_id={id}
    />
  );
  renderHome = () => {
    return (
      <>
        <Appointments
          appointments={this.state.appointments}
          deleteAppointment={this.handleDeleteAppointment}
          updateAppointment={this.handleUpdateAppointment}
        />
      </>
    );
  };

  handleUpdateAppointment = (appointment) => {
    this.setState({ isUpdate: true });

    api.appointment.update(appointment).then((data) => {
      if (!data.error) {
        this.updateAppointmentList(appointment.id, "update", appointment);
      }
    });
  };

  handleDeleteAppointment = (id) => {
    api.appointment.delete(id).then((data) => {
      if (!data.error) {
        this.updateAppointmentList(id, "delete");
      }
    });
  };

  updateAppointmentList = (id, action, appointment) => {
    let newList = this.state.appointments.filter((a) => a.id !== id);
    if (action === "delete") {
      this.setState({ appointments: newList });
    } else {
      newList.push(appointment);
      this.setState({ appointments: newList });
    }
  };

  render() {
    const { toggle, isUser } = this.state;
    return (
      <Container>
        {!isUser ? (
          <>
            <div className="col-50">
              {toggle ? this.renderSignup() : this.renderLogin()}
            </div>
          </>
        ) : (
          <>
            <NavBar
              user={this.state.user}
              logout={this.handleLogout}
              addAppointment={this.AddAppointment}
            />
            <div className="hidden"></div>
            {this.renderHome()}
          </>
        )}
      </Container>
    );
  }
}

export default App;
