import React from "react";
import { Link, /*useHistory*/ } from "react-router-dom";
import "./settings_page.css";
import { auth, /*db*/ } from "./firebase1";

const logout = () => {
  auth.signOut();
};

function settings_page() {
  return (
    <body className="set_body">
      <div class="settings_main_box">
        <div class="set_title">Settings</div>

        <div class="set_id_icon">
          <img
            src="icons/id.png"
            alt="profile_icon"
            class="set_id_icon_image"
          />
        </div>

        <div class="set_reset_button_container1">
          <Link to="/profile_pg">
            <button class="set_reset_button1"> Profile</button>
          </Link>
        </div>

        <div class="set_appear_icon">
          <img
            src="icons/appearance.png"
            alt="appearance_icon"
            class="set_appear_icon_image"
          />
        </div>

        <div class="set_reset_button_container2">
          <Link to="/appearances">
            <button class="set_reset_button2"> Appearance </button>
          </Link>
        </div>

        <div class="set_help_icon">
          <img
            src="icons/help1.png"
            alt="help_icon"
            class="set_help_icon_image"
          />
        </div>

        <div class="set_reset_button_container3">
          <Link to="/help_pg">
            <button class="set_reset_button3"> Help and feedback </button>
          </Link>
        </div>

        <div class="set_about_icon">
          <img
            src="icons/about.png"
            alt="about_icon"
            class="set_about_icon_image"
          />
        </div>

        <div class="set_reset_button_container4">
          <Link to="/about">
            <button class="set_reset_button4"> About</button>
          </Link>
        </div>

        <div class="set_act_icon">
          <img
            src="icons/act.png"
            alt="act_set_icon"
            class="set_act_icon_image"
          />
        </div>

        <div class="set_reset_button_container5">
          <Link to="/account_settings">
            <button class="set_reset_button5"> Account settings</button>
          </Link>
        </div>

        <div class="set_not_icon">
          <img src="icons/bell.png" alt="not_icon" class="set_not_icon_image" />
        </div>

        <div class="set_reset_button_container6">
          <Link to="/not_pg">
            <button class="set_reset_button6"> Notifications</button>
          </Link>
        </div>

        <div class="set_invite_icon">
          <img
            src="icons/invite.png"
            alt="invite_icon"
            class="set_invite_icon_image"
          />
        </div>

        <div class="set_reset_button_container7">
          <button class="set_reset_button7"> Invite friends</button>
        </div>

        <div class="set_logout_icon">
          <img
            src="icons/logout.png"
            alt="logout_icon"
            class="set_logout_icon_image"
          />
        </div>

        <div class="set_reset_button_container8">
          <Link to="/">
            <button class="set_reset_button8" onClick={logout}>
              {" "}
              Logout
            </button>
          </Link>
        </div>

        <div class="set_symbol1">{">"}</div>

        <div class="set_symbol2">{">"}</div>

        <div class="set_symbol3">{">"}</div>

        <div class="set_symbol4">{">"}</div>

        <div class="set_symbol5">{">"}</div>

        <div class="set_symbol6">{">"}</div>

        <div class="set_symbol7">{">"}</div>

        <div class="set_symbol8">{">"}</div>
      </div>
    </body>
  );
}

export default settings_page;
//export { logout, settings_page };
