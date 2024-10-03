import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <nav className="nav-links">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="logo"
          >
            AVZ
          </motion.span>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "textUc")}
          >
            Visual Studio
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Portfolio
          </NavLink>
          <NavLink to="/About" activeClassName="active">
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
