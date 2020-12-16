import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "email") {
      value = e.target.value;
    }
    this.setState({ [e.target.name]: value });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
            <input
              autoComplete="on"
              onChange={this.handleChange}
              type="text"
              value={this.state.email}
              name="email"
              placeholder="email"
            ></input>
            <input
              onChange={this.handleChange}
              type="password"
              value={this.state.password}
              name="password"
              placeholder="Password"
            ></input>
            <br />
            <button className="btn">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
