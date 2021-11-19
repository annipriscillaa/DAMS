import React from "react";
import "./changing_user_id-h.css";

function changing_user_id() {
  return (
    <body className="chid_body">
      <div class="chid_main_box">
        <div class="chid_title_icon">
          <img src="icons/change_user.png" alt="user changing" />
        </div>

        <div class="chid_title">Change email ID</div>

        <div class="chid_sub_title">Enter your new Email ID</div>

        <div class="chid_text1">New Email ID</div>

        <div class="chid_new_email">
          <div class="chid_email_icon">
            <img
              src="icons/mail.png"
              alt="email_icon"
              class="chid_email_icon_image"
            />
          </div>

          <div class="chid_new_email_text">
            <input type="text" className="chid_input" placeholder="new email" />
          </div>
        </div>

        <div class="chid_text2">Confirm new Email ID</div>

        <div class="chid_confirm_new_email">
          <div class="chid_email_icon">
            <img
              src="icons/mail.png"
              alt="email_icon"
              class="chid_email_icon_image"
            />
          </div>

          <div class="chid_confirm_new_email_text">
            <input
              type="text"
              className="chid_input"
              placeholder="confirm password"
            />
          </div>
        </div>

        <div class="chid_reset_button_container">
          <button class="chid_reset_button">Reset</button>
        </div>
      </div>
    </body>
  );
}

export default changing_user_id;
