import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBox from "./searchBox";

const NavBar = () => {
  return (
    <div className="top-header">
      <div className="wrap-container clearfix">
        <Link to="/" title="Plant-World" className="header-logo left">
          Plant World
        </Link>
        <div className="right-header right">
          {/* <button className="menu-btn"></button> */}
          <nav className="nav left clearfix">
            <ul className="nav-menus left clearfix">
              <li className="left">
                <Link to="/" title="Store">
                  <span>Store</span>
                </Link>
              </li>
              <li>
                <Link to="/category" title="Category">
                  <span>Category</span>
                </Link>
              </li>
              <li>
                <Link to="/aboutus" title="About us">
                  <span>About us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" title="Contact">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

  
