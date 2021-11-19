import React from "react";
import "./reset_pwd-h.css";

function reset_pwd() {
  return (
    <body className="rp_body">
      <div class="rp_main_box">
        <div class="rp_key_icon">
          <img src="icons/key.png" alt="key_image" />
        </div>

        <div class="rp_reset_pwd_title">Reset Your Password</div>

        <div class="rp_new_pwd_field">
          <div class="rp_new_pwd_text">New Password:</div>
          <div class="rp_new_pwd_textbox">
            <input type="text" class="rp_np_box" placeholder="new password" />
          </div>
        </div>

        <div class="rp_conf_pwd_field">
          <div class="rp_conf_pwd_text">Confirm Password:</div>
          <div class="rp_conf_pwd_textbox">
            <input
              type="text"
              class="rp_c_box"
              placeholder="confirm password"
            />
          </div>
        </div>

        <div class="rp_reset_button_container">
          <button class="rp_reset_button">
            <a href="/" className="rp_inside_button">
              Reset
            </a>
          </button>
        </div>
      </div>
    </body>
  );
}

export default reset_pwd;
