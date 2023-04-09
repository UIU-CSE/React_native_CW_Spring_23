import axios from "axios";

export const getUser = () => {
  return axios.get("http://10.10.201.134:3000/user");
};
