import React from "react";
import "./Navbar.css"
import centerImg from "./center-img.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <h1 className="font-laviossa">EX PARADISO</h1>
      </div>
      <div className="center">
        <img src={centerImg} alt="" />
      </div>
      <div className="right font-andale">
          <ul>
              <li>INTRO</li>
              <li>|</li>
              <li>TEAM</li>
              <li>|</li>
              <li>ROADMAP</li>
              <li>|</li>
              <li>ART</li>
              <li>|</li>
              <li>STORY</li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
