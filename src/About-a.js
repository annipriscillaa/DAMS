import React from "react";
import "./About-a.css";

function about() {
  return (
    <div className="about_page">
      <img className="about_icon" src="icons/help.png" alt="help_icon"></img>
      <h1 className="about_Heading">ABOUT</h1>
      <hr />
      <div className="about_container">
        <div className="about_border">
          <br />

          <p className="about_questions">
            {" "}
            Since in most of the dental clinics the patient records and
            appointments are still only maintained in the form of handwritten
            dental records, if not maintained properly is easy to lose the
            patient history and also is very cumbersome to maintain over time,
            by introducing an application that can handle all the appointments,
            previous dental records and new dental records, it facilitates the
            job of the dentist while also reducing waste of resources.
          </p>
          <p className="about_questions">
            {" "}
            This application has a two way role, one pertaining to the dentist
            perspective where he/she will register themselves as a dentist hence
            making themselves open to the patients to gather appointments;
            read/write dental records, current problems of appointed patients;
            mark the patients for future follow-ups and get reviews that might
            help them get more patients.{" "}
          </p>
          <p className="about_questions">
            The other role is that of the patient where he/she will be able to
            browse through all the available dentists, fix-up appointments with
            their favourite dentist of choice, cancel appointments on
            unfortunate situations, get follow-up notifications/alerts for the
            next preferred appointment and also rate the dentists according to
            their experience with them.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default about;
