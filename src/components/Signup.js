import React, { useState } from "react";

function Signup({ handleSignUpSubmit }) {
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
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={email}
        />
        <input
          type="password"
          onChange={handleChange}
          value={password}
          name="password"
          placeholder="Password"
        ></input>
        <input
          type="password"
          onChange={handleChange}
          name="password_confirmation"
          placeholder="Password Confirmation"
          value={password_confirmation}
        />
        <br />
        <button className="btn" type="submit">
          Create an Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
