import { axios } from "../configs/axios";

export function getProfileUsers() {
  return axios.get("/users/me");
}