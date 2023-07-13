// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import "../../assets/styles/dashboard.css";
import NavbarTop from "../../components/NavbarTop";
import UserSidebar from "../../components/UserSidebar/UserSidebar";

export default function UserDashboard() {
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
    <div className="d-flex">
      <UserSidebar/>
      <div className="w-100">
        <NavbarTop />
        <div className="pt-4 pb-5 ps-3 pe-3 w-100 dashboard-overflow">
          <p>User Page</p>
        </div>
      </div>
    </div>
  );
}
