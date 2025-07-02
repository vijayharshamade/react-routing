// Layout component that wraps all pages and shows the <Outlet /> for child routes
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "../App.css";
import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main-container">
      {/* Navigation links */}
      <nav
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
          height: "10vh",
          backgroundColor: "#DED3C4",
        }}
      >
        <NavLink to="/" className={() => ""}>
          Home
        </NavLink>
        <NavLink to="about" className={() => ""}>
          About
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
        <NavLink to="user/42" className={() => ""}>
          User 42
        </NavLink>
        <NavLink to="products" className={() => ""}>
          Products
        </NavLink>
        <NavLink to="hoc" className={() => ""}>
          Hoc
        </NavLink>
      </nav>

      {/* This renders the matched child route */}
      <Outlet />
    </div>
  );
};

export default Layout;
