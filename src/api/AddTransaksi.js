import { axios } from "../configs/axios";

export function addTransactions( ) {
  return axios.get("/transactions");
}