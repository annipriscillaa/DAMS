import React from "react";
import "./contact_us.css";

function contact_us() {
  return (
    <body className="conus_body">
      <div class="conus_main_box">
        <div class="conus_title">Contact us</div>
        <div class="conus_title_icon">
          <div class="conus_number_icon">
            <img
              src="icons/phone.png"
              alt="phone_icon"
              class="conus_number_icon_image"
            />
          </div>
        </div>
        <div class="conus_text">
          <br /> <br />
          <br />
          Describe your issue:
        </div>
        <br /> <br />
        <input class="conus_text_box" type="textbo" />
      </div>
      <div class="conus_submit_button_container">
        <button type="submit" class="conus_submit_button">
          Submit
        </button>
      </div>
    </body>
  );
}

export default contact_us;
