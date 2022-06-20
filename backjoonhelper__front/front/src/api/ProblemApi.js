import axios from "axios";

const accessToken = localStorage.getItem("ACCESS_TOKEN");
const ProblemApi = axios.create({
  baseURL: `http://localhost:8080`,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: "Bearer " + accessToken,
  },
});

export default ProblemApi;
