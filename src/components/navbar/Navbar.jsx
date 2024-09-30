import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          AVZ
        </motion.span>
        <nav className="nav-links">
          <NavLink to="/" activeClassName="active" className="textUc">
            Visual Studio
          </NavLink>
          <NavLink to="/Portfolio" activeClassName="active">
            Portfolio
          </NavLink>
          <NavLink to="/About" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/Contact" activeClassName="active">
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
