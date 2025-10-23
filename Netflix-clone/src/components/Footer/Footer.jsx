import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";



const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_left">
          <ul>
            <li>
              <FacebookOutlinedIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
          </ul>
        </div>
        <div className="footer_data">
          <div className="footer_column">
            <ul>
              <li>FAQ</li>
              <li>Medical Center</li>
              <li>Redeem Gift Cards</li>
              <li>Privacy</li>
              <li>Speed Test</li>
              <li>Ad Choices</li>
            </ul>
          </div>
          <div className="footer_column">
            <ul>
              <li>Help Center</li>
              <li>Investor Relations</li>
              <li>Buy Gift Cards</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className="footer_column">
            <ul>
              <li>Account</li>

              <li>Jobs</li>
              <li>Ways to Watch</li>
              <li>Coorporate Information</li>
              <li>Only on Netflix</li>
            </ul>
          </div>
          <div className="footer_column">
            <ul>
              <li>Netflix House</li>
              <li>Netflix Shop</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
              <li>Do Not Sell or Share My Personal Information</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>
            Service Code
          </p>
          </div>
          <div className="copy-write">
            &copy;Netflix-Clone-2025, Inc.

          </div>
        
        </div>
      </div>
   
  );
};

export default Footer;
