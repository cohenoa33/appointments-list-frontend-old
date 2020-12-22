import React from "react";
import "./App.css";
import api from "./services/api";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Appointments from "./components/Appointments";
import AppointmentForm from "./components/AppointmentForm";
import { Button, Alert, Container } from "reactstrap";

class App extends React.Component {
  state = {
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
    // debugger;
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

  renderLogin = () => <Login handleLoginSubmit={this.handleLoginSubmit} />;
  renderSignup = () => <Signup handleSignUpSubmit={this.handleSignUpSubmit} />;
  renderAppointmentForm = (id) => (
    <AppointmentForm
      addAppointment={this.AddAppointment}
      buttonLabel={"Add New Appointment"}
      className={"Modal"}
      user_id={id}
    />
  );
  renderHome = () => (
    <Appointments
      appointments={this.state.appointments}
      deleteAppointment={this.handleDeleteAppointment}
      updateAppointment={this.handleUpdateAppointment}
    />
  );

  handleUpdateAppointment = (appointment) => {
    this.setState({ isUpdate: true });
    // api.appointment.update(appointment)
    //if (!date.error) {
    // this.updateAppointmentList(appointment.id, "update", appointment)
    // }
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
    return (
      <Container>
        {!this.state.isUser ? (
          <>
            {this.renderLogin()}
            {this.renderSignup()}
          </>
        ) : (
          <>
            <Button onClick={this.handleLogout}>Logout</Button>
            {this.state.isUser
              ? this.renderAppointmentForm(this.state.user.id)
              : null}
            {this.renderHome()}
          </>
        )}
      </Container>
    );
  }
}

export default App;
