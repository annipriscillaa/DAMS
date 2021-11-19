import React from "react";
import "./help_page-k.css";
import { Link } from "react-router-dom";

function help_page() {
  return (
    <div className="Help_page">
      <form>
        <img className="help_icon" src="icons/help.png" alt="help_icon"></img>
        <h1 className="help_Heading">HELP</h1>
        <hr />
        <div className="help_container">
          <div className="help_border">
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link to="/help_center" className="link">
              <h2 className="help_content">help center</h2>
            </Link>
            <br />
            <a className="link" href="http://localhost:3000/contact_us">
              <h2 className="help_content">Contact Us </h2>
            </a>
            <br />
            <a className="link" href="http://localhost:3000/tp">
              <h2 className="help_content">Terms and conditions</h2>
            </a>
            <br />
            <a className="link" href="http://localhost:3000/license_pg">
              <h2 className="help_content">License</h2>
            </a>
            <br />
            <a className="link" href="http://localhost:3000/about">
              <h2 className="help_content">About</h2>
              <br />
            </a>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </form>
    </div>
  );
}

export default help_page;
