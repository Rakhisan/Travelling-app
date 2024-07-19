import React, { useEffect } from "react";
import "./Footer.css";

import { SiYourtraveldottv } from "react-icons/si";
import { BiLogoFacebookCircle } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="footerLogo"
          >
            <a href="/" className="logo flex">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="socials flex"
          >
            <a href="https://facebook.com" aria-label="Facebook">
              <BiLogoFacebookCircle className="icon" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <AiFillTwitterCircle className="icon" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <AiFillInstagram className="icon" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <AiFillYoutube className="icon" />
            </a>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          className="footerLinks"
        >
          <span className="linkTitle">Information</span>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/explore">Explore</a>
          </li>
          <li>
            <a href="/travel">Travel</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="footerLinks"
        >
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="/destination">Destination</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li>
            <a href="/terms">Travel & Conditions</a>
          </li>
          <li>
            <a href="/privacy">Privacy</a>
          </li>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="5000"
          className="footerLinks"
        >
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+919584814466</span>
          <span className="email">isratech2022@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
