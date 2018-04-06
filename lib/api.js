import "es6-promise";
import "isomorphic-fetch";

const post = (route, payload, options = {}) => {
  const data = new FormData();
  data.append("json", JSON.stringify(payload));

  return fetch(route, {
    method: "post",
    body: data,
    ...options
  }).then(res => res.json());
};

export const postNewSite = payload => post("/deploy", payload);

export const login = ({ username, password }) =>
  post("/token/auth", {
    username,
    password
  });

export const register = ({
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
