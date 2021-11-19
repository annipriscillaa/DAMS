import React from "react";
import "./delete_acc.css";

function delete_account() {
  return (
    <div>
      <body className="delete_body" align="center">
        <h2>
          <div class="delete_main_box">
            <br />
            <br />
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-user fa-w-14 fa-3x"
              width="40px"
              height="40px"
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                class=""
              ></path>
            </svg>
            <p className="heading"> Delete Account</p>
          </div>
        </h2>

        <div class="delete_paragraph">
          <p>
            We would hate to see you go, but if you are completely sure,
            <br /> Enter your password and we will close your account and delete
            your details. <br /> Remember, there is no going back.
          </p>
        </div>
        <div class="options" align="left">
          <p>Why are you leaving?</p>
          <div>
            <form>
              <input type="radio" value="benefits" name="gender" align="left" />
              I don't see the benefits
              <br />
              <input type="radio" value="benefits" name="gender" align="left" />
              I'm not using it anymore
              <br />
              <input type="radio" value="benefits" name="gender" align="left" />
              Other
              <br />
              <textarea
                rows="5"
                cols="50"
                name="comment"
                form="usrform"
                placeholder="Enter text here..."
              ></textarea>
            </form>
          </div>
        </div>
        <span class="pass" align="left">
          <img src="https://img.icons8.com/ios-glyphs/25/000000/key--v1.png" alt="helo"/>
          &nbsp;Password :
        </span>
        <br />
        <span class="password_box" align="right">
          <input
            type="password"
            id="pwd"
            name="pwd"
            minlength="8"
            height="500px"
            size="35"
            placeholder="Enter your password"
            style={{ padding: "14px 40px" }}
          />
        </span>

        <div>
          <button
            type="submit"
            form="form1"
            value="Submit"
            class="submit_button"
          >
            Delete my account
          </button>
        </div>
      </body>
      <br />
      <br />
    </div>
  );
}
export default delete_account;
