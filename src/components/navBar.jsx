import React from "react";
import { Link } from "react-router-dom";
import {animateScroll as scroll} from "react-scroll"

const NavBar = () => {
  return (
    <div className="top-header">
      <div className="wrap-container clearfix">
        <Link to="/" title="Plant-World" className="header-logo left">
          <span onClick={() => scroll.scrollToTop()}> Plant World </span>
        </Link>
        <div className="right-header right">
          {/* <button className="menu-btn"></button> */}
          <nav className="nav left clearfix">
            <ul className="nav-menus left clearfix">
              <li className="left">
                <Link to="/" title="Store">
                  <span onClick={() => scroll.scrollTo(1600)}>Store</span>
                </Link>
              </li>
              <li>
                <Link to="/category" title="Category">
                 <span onClick={() => scroll.scrollTo(870)}>Category</span>
                </Link>
              </li>
              <li>
                <Link to="/aboutus" title="About us">
                  <span onClick={() => scroll.scrollToBottom()}>About us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" title="Contact">
                  <span onClick={() => scroll.scrollToBottom()}>Contact</span>
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

  
