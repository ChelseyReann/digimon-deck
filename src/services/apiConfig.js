import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "TBD",
  development: "http://127.0.0.1:3000",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
