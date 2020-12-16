const API_ROOT = `http://localhost:3000`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearers ${token}`,
};

const login = (user) => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user }),
  }).then((res) => res.json());
};

const signup = (user) => {
  return fetch(`${API_ROOT}/users`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user }),
  }).then((res) => res.json());
};
const reauth = () => {
  return fetch(`${API_ROOT}/reauth`, {
    method: "GET",
    headers: headers,
  }).then((res) => res.json());
};

export default {
  auth: {
    login: login,
    signup: signup,
    reauth: reauth,
  },
};
