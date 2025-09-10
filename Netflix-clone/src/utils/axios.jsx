import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// imports the axios library, which is a popular HTTP client for making API requests in JavaScrip
// An instance is a customized version of axios with predefined configuration that will be applied to all requests made with this instance.
