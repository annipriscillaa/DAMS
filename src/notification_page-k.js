import React from "react";
import "./notification_page-k.css";

function notification_page() {
  return (
    <div className="not_main">
      <img
        className="not_icon"
        src="icons/notification.png"
        alt="notification_icon"
      ></img>
      <h1 className="not_Heading">Notifications</h1>
      <hr />
      <div className="not_container">
        <div className="not_border">
          <br />
          <br />

          <p className="not_para">
            Notifications will be delivered as a mail to your registered mail id
            <br />
            <br />
            <br />
            Select your prefered Settings
          </p>

          <div className="not_group">
            <input
              className="toggle1"
              id="toggle1"
              type="checkbox"
              name="appointment"
              value="appointment"
            />
            <label className="not_content" for="appointments">
              Appointments
            </label>
          </div>

          <br />

          <div className="not_group">
            <input
              className="toggle2"
              id="toggle2"
              type="checkbox"
              name="Follow-Ups"
            />
            <label className="not_content" for="Follow-Ups">
              Follow-Ups
            </label>
          </div>

          <br />

          <div className="not_group">
            <input
              className="toggle3"
              id="toggle3"
              type="checkbox"
              name="Reviews"
            />
            <label className="not_content" for="Reviews">
              Reviews
            </label>
          </div>

          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default notification_page;
