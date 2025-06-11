import React from "react";
import "../App.css";
import Candidates from "./Candidates";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="child-container">
      This is Dashboard
      <button onClick={() => navigate("/")}>Go to Home Page</button>
      <Outlet />
    </div>
  );
};

export default Dashboard;
