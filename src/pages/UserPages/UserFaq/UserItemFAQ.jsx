import { useState } from "react";
import Swal from "sweetalert2";
import { deleteFaq } from "../../../api/deleteFaq";
import "../../../assets/styles/button.css";

const UserItemFAQ = ({ setReload, data, index, toggle, sentData }) => {
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
        deleteFaq(id);
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
  const editItem = (data) => {
    sentData(data);
    toggle();
  };
  return (
    <>
      <tr
        style={
          index % 2 == 0
            ? { backgroundColor: "#ececee" }
            : { backgroundColor: "#FEF0CD" }
        }
      >
        <td className="col-1 text-start">{data?.question}</td>
        <td className="col-1 text-start ps-5">{data?.answer}</td>
        <td className="col-1">{data?.category}</td>
        {/* <td className="col-1">
          <i
            className="bi bi-file-earmark-text file-button"
            onClick={() => editItem(data)}
          ></i>
          <i
            className="bi bi-trash3 ms-3 delete-button"
            onClick={() => deleteItem(data.id)}
          ></i>
        </td> */}
      </tr>
    </>
  );
};

export default UserItemFAQ;
