import { axios } from "../configs/axios";

export function getTransactions(id) {
  return axios.get("/transactions" + id);
}