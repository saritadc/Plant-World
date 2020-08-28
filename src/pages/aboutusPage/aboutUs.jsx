import React from 'react'; 
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import './aboutUs.css';


const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Link to="/">
          <button className="about-btn" onClick={() => scroll.scrollToTop()}>
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
 
export default AboutUs;