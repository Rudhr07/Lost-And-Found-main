import { useState } from "react";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate for redirection

function Navbar() {
  const [active, setActive] = useState(false);
  const [cls, setCls] = useState("inactive");
  const navigate = useNavigate(); // Added useNavigate hook

  // Check if admin is logged in
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

  function openNav() {
    setActive(true);
    setCls("active");
  }

  function closeNav() {
    setActive(false);
    setCls("inactive");
  }

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn"); // Clear login state
    navigate("/"); // Redirect to home page
    window.location.reload(); // Refresh the page to update the navbar
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul className={cls}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/find">Find item</Link>
        </li>
        <li>
          {isAdminLoggedIn ? (
            <Link to="/post">Post item</Link>
          ) : (
            <Link to="/admin-login">Post item</Link>
          )}
        </li>
        <li>
          <a href="/#about">About us</a>
        </li>
        {/* Logout button */}
        {isAdminLoggedIn && (
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </li>
        )}
      </ul>
      {active ? (
        <button className="menu-container" onClick={closeNav}>
          <CloseIcon className="menu close" />
        </button>
      ) : (
        <button className="menu-container" onClick={openNav}>
          <MenuIcon className="menu" />
        </button>
      )}
    </nav>
  );
}

export default Navbar;