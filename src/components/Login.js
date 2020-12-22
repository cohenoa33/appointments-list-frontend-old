import React, { useState } from "react";

function Login({ handleLoginSubmit }) {
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
    let user = { email: email, password: password };
    handleLoginSubmit(user);
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            autoComplete="on"
            onChange={handleChange}
            type="text"
            value={email}
            name="email"
            placeholder="email"
          ></input>
          <input
            onChange={handleChange}
            type="password"
            value={password}
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

export default Login;
