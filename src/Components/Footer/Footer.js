import React from 'react'
import companyLogo from "./company-logo.png"
import "./Footer.css"

function Footer() {
  return (
    <footer>
        <div className="progress-bar">
          <img src="./progress-bar.png" alt="" />
        </div>
        <div className="company-logo">
            <img src={companyLogo} alt="" />
        </div>
    </footer>
  )
}

export default Footer