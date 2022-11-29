import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from "react-icons/fi";
import { BsGithub, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Syed Mohammad Yasir
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">ABout</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/cyasir"><FaFacebook /></a>
        <a href="https://instagram.com/cyasir"><FiInstagram /></a>
        <a href="https://twitter.com/cyasir"><BsTwitter /></a>
        <a href="https://facebook.com/cyasir"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        &copy; Syed Mohammad Yasir. All rights reserved.
      </div>


    </footer>
  );
}

export default Footer