import "es6-promise";
import "isomorphic-fetch";

const postNewSite = payload => {
  const data = new FormData();
  data.append("json", JSON.stringify(payload));

  return fetch("/sites/new", {
    method: "post",
    body: data
  }).then(res => res.json());
};
