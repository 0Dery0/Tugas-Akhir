import { axios } from "../configs/axios";

export function addTransactions(data) {
  return axios.post("/transactions", data);
}