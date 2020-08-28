import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll'
import NavBar from './navBar';

class Banner extends Component {
  render() { 
    return (
      <div className="bg-banner">
        <NavBar />
        <div>
          <div className="wrap-container text-position">
            <h4 className="title-first">Bring Freshness to your home</h4>
            <h1 className="title-second">PLANTS FOR YOUR INTERIOR</h1>
            <Link to="/contact">
              <button className="shop-btn" onClick={() => scroll.scrollToBottom()}>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Banner;