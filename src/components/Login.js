import React, { useState } from "react";
import { Button } from "reactstrap";

function Login({ handleLoginSubmit, toggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = { email: email.toLowerCase(), password: password };
    handleLoginSubmit(user);
  };

  return (
    <div className="login-100">
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="login"
            autoComplete="on"
            onChange={handleChange}
            type="text"
            value={email}
            name="email"
            placeholder="Email"
          ></input>
          <br />
          <input
            className="login"
            onChange={handleChange}
            type="password"
            value={password}
            name="password"
            placeholder="Password"
          ></input>
          <br />
          <br />
          <Button type="submit" color="primary" size="lg" block>
            Sign In
          </Button>
        </form>
        <br />
        Don't have an account?
        <br />
        <a className="login-signup" onClick={toggle}>
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Login;
