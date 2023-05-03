import axios from "axios";

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

let apiUrl;

const apiUrls = {
  production: "https://digimon-api.herokuapp.com",
  development: "http://127.0.0.1:3000/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

axios('https://digimon-api.herokuapp.com/').interceptors.request.use(async function (config) {
  config.headers['Authorization'] = await getToken()
  return config
}, function (error) {
  console.log('Request error: ', error)
  return Promise.reject(error)
});

export default api;