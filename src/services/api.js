const API_ROOT = `http://localhost:3001`;

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

const deleteAppointment = (id) => {
  return fetch(`${API_ROOT}/appointments/${id}`, {
    method: "DELETE",
    headers: headers,
  }).then((res) => res.json());
};
const updateAppointment = (appointment) => {
  return fetch(`${API_ROOT}/appointments/${appointment.id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({ appointment }),
  }).then((res) => res.json());
};
const addAppointment = (appointment) => {
  return fetch(`${API_ROOT}/appointments`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ appointment }),
  }).then((res) => res.json());
};

let auth = {
  auth: {
    login: login,
    signup: signup,
    reauth: reauth,
  },
  appointment: {
    add: addAppointment,
    delete: deleteAppointment,
    update: updateAppointment,
  },
};

export default auth;
