import axios from "axios";

export function baseAxiosInstance() {
  return axios.create({
    baseURL: "https://b-mock-qz.vercel.app/api",
  });
}
