require("es6-promise");
require("isomorphic-fetch");

const API_URL = "localhost:5000";

const post = (route, payload, options = {}) => {
  const data = new FormData();
  data.append("json", JSON.stringify(payload));


  return fetch(API_URL + "/" + route, {
    method: "post",
    body: data,
    ...options
  }).then(res =>
    res.json()
  );
};

const postNewSite = payload => post("/deploy", payload);

const login = ({ username, password }) =>
  post("/token/auth", {
    username,
    password
  });

const register = ({
  username,
  email,
  password,
  first_name,
  middle_name,
  last_name
}) =>
  post("/register", {
    username,
    email,
    password,
    first_name,
    middle_name,
    last_name
  });

module.exports = {
  register, login
}