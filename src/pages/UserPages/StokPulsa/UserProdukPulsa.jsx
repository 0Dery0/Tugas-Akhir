import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Pagination from "../../../components/Pagination";
import NavbarTop from "../../../components/NavbarTop";
import ItemPulsa from "./UserItemPulsa";
import "../../../assets/styles/overflow.css";
import "../../../assets/styles/stok.css";
import { getCredit } from "../../../api/getCredits";
import { motion } from "framer-motion";
import Search from "../../../components/Search";
import { Skeleton } from "@mui/material";
import UserSidebar from "../../../components/UserSidebar/UserSidebar";
import UserItemPulsa from "./UserItemPulsa";

export default function UserProdukPulsa() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getCredit();
        setPosts(res.data.data);
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (loading) fetchPosts();
  }, [loading]);

  const change = () => {
    setCurrentPage(1);
  };

  const setReload = () => {
    setLoading(true);
  };
  const setSearchResult = (datas) => {
    setData(datas);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = "";
  if (!data[0]) {
    currentPosts = [data];
  } else {
    currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="d-flex">
        <UserSidebar list={3} />
        <div className="w-100">
          <NavbarTop />

          <div className="pt-4 ps-3 pe-3 w-100 main-overflow">
            {/* <div>
              <CardTopPulsa loading={loading} />
            </div> */}
            <Box>
              <Typography>
                <div className="w-100 judulE">
                  {/* {isOpen && (
                    <AddStockPulsa
                      setReload={setReload}
                      handleClose={togglePopUp}
                    />
                  )} */}
                  <h4 className="pt-3 pb-2">
                    {loading ? (
                      <Skeleton variant="rounded" width={150} height={35} />
                    ) : (
                      <span>Stok Pulsa</span>
                    )}
                  </h4>
                  <div className="d-flex flex-row justify-content-between mb-3">
                    {/* {loading ? (
                      <Skeleton variant="rounded" width={200} height={35} />
                    ) : (
                      <>
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
                          Tambah Pulsa
                        </motion.button>
                      </>
                    )} */}
                    {loading ? (
                      <Skeleton variant="rounded" width={200} height={35} />
                    ) : (
                      <Search
                        posts={posts}
                        setSearchResults={setSearchResult}
                        pages="stock"
                        placeHolder="Cari Provider, Nama"
                        change={change}
                      />
                    )}
                  </div>
                  {loading ? (
                    <Skeleton variant="rounded" height={370} />
                  ) : (
                    <table class="tablesE">
                      <thead>
                        <tr
                          className="text-center"
                          style={{
                            backgroundColor: "#013B75",
                            color: "#F5F6F7",
                          }}
                        >
                          <th className="text-start">Provider</th>
                          <th className="nama">Nama Produk</th>
                          <th>Stok</th>
                          <th>Hadiah Poin</th>
                          <th>Harga (Rp)</th>
                          <th className="aksi">Aksi</th>
                        </tr>
                      </thead>
                      <tbody
                        className="text-center"
                        style={{ color: "#013B75" }}
                      >
                        {currentPosts[0].length != 0 ? (
                          currentPosts?.map((item, index) => (
                            <UserItemPulsa
                              setReload={setReload}
                              data={item}
                              index={index}
                            ></UserItemPulsa>
                          ))
                        ) : (
                          <span className="position-absolute top-50 start-50 translate-middle fs-3">
                            Data Tidak Ditemukan
                          </span>
                        )}
                      </tbody>
                    </table>
                  )}

                  <div className="table-pagination-S">
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPosts={data.length}
                      paginate={paginate}
                      currentPage={currentPage}
                    />
                  </div>
                </div>
              </Typography>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
