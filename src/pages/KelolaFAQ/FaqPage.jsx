import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Card } from "react-bootstrap";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { TextField } from "@mui/material";
import { BiSearch, BiSortDown } from "react-icons/bi";
import Pagination from "../../components/Pagination";
import NewSidebar from "../../components/sidebar/NewSidebar";
import NavbarTop from "../../components/NavbarTop";
import ItemFAQ from "./itemFAQ";
import AddData from "./AddData";
import "../../assets/styles/Overflow.css";
import { getFaqs } from "../../api/getFaqs";
import { motion } from "framer-motion";
import EditFAQ from "./EditFAQ";

export default function KelolaFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getFaqs();
      setPosts(res.data.data);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = "";
  if (!posts[0]) {
    currentPosts = [posts];
  } else {
    currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  const togglePopUpEdit = () => {
    console.log("testpopupedit");

    setIsOpen1(!isOpen1);
    console.log(isOpen1);
  };
  const itemData = (data) => {
    setEditData(data);
  };

  return (
    <>
      <div className="d-flex">
        <NewSidebar />
        <div className="w-100">
          <NavbarTop />
          <div className="mt-4 ps-3 pe-3 w-100">
            <Card className="box-overflow">
              <div style={{ backgroundColor: "whitesmoke" }}>
                <p className="mb-4 mt-1 ps-3 pt-3">
                  Kelola Frequently Asked Question
                </p>
              </div>
              <Box sx={{ p: 3 }}>
                <Typography>
                  <div className="w-100">
                    {isOpen && <AddData handleClose={togglePopUp} />}
                    {isOpen1 && (
                      <EditFAQ data={editData} handleClose={togglePopUpEdit} />
                    )}
                    <div className="d-flex flex-row justify-content-between mb-3">
                      <motion.button
                        whileHover={{ scale: 1.03, originX: 0 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          color: "white",
                          backgroundColor: "#197722",
                          paddingRight: "10px",
                          paddingLeft: "10px",
                          borderRadius: "5px",
                          borderWidth: "1px",
                          borderColor: "#197722",
                        }}
                        onClick={togglePopUp}
                      >
                        <AiOutlinePlusSquare
                          style={{
                            width: "20px",
                            height: "25px",
                            paddingBottom: "3px",
                            marginRight: "10px",
                          }}
                        />
                        Tambah Item
                      </motion.button>
                      <div className="d-flex flex-row gap-2 pe-3">
                        <div className="">
                          <TextField
                            id="search"
                            variant="outlined"
                            label={
                              <p
                                style={{ fontSize: "13px", fontWeight: "540" }}
                              >
                                <BiSearch
                                  style={{ height: "20px", width: "20px" }}
                                />
                                Cari
                              </p>
                            }
                            size="small"
                          />
                        </div>
                        <div>
                          <BiSortDown
                            style={{ height: "40px", width: "30px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <table
                      class="table table-borderless "
                      style={{
                        border: "1px solid #013B75",
                      }}
                    >
                      <thead>
                        <tr
                          className="text-center"
                          style={{ backgroundColor: "#013B75", color: "white" }}
                        >
                          <th>Pertanyaan</th>
                          <th>Jawaban</th>
                          <th>Kategori</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody
                        className="text-center"
                        style={{ color: "#013B75" }}
                      >
                        {currentPosts.map((item, index) => (
                          <ItemFAQ
                            data={item}
                            index={index}
                            toggle={togglePopUpEdit}
                            sentData={itemData}
                          ></ItemFAQ>
                        ))}
                      </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
                      <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                        currentPage={currentPage}
                      />
                    </div>

                    {/* <div className="">
                    <Button href="/kelolaPengguna/detaileditpengguna/user">
                      Detail User Tes
                    </Button>
                    User
                  </div> */}
                  </div>
                </Typography>
              </Box>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}