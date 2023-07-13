import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getFeedbacks } from "../../../api/getFeedbacks";
import NavbarTop from "../../../components/NavbarTop";
import "../../../assets/styles/overflow.css";
import "../../../assets/styles/feedback.css";
import { Skeleton } from "@mui/material";
import UserSidebar from "../../../components/UserSidebar/UserSidebar";

const UserFeedbacks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getFeedbacks();
      setData(res.data.data);
      setLoading(false);
    };
    if (loading) fetchPosts();
  }, [loading]);
  return (
    <div className="d-flex">
      <UserSidebar />
      <div className="w-100">
        <NavbarTop />
        <p>Feedback</p>
        {/* <div className="ps-3 pe-3 w-100 pt-3 feedback-overflow judulF">
          <h4 className="mb-4 mt-1 pt-3 ">
            {loading ? (
              <Skeleton variant="rounded" width={250} height={35} />
            ) : (
              <span>Feedback Pelanggan</span>
            )}
          </h4>
          <div className="d-flex flex-row flex-wrap gap-4 justify-content-center pt-3">
            {loading ? (
              <>
                <Skeleton variant="rounded" width={500} height={250} />
                <Skeleton variant="rounded" width={500} height={250} />
                <Skeleton variant="rounded" width={500} height={250} />
                <Skeleton variant="rounded" width={500} height={250} />
              </>
            ) : (
              data.map((item) => (
                <Card
                  style={{
                    height: "35vh",
                    backgroundColor: "#ECECEE",
                    color: "#01478C",
                    width: "35rem",
                    textAlign: "center",
                    padding: "10px",
                  }}
                >
                  <span className="boldF">
                    {item.is_information_helpful == true
                      ? "Informasi yang diberikan Membantu"
                      : "Informasi yang diberikan Tidak Membantu"}
                  </span>

                  <Card.Body className="d-flex flex-column justify-content-between text-start">
                    <div>{item.review}</div>
                    <div className="">
                      <img
                        alt=""
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          width: "42px",
                          height: "62px",
                        }}
                        src={require("../../../assets/images/User/userlogo.png")}
                      />
                      <span className="ms-2 boldF">{item.user?.name}</span>
                    </div>
                  </Card.Body>
                </Card>
              ))
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UserFeedbacks;
