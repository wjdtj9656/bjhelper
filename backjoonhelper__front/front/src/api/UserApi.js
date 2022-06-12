import axios from "axios";

const UserApi = axios.create({
  baseURL: `http://localhost:8080`,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default UserApi;
