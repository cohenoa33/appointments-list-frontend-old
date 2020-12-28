import React, { useState } from "react";
import { Button } from "reactstrap";

function Signup({ handleSignUpSubmit, toggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "password_confirmation") {
      setPassword_confirmation(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    handleSignUpSubmit(user);
  };

  return (
    <div className="login-100">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="login"
          type="text"
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={email}
        />
        <br />
        <input
          className="login"
          type="password"
          onChange={handleChange}
          value={password}
          name="password"
          placeholder="Password"
        />

        <br />
        <input
          className="login"
          type="password"
          onChange={handleChange}
          name="password_confirmation"
          placeholder="Password Confirmation"
          value={password_confirmation}
        />
        <br />
        <br />
        <Button type="submit" color="primary">
          Create an Account
        </Button>
      </form>
      <br />
      <Button onClick={toggle} color="info" size="sm">
        Already have an account?
      </Button>
    </div>
  );
}

export default Signup;
