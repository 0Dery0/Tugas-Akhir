import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../../assets/styles/detailEditProduk.css";
import "../../assets/styles/overflow.css";
import NewSidebar from "../../components/sidebar/NewSidebar";
import NavbarTop from "../../components/NavbarTop";
import { numberFormater } from "../../components/numberFormater";
import { getDetailTransaksi } from "../../api/getDetailTransaksi";
import "../../assets/styles/warnaTransaksi.css";

const UserDetailTransaksi = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getDetailTransaksi(id);
      setData(res.data.data);
      setLoading(false);
    };
    fetchPosts(data);
  }, [id]);

  const warna = () => {
    if (data.status == "Success") {
      return "sukses";
    } else if (data.status == "Pending") {
      return "pending";
    } else if (data.status == "Gagal") {
      return "gagal";
    }
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="d-flex">
        <NewSidebar />
        <div className="w-100">
          <NavbarTop />
          {loading ? (
            <div class="ms-5 position-absolute top-50 start-50 translate-middle">
              <div class="ms-5 spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="pt-3 ps-3 pe-3 w-100 main">
              <Card border="dark" className="">
                <Card.Img
                  style={{ padding: "10px", height: "250px" }}
                  src={require("../../assets/images/ProdukPulsa/Vector 2.png")}
                />
                <Card.ImgOverlay>
                  <Row>
                    <Col sm={2} lg={2} className="d-flex justify-content-end">
                      <i>
                        <img
                          style={{ height: "120px" }}
                          alt="iconproduk"
                          src={require("../../assets/images/ProdukTransaksi/Frame 33773.png")}
                        />
                      </i>
                    </Col>
                    <Col
                      sm={8}
                      lg={8}
                      className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <p className="mt-4" style={{ color: "white" }}>
                        <h4>Detail Transaksi</h4>
                      </p>
                      <p className="text-harga">
                        <h2>Rp {numberFormater(data.amount)}</h2>
                      </p>
                      <i>
                        <p
                          style={{
                            fontSize: "24px",
                            padding: "10px 20px 10px 20px",
                          }}
                          className={warna()}
                        >
                          {data.status}
                        </p>
                      </i>
                    </Col>
                    <Col
                      sm={2}
                      lg={2}
                      className="d-flex justify-content-end pe-4 text-center"
                    >
                      <p
                        style={{
                          margin: "0px",
                          marginTop: "20px",
                          marginLeft: "1px",
                          backgroundColor: "#FBB505",
                          color: "#013B75",
                          padding: "10px 20px 10px 20px",
                          height: "45px",
                          borderRadius: "5px",
                        }}
                      >
                        <h5>{data.type}</h5>
                      </p>
                    </Col>
                  </Row>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Text className="text-overflow">
                    <div className="mt-2 d-flex justify-content-between list-detail">
                      <p className="detail-produk-text">NAMA</p>
                      <p className="detail-produk-text">{data.user?.name}</p>
                    </div>
                    <div className="d-flex justify-content-between list-detail">
                      <p className="detail-produk-text">EMAIL</p>
                      <p className="detail-produk-text">{data.user?.email}</p>
                    </div>
                    <div className="d-flex justify-content-between list-detail">
                      <p className="detail-produk-text">NOMOR</p>
                      <p className="detail-produk-text">
                        {data.transaction_detail?.number}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between list-detail">
                      <p className="detail-produk-text">NILAI</p>
                      <p className="detail-produk-text">
                        {numberFormater(data.amount)}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between list-detail">
                      <p className="detail-produk-text">METODE</p>
                      <p className="detail-produk-text">{data.method || "-"}</p>
                    </div>
                    <div className="d-flex justify-content-between list-detail">
                      <p className="detail-produk-text">Status</p>
                      <p className="detail-produk-text">{data.status}</p>
                    </div>
                    <div className="d-flex justify-content-between list-detail">
                      <p className="detail-produk-text">TIPE</p>
                      <p className="detail-produk-text">{data.type}</p>
                    </div>
                    <div className="d-flex justify-content-between list-detail">
                      <p className="detail-produk-text">TANGGAL TRANSAKSI</p>
                      <p className="detail-produk-text">{data.created_date}</p>
                    </div>
                  </Card.Text>
                  <div
                    style={{ position: "relative" }}
                    className="mb-2 d-flex justify-content-center gap-5"
                  >
                    <Button
                      style={{
                        backgroundColor: "#D15F02",
                        borderColor: "#D15F02",
                      }}
                      onClick={handleGoBack}
                    >
                      Kembali
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDetailTransaksi;
