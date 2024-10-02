import { useLocation } from "react-router-dom";
// export const localEndpoint = "http://localhost:45459";
export const localEndpoint = "https://galaxybis.ebudgetkano.ng/test/blog";
export const apiURL = localEndpoint;
export const TOKEN_KEY = "@@app_token";

const _postApi = (url, data = {}, success = (f) => f, error = (f) => f) => {
  // let token = localStorage.getItem(TOKEN_KEY);
  fetch(apiURL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((response) => {
      // console.log({ response });
      // alert(token);
      if (response.status >= 400) {
        error(response);
        if (response.status === 401) {
          window.location = "";
        }
      } else success(response);
    })
    .catch((err) => error(err));
};

const _updateApi = (url, data = {}, success = (f) => f, error = (f) => f) => {
  // let token = localStorage.getItem(TOKEN_KEY);
  fetch(apiURL + url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((response) => {
      // console.log({ response });
      if (response.status >= 400) {
        error(response);
        if (response.status === 401) {
          window.location = "";
        }
      } else success(response);
    })
    .catch((err) => error(err));
};

const _fetchApi = (
  url,
  // body={},
  success = (f) => f,
  error = (f) => f,
  empty = (f) => f
) => {
  // let token = localStorage.getItem(TOKEN_KEY);
  // console.log(token, "RRRRRR");
  fetch(apiURL + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // authorization: "Bearer " + token,
    },
    // body:JSON.stringify(body)
  })
    .then((raw) => raw.json())
    .then((response) => {
      if (response) {
        success(response);
      } else {
        console.log("Empty response");
        // alert(token);
        empty();
      }
    })
    .catch((err) => {
      if (err.status === 401) {
        // logout();
        localStorage.removeItem(TOKEN_KEY);
        window.location = "";
      }
      error(err);
    });
};

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export { _postApi, _fetchApi, _updateApi };
