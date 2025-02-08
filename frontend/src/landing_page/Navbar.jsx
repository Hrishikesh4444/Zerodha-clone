import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
function Navbar() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const { setIsOpen } = useContext(GlobalStateContext);
  const isLoggedIn = cookies.token !== undefined;
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-clone-9nk7.onrender.com/logout",
        {},
        { withCredentials: true }
      );
      if (response.data.success) {
        removeCookie("token"); // Remove token from cookies
        toast.success("Logged out successfully!");
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (error) {
      toast.error("Logout failed. Try again.");
      console.error(error);
    }
  };

  return (
    <div className="container-fluid nav-container" style={{position: "fixed", width: "100%", zIndex:"5"}}>
      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="container p-2 nav">
          <Link className="navbar-brand" to="/">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "25%" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {isLoggedIn ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link blueHover" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link blueHover" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link blueHover" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link blueHover" to="/support">
                    Support
                  </Link>
                </li>
                <li className="nav-item blueHover" style={{ marginLeft: "30px" }}>
                  <button className="btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
                <li className="nav-item " style={{marginLeft: "50px", marginTop: '8px'}}>
                  <button
                  style={{border: "none"}}
                    className="md:hidden"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    ☰
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link blueHover" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link blueHover" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link blueHover" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link blueHover" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link blueHover" to="/support">
                    Support
                  </Link>
                </li>
                <li className="nav-item" style={{marginLeft: "45px", marginTop: '8px'}}>
                  <button
                  style={{border: "none", backgroundColor: "white", fontSize: "18px"}}
                    className="md:hidden"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    ☰
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <ToastContainer />
    </div>
  );
}

export default Navbar;
