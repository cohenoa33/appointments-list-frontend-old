import React from "react";
import { Link } from "react-router-dom";

export default class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    password_confirmation: "",
  };

  handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "username") {
      value = e.target.value;
    }
    this.setState({ [e.target.name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.handleSignUpSubmit(e, this.state)}>
          <input
            type="text"
            onChange={this.handleChange}
            name="email"
            placeholder="Email"
            value={this.state.email}
          />
          <input
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            placeholder="Password"
          ></input>
          <input
            type="password"
            onChange={this.handleChange}
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
          />
          <br />
          <button className="btn">Create an Account</button>
        </form>
      </div>
    );
  }
}
