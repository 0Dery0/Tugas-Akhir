import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../../assets/styles/detailEditProduk.css";
import "../../assets/styles/overflow.css";
import NavbarTop from "../../components/NavbarTop";
import UserSidebar from "../../components/UserSidebar/UserSidebar";
import { getProfileUsers } from "../../api/getProfile";

export default function UserDashboard() {
  const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchPosts = async () => {
        const getUser = await getProfileUsers();
        setUserData(getUser.data.data)
        setLoading(false);
      };
  
      fetchPosts();
    }, []);
      console.log(userData)
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [loadData, setLoadData] = useState(true);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await getAnalytics();
  //     setPosts(res.data.data);
  //     setLoading(false);
  //   };
  //   fetchPosts();
  //   setTimeout(isReload, 5000);
  // }, [loadData]);
  // const isReload = () => {
  //   setLoadData(!loadData);
  // };

  return (
    <>
      <div className="d-flex">
        <UserSidebar />
        <div className="w-100">
          <NavbarTop />
          {loading ? (
            <div class="ms-5 position-absolute top-50 start-50 translate-middle">
              <div class="ms-5 spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="mt-3 ps-3 pe-3 w-100">
              {/* {isOpen && <EditPengguna data={data} handleClose={togglePopUp} />} */}
              <Card border="dark">
                <Card.Header>
                  <div className="d-flex flex-row">
                    <div>
                      <img
                        alt=""
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          width: "140px",
                          height: "150px",
                        }}
                        src={require("../../assets/images/User/userlogo.png")}
                      />
                    </div>
                    <div
                      style={{
                        paddingTop: "10px",
                        marginTop: "15px",
                        marginLeft: "20px",
                      }}
                    >
                      <p style={{ marginBottom: "30px", color: "#01478C" }}>
                        <h3>{userData.name}</h3>
                      </p>
                      <span
                        style={{
                          padding: "10px 25px 10px 25px",
                          backgroundColor: "#032B54",
                          borderRadius: "50px",
                          textAlign: "center",
                          width: "80%",
                          fontSize: "19px",
                          color: "white",
                        }}
                      >
                        Pelanggan
                      </span>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body className="detailPengguna-oveflow">
                  <Card.Text>
                    <div className="mt-2 d-flex justify-content-between list-detail">
                      <p className="detail-produk-text">Nama Lengkap</p>
                      <p className="detail-produk-text">{userData.name}</p>
                    </div>
                    <div className="mt-2 d-flex justify-content-between list-detail">
                      <p className="detail-produk-text">Email</p>
                      <p className="detail-produk-text">{userData.email}</p>
                    </div>
                    <div className="mt-2 d-flex justify-content-between list-detail">
                      <p className="detail-produk-text">Poin</p>
                      <p className="detail-produk-text">{userData.points}</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div
                      style={{ position: "relative" }}
                      className="mb-2 d-flex justify-content-center gap-5"
                    >
                      {/* <Button
                        style={{
                          backgroundColor: "#006BA0",
                          borderColor: "#006BA0",
                        }}
                        // onClick={togglePopUp}
                      >
                        Ubah
                      </Button> */}
                      {/* <Button
                        style={{
                          backgroundColor: "#D15F02",
                          borderColor: "#D15F02",
                        }}
                        onClick={handleGoBack}
                      >
                        Kembali
                      </Button> */}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
