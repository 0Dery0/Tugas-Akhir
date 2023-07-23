import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineCast } from "react-icons/md";
import { AiOutlineFileText, AiOutlineQuestionCircle } from "react-icons/ai";
import { CgUserList, CgSmileMouthOpen } from "react-icons/cg";
import "../sidebar/NewSidebar.css";
import { motion } from "framer-motion";

const NewSidebar = ({ list }) => {
  const [isOpen1, setIsOpen1] = useState(list == 1 ? true : false);
  const [isOpen3, setIsOpen3] = useState(list == 3 ? true : false);

  const sidebarMenu = [
    {
      route: "/dashboard",
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
    },
    {
      name: "Kelola Pengguna",
      icon: <CgUserList />,
      dropdown: [
        {
          route: "/kelolapengguna/admin",
          name: "Admin",
        },
        {
          route: "/kelolapengguna/pelanggan",
          name: "Pelanggan",
        },
      ],
    },
    {
      route: "/kelolatransaksi",
      name: "Kelola Transaksi",
      icon: <AiOutlineFileText />,
    },
    {
      name: "Kelola Stok",
      icon: <MdOutlineCast />,
      dropdown: [
        {
          route: "/kelolastok/pulsa",
          name: "Pulsa",
        },
        {
          route: "/kelolastok/paketdata",
          name: "Paket Data",
        },
      ],
    },
    {
      route: "/kelolafaq",
      name: "Kelola FAQ",
      icon: <AiOutlineQuestionCircle />,
    },
    {
      route: "/feedbackspage",
      name: "Feedback",
      icon:<CgSmileMouthOpen/>
    },
    
  ];

  const togglePopUp = (index) => {
    index == 1 ? setIsOpen1(!isOpen1) : setIsOpen3(!isOpen3);
  };

  const navNormal = (item, index) => {
    if (index == 1) {
      return (
        <>
          <a
            key={index}
            className={
              isOpen1 == true
                ? "list-menu d-flex flex-row active-drop"
                : "list-menu d-flex flex-row"
            }
            activeclassName="active"
            onClick={() => togglePopUp(index)}
          >
            <motion.div
              className="d-flex flex-row gap-2"
              whileHover={{ scale: 1.1, originX: 0 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="icon">{item.icon}</div>
              <div className="list-item">{item.name}</div>
            </motion.div>
          </a>
          <div className={isOpen1 == true ? " tampil" : " hilang"}>
            {item.dropdown.map((list) => (
              <NavLink
                to={list.route}
                className={
                  isOpen1 == true
                    ? "list-menu list-drop vision"
                    : "list-menu list-drop hides"
                }
                activeclassName="active"
              >
                <motion.div
                  whileHover={{ scale: 1.1, originX: 0 }}
                  whileTap={{ scale: 0.9 }}
                  className="list-item drop-item"
                >
                  {list.name}
                </motion.div>
              </NavLink>
            ))}
          </div>
        </>
      );
    } else if (index == 3) {
      return (
        <>
          <a
            key={index}
            className={
              isOpen3 == true
                ? "list-menu d-flex flex-row active-drop"
                : "list-menu d-flex flex-row"
            }
            activeclassName="active"
            onClick={() => togglePopUp(index)}
          >
            <motion.div
              className="d-flex flex-row gap-2"
              whileHover={{ scale: 1.1, originX: 0 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="icon">{item.icon}</div>
              <div className="list-item">{item.name}</div>
            </motion.div>
          </a>
          <div className={isOpen3 == true ? " tampil" : " hilang"}>
            {item.dropdown.map((list) => (
              <NavLink
                to={list.route}
                className={
                  isOpen3 == true
                    ? "list-menu list-drop vision"
                    : "list-menu list-drop hides"
                }
                activeclassName="active"
              >
                <motion.div
                  whileHover={{ scale: 1.1, originX: 0 }}
                  whileTap={{ scale: 0.9 }}
                  className="list-item drop-item"
                >
                  {list.name}
                </motion.div>
              </NavLink>
            ))}
          </div>
        </>
      );
    } else {
      return (
        <NavLink
          to={item.route}
          key={index}
          className="list-menu d-flex flex-row"
          activeclassName="active"
        >
          <motion.div
            className="d-flex flex-row gap-2"
            whileHover={{ scale: 1.1, originX: 0 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="icon">{item.icon}</div>
            <div className="list-item">{item.name}</div>
          </motion.div>
        </NavLink>
      );
    }
  };
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="logo">
            <center>
              <img
                src={require("../../assets/images/Logo/Logo.png")}
                alt="logo"
              />
            </center>
          </div>
          <div className="">
            {sidebarMenu.map((item, index, active) =>
              navNormal(item, index, active)
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSidebar;
