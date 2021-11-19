import React from "react";
import "./help_center-k.css";

function help_center() {
  return (
    <div className="Help_center">
      {/* <img className ="hc_icon" src ="icons/help.png" alt='help_icon'></img> */}
      <h1 className="hc_Heading">HELP CENTER</h1>
      <hr />
      <div className="hc_container">
        <div className="hc_border">
          <br />
          <h2 className="hc_content">FAQ's</h2>
          <br />
          <p className="hc_questions">
            <b>
              &nbsp;&nbsp;&nbsp;&nbsp;Question &nbsp;:&nbsp;&nbsp;How to change
              password?
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Answer
            </b>
            &nbsp; &nbsp;&nbsp; :&nbsp;&nbsp;Go to the{" "}
            <i>
              Settings -{">"} Accounts -{">"} Change password .
            </i>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default help_center;
