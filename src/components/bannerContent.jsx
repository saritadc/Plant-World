import React, { Component } from 'react';
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
            <button className="shop-btn">Shop Now</button>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Banner;