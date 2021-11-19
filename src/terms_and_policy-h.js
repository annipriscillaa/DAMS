import React from "react";
import "./terms_and_policy-h.css";
// import { Link, useHistory } from "react-router-dom";

function terms_and_policy() {
  return (
    <body className="tp_body">
      <div class="tp_main_box">
        <div class="tp_title_icon">
          <img src="icons/t&p.png" alt="terms_icon" />
        </div>

        <div class="tp_title">Terms and Privacy policy</div>

        <div class="tp_terms_text">{/* <insert text here> */}</div>
      </div>
    </body>
  );
}

export default terms_and_policy;
