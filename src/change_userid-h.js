import React from "react";
import "./change_userid.css";

function change_userid() {
  return (
    <body className="chuid_body">
      <div class="chuid_main_box">
        <div class="chuid_title_icon">
          <img src="icons/change_user.png" alt="user changing" />
        </div>

        <div class="chuid_title">Change Email/Login ID</div>

        <div class="chuid_text">- or -</div>

        <div class="chuid_number_icon">
          <img
            src="icons/phone.png"
            alt="phone_icon"
            class="chuid_number_icon_image"
          />
        </div>
        <div class="chuid_email_icon">
          <img
            src="icons/mail.png"
            alt="email_icon"
            class="chuid_email_icon_image"
          />
        </div>

        <div class="chuid_reset_button_container1">
          <a href="http://localhost:3000/change_userid">
            <button class="chuid_reset_button1">Change with e-mail id</button>
          </a>
        </div>

        <div class="chuid_reset_button_container2">
          <a href="http://localhost:3000/ceum">
            <button class="chuid_reset_button2">
              Change with phone number
            </button>
          </a>
        </div>
      </div>
    </body>
  );
}

export default change_userid;
