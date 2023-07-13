import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { RiUserLine } from "react-icons/ri";
import { GoTag } from "react-icons/go";
import { Skeleton } from "@mui/material";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoMdTrendingUp } from "react-icons/io";
import { getAnalytics } from "../../api/getAnalytics";
import { numberFormater } from "../../components/numberFormater";

const CardDashboard = ({ loading }) => {
  const [posts, setPosts] = useState([]);
  const [loadingx, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAnalytics();
      setPosts(res.data.data);
    };
    fetchPosts();
    setTimeout(isReload, 5000);
  }, [loadingx]);

  const isReload = () => {
    setLoading(!loadingx);
  };

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {/* {loading ? (
        <Skeleton variant="rounded" width={240} height={110} />
      ) : (
        <Card
          className="d-flex"
          style={{
            width: "17rem",
            borderRadius: "10px",
            borderLeftColor: "#D15F02",
            borderLeftWidth: "4px",
            padding: "10px",
          }}
        >
          <div className="d-flex flex-row">
            <RiUserLine
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                padding: "9px",
                backgroundColor: "#D15F02",
                width: "40px",
                height: "40px",
                borderRadius: "100px",
                color: "white",
              }}
            />
            <h4
              style={{ color: "#D15F02", fontWeight: "600", marginTop: "5px" }}
            >
              Pengunjung
            </h4>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <p>
              <h3
                className="mb-0 mt-0"
                style={{
                  fontWeight: "600",
                  marginLeft: "15px",
                  fontSize: "38px",
                }}
              >
                {numberFormater(posts.visitors_count) || 0}
              </h3>
            </p>
            <p className="ms-2 mt-3 mb-0" style={{ color: "#3F8E47" }}>
              Total
            </p>
          </div>
        </Card>
      )} */}
      {loading ? (
        <Skeleton variant="rounded" width={240} height={110} />
      ) : (
        <Card
          className="d-flex "
          style={{
            width: "17rem",
            borderRadius: "10px",
            borderLeftColor: "#006BA0",
            borderLeftWidth: "4px",
            padding: "10px",
          }}
        >
          <div className="d-flex flex-row ">
            <GoTag
              style={{
                marginLeft: "15px",
                marginRight: "20px",
                padding: "9px",
                backgroundColor: "#006BA0",
                width: "40px",
                height: "40px",
                borderRadius: "100px",
                color: "white",
              }}
            />
            <h4
              style={{ color: "#006BA0", fontWeight: "600", marginTop: "5px" }}
            >
              Pembeli
            </h4>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <p>
              <h3
                className="mb-0 mt-0"
                style={{
                  fontWeight: "600",
                  marginLeft: "15px",
                  fontSize: "38px",
                }}
              >
                {numberFormater(posts.sales_count) || 0}
              </h3>
            </p>
            <p className="ms-2 mt-3 mb-0" style={{ color: "#3F8E47" }}>
              Total
            </p>
          </div>
        </Card>
      )}
      {/* {loading ? (
        <Skeleton variant="rounded" width={240} height={110} />
      ) : (
        <Card
          className="d-flex"
          style={{
            width: "17rem",
            borderRadius: "10px",
            borderLeftColor: "#197722",
            borderLeftWidth: "4px",
            padding: "10px",
          }}
        >
          <div className="d-flex flex-row ">
            <SlScreenSmartphone
              style={{
                marginLeft: "15px",
                marginRight: "20px",
                padding: "9px",
                backgroundColor: "#197722",
                width: "40px",
                height: "40px",
                borderRadius: "100px",
                color: "white",
              }}
            />
            <h4
              style={{ color: "#197722", fontWeight: "600", marginTop: "5px" }}
            >
              Apk Terinstall
            </h4>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span>
              <h3
                className="mb-0 mt-0"
                style={{
                  fontWeight: "600",
                  marginLeft: "15px",
                  fontSize: "38px",
                }}
              >
                {numberFormater(posts.app_installs_count) || 0}
              </h3>
            </span>
            <span className="ms-2 mt-3 mb-0" style={{ color: "#3F8E47" }}>
              Total
            </span>
          </div>
        </Card>
      )} */}
      {loading ? (
        <Skeleton variant="rounded" width={240} height={110} />
      ) : (
        <Card
          className="d-flex"
          style={{
            borderRadius: "10px",
            borderLeftColor: "#2B669F",
            borderLeftWidth: "4px",
            width: "15rem",
            padding: "10px",
          }}
        >
          <div className="d-flex flex-row ">
            <IoMdTrendingUp
              style={{
                marginLeft: "15px",
                marginRight: "20px",
                padding: "9px",
                backgroundColor: "#2B669F",
                width: "40px",
                height: "40px",
                borderRadius: "100px",
                color: "white",
              }}
            />
            <h4
              style={{ color: "#2B669F", fontWeight: "600", marginTop: "5px" }}
            >
              Income
            </h4>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <span className="mt-2 mb-0">
              <h3
                className="mb-0 mt-0"
                style={{
                  fontWeight: "600",
                  marginLeft: "15px",
                  fontSize: "28px",
                }}
              >
                {numberFormater(posts.income) || 0}
              </h3>
            </span>
            <span className="ms-2 mt-3 mb-0" style={{ color: "#3F8E47" }}>
              Total
            </span>
          </div>
        </Card>
      )}
    </div>
  );
};

export default CardDashboard;
