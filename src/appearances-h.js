import React from "react";
import "./appearances-h.css";

function appearances() {
  return (
    <body className="apr_body">
      <div class="apr_main_box">
        <div class="apr_main_icon">
          <img src="icons/appearances.png" alt="main icon" />
        </div>

        <div class="apr_main_title">Appearances</div>

        <div class="apr_sub_title">Choose your preferred settings.</div>

        <div class="apr_theme">
          <div class="apr_theme_text">Theme</div>

          <button class="apr_light_button">
            <img src="icons/light.png" alt="yoda" />
          </button>

          <button class="apr_dark_button">
            <img src="icons/dark.png" alt="darth_vader" />
          </button>
        </div>

        <div class="apr_font">
          <div class="apr_font_text">Font size</div>

          <button class="apr_small_button">
            <img
              src="icons/font.png"
              alt="small"
              class="apr_small_button_image"
            />
          </button>

          <button class="apr_medium_button">
            <img
              src="icons/font.png"
              alt="medium"
              class="apr_medium_button_image"
            />
          </button>

          <button class="apr_large_button">
            <img
              src="icons/font.png"
              alt="large"
              class="apr_large_button_image"
            />
          </button>
        </div>
      </div>
    </body>
  );
}

export default appearances;
