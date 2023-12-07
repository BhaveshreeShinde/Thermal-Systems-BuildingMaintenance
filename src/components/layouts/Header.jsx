import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import logo from "./logo.svg";
import "../../assets/css/header.css";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const location = useLocation();
  const [oldPathname, setOldPathname] = useState("");
  if (menuToggle) {
    let d = document.getElementById("main-menu");
    d.style.display = "unset";
  }
  useEffect(() => {
    if (oldPathname !== location.pathname && menuToggle) {
      setOldPathname(location.pathname);
      setMenuToggle(false);
      let d = document.getElementById("main-menu");
      d.style.display = "none";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, oldPathname]);

  function closeMenuFunction() {
    let d = document.getElementById("main-menu");
    d.style.display = "none";
  }

  return (
    <div className="App bg-image">
      <nav>
        <div id="logo">
          <img src={logo} onClick={navigateToHome} alt="logo" />
        </div>
        {menuToggle ? (
          <div
            className="toggle toggle-btn"
            onClick={() => {
              setMenuToggle(false);
              closeMenuFunction();
            }}>
            <label htmlFor="drop">
              <CloseIcon />
            </label>
          </div>
        ) : (
          <div
            className="toggle toggle-btn"
            onClick={() => {
              setMenuToggle(true);
            }}>
            <label htmlFor="drop">
              <DehazeIcon />
            </label>
          </div>
        )}
        <input type="checkbox" id="drop" />
        <div
          className="header-contact-detail"
          style={{
            display: "flex",
            justifyContent: "center",
          }}>
          <a
            href="tel:+403-230-6739"
            style={{ textDecoration: "none", color: "#666" }}>
            403-230-6739 (24 hr line)
          </a>

          <a
            href="mailto:service@thermalsystems.ca"
            style={{
              textDecoration: "none",
              color: "#666",
            }}>
            service@thermalsystems.ca
          </a>
        </div>
        <ul id="main-menu" className="menu">
          <li>
            <NavLink htmlFor="drop-1" className="toggle" to="/">
              Home
            </NavLink>
            <NavLink className="main-menu" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink htmlFor="drop-2" className="toggle" to="/about">
              About Us
            </NavLink>
            <NavLink className="main-menu" to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink htmlFor="drop-3" className="toggle" to="/safety">
              Safety
            </NavLink>
            <NavLink className="main-menu" to="/safety">
              Safety
            </NavLink>
          </li>
          <li>
            <label htmlFor="drop-3" className="toggle">
              <span>
                {" "}
                <NavLink>Services</NavLink>
              </span>
              +
            </label>
            <NavLink className="main-menu menu-icon is-hidden-mobile">
              Services
            </NavLink>
            <input type="checkbox" id="drop-3" />
            <ul className="menu">
              <li>
                <NavLink to="/services/building-maintenance">
                  Building Envelope Maintenace and Repair
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/24-hour-emergency-service">
                  24-Hour Emergency - Leaks and Wall Systems
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/commercial-roofing-maintenance-repairs">
                  COMMERCIAL ROOFING, MAINTENANCE and REPAIRS
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/tenant-and-mechanical-upgrades">
                  Roof Top Repair or Tenant Improvements
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/commercial-re-roofing">
                  Commercial Re-Roofing
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/commercial-wall-systems">
                  Commercial Wall Systems
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink htmlFor="drop-5" className="toggle" to="/contact">
              CONTACT US
            </NavLink>
            <NavLink className="main-menu" to="/contact">
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
