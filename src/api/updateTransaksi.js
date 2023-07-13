import { axios } from "../configs/axios";

export function updateTransaksi(id, data) {
  return axios.put("/transactions/" + id, data);
}