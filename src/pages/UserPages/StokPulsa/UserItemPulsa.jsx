import { MotionConfig } from "framer-motion";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { deletePulsa } from "../../../api/deletePulsa";
import "../../../assets/styles/button.css";
import { numberFormater } from "../../../components/numberFormater";

const UserItemPulsa = ({ setReload, data, index }) => {
  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePulsa(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted!",
          icon: "success",
        }).then(function () {
          setReload();
        });
      }
    });
  };
  return (
    <tr
      style={
        index % 2 === 0
          ? { backgroundColor: "white" }
          : { backgroundColor: "#FEF0CD" }
      }
    >
      <td className="col-1 text-start m-1">{data.provider}</td>
      <td className="col-1  m-1">{data.name}</td>
      <td className="col-1 m-1">{data.stock}</td>
      <td className="col-1 m-1">{numberFormater(data.reward_points)}</td>
      <td className="col-1 m-1">{numberFormater(data.price)}</td>
      <td className="col-1 m-1">
        <div className="d-flex flex-row justify-content-center">
          <motion.div
            whileHover={{ scale: 1.1, originX: 0 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink
              to={`/produk/detailproduk/pulsa/${data.id}`}
              key={data.id}
              className="bi bi-file-earmark-text file-button"
            ></NavLink>
          </motion.div>
          {/* <motion.div
            whileHover={{ scale: 1.1, originX: 0 }}
            whileTap={{ scale: 0.9 }}
          >
            <i
              className="bi bi-trash3 ms-3 delete-button"
              onClick={() => deleteItem(data.id)}
            ></i>
          </motion.div> */}
        </div>
      </td>
    </tr>
  );
};

export default UserItemPulsa;
