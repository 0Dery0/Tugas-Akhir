import React from "react";
import "../../assets/styles/Button.css";
import { FiPhone } from "react-icons/fi";
import Swal from "sweetalert2";
import "../../assets/styles/warnaTransaksi.css";
import { numberFormater } from "../../components/numberFormater";
import { NavLink } from "react-router-dom";

const ItemRiwayatTransaksi = ({ data, index }) => {
  const warna = () => {
    if (data.status == "Success") {
      return "sukses";
    } else if (data.status == "Pending") {
      return "pending";
    } else if (data.status == "Gagal") {
      return "gagal";
    }
  };
  return (
    <tr
      style={
        index % 2 === 0
          ? { backgroundColor: "#F5F6F7" }
          : { backgroundColor: "#FEF0CD" }
      }
    >
      <td className="col-2 text-center">{data.created_date}</td>

      <td className="col-1">
        {data.transaction_detail?.email}
        <br />
        <div style={{ color: "#8C8C8C" }}>
          <FiPhone
            style={{
              fontSize: "16px",
              marginRight: "5px",
              marginBottom: "4px",
            }}
          />
          {data.transaction_detail?.number}
        </div>
      </td>
      <td className="col-2 text-center">{data.user?.name}</td>
      <td className="col-1">{data.type}</td>
      <td className="col-1">{data.method}</td>
      <td className="col-1">{numberFormater(data.amount)}</td>
      <td className="col-1">
        <p className={warna()}>{data.status}</p>
      </td>
      <td className="col-1">
      <NavLink
          to={`/kelolatransaksi/detail/${data.id}`}
          key={data.id}
          className="bi bi-file-earmark-text file-button"
        ></NavLink>
      </td>
    </tr>
  );
};

export default ItemRiwayatTransaksi;
