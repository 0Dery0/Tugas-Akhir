import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Pagination from "../../../components/Pagination";
import NavbarTop from "../../../components/NavbarTop";
import ItemPaket from "./UserItemPaket";
import "../../../assets/styles/overflow.css";
import "../../../assets/styles/pengguna.css";
import { getPackages } from "../../../api/getPackages";
import { motion } from "framer-motion";
import Search from "../../../components/Search";
import { Skeleton } from "@mui/material";
import UserSidebar from "../../../components/UserSidebar/UserSidebar";
import UserItemPaket from "./UserItemPaket";

export default function UserProdukPaketData() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPackages();
      setPosts(res.data.data);
      setData(res.data.data);
      setLoading(false);
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
          <div className="pt-4 ps-3 pe-3 w-100 main-overflow ">
            {/* <div>
              <CardTopPaket loading={loading} />
            </div> */}
            <Box>
              <Typography>
                <div className="w-100 judulE">
                  {/* {isOpen && (
                    <AddStockPaket
                      setReload={setReload}
                      handleClose={togglePopUp}
                    />
                  )} */}
                  <h4 className="pt-3 pb-2">
                    {loading ? (
                      <Skeleton variant="rounded" width={200} height={35} />
                    ) : (
                      <span>Paket Data</span>
                    )}
                  </h4>
                  <div className="d-flex flex-row justify-content-between mb-3">
                    {/* {loading ? (
                      <Skeleton variant="rounded" width={200} height={35} />
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
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
                        Tambah Paket Data
                      </motion.button>
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
                    <table class="tablesE ">
                      <thead
                        style={{
                          border: "1px solid",
                        }}
                      >
                        <tr
                          className="text-center"
                          style={{
                            backgroundColor: "#013B75",
                            color: "#F5F6F7",
                          }}
                        >
                          <th className="text-start">Provider</th>
                          <th className="nama">Nama Paket</th>
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
                          currentPosts.map((item, index) => (
                            <UserItemPaket
                              setReload={setReload}
                              data={item}
                              index={index}
                            ></UserItemPaket>
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
