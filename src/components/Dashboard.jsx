import React from "react";
import "../App.css";
import Candidates from "./Candidates";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="child-container">
      This is Dashboard
      <Outlet />
    </div>
  );
};

export default Dashboard;
