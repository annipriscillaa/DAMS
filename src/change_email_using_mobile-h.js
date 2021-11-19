import React from "react";
import "./change_email_using_mobile-h.css";

function change_email_using_mobile() {
  return (
    <body className="ceum_body">
      <div class="ceum_main_box">
        <div class="ceum_main_icon">
          <img src="icons/change_user.png" alt="user_icon" />
        </div>

        <div class="ceum_main_title">Change Email ID using mobile number</div>

        <div class="ceum_content">
          <div class="ceum_content_heading">
            Follow the steps to change your Email ID
          </div>
          <ol type="1" class="ceum_content_list">
            <li>Enter your mobile number</li>
            <li>Click on verify</li>
            <li>Get the message from us in your mobile</li>
            <li>Go to the given link in the message</li>
          </ol>
        </div>

        <div class="ceum_sub_title">Registered mobile number</div>

        <div class="ceum_input_box">
          <div class="ceum_phone_icon">
            <img
              src="icons/phone.png"
              alt="phone_image"
              class="ceum_phone_icon_image"
            />
          </div>

          <div class="ceum_input">
            <input
              type="text"
              class="ceum_input_field"
              placeholder="mobile number"
            />
          </div>
        </div>

        <div class="ceum_reset_button_container">
          <a href="http://localhost:3000/chid">
            <button class="ceum_reset_button">Send</button>
          </a>
        </div>
      </div>
    </body>
  );
}
export default change_email_using_mobile;
