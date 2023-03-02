import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>© CODED BY GUILLERMOBPY</h3>
      <ul>
        <li>
          <i className="bx bxl-github"></i>
          <span>GITHUB</span>
        </li>
        <li><i className='bx bxl-linkedin-square'></i><span>LINKDIN</span></li>
        <li><i className='bx bxl-instagram'></i><span>INSTAGRAM</span></li>
      </ul>
    </footer>
  );
};

export default Footer;
