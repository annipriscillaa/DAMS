import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_App">
      <nav class="home_navbar_background">
        <ul class="home_nav-list">
          {/* <div class="home_logo">
            <img src="logo.jpg" alt="icons/logo.jpg" />
          </div> */}
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#book">Book appointments</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
          <li>
              <Link to="/main_login">Sign up</Link>
          </li>
          <li>
              <Link to="/main_login">Sign in</Link>
          </li>
          <li>
            <a href="#faq">Faq</a>
          </li>
        </ul>
      </nav>
      &nbsp; &nbsp;
      <div class="home_text-bigger">Welcome to DAMS!</div>
      <div class="home_subtitle-home">Book your dental appointments online</div>
      &nbsp; &nbsp;
      <section class="home_firstsection">
        <div class="home_box-main">
          <div class="home_firstHalf">
            <h1 class="home_text-big" id="about">
              About us
            </h1>
            &nbsp; &nbsp;
            <p class="home_text-small">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The main purpose of DAMS is to
              make a common web platform for the dentists to maintain their
              patient dental records and manage appointments based on a timely
              basis and also for the general public to use this platform to book
              appointments with their Dentist of choice.
            </p>
          </div>
        </div>
      </section>
      <section class="home_secondsection">
        <div class="homebox-main">
          <div class="home_secondHalf">
            <h1 class="home_text-big" id="book">
              Book appointments
            </h1>
            &nbsp; &nbsp;
            <p class="home_text-small">
              Hate to stand in queues to fix your appointments ?Dont worry We
              got you!!
              <br />
              <br />
              Go to our &nbsp;<Link to="/main_login">Sign up</Link>&nbsp; page and register
              yourself for free .After logging in you’ll be able to book your
              appointments from the "Appointments" section. If you already have
              a DAMS account , please &nbsp;<Link to="/main_login">Sign in</Link>&nbsp; with
              your registered User ID and password to access the same .
            </p>
          </div>
        </div>
      </section>
      <section class="home_faqsection">
        <div class="home_box-main">
          <div class="home_firstHalf">
            <h1 class="home_text-big" id="faq">
              FAQ
            </h1>
            &nbsp; &nbsp;
            <p class="home_text-small">
              1.How long does it take to get the confirmation from the dentist?
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <br />
              2.How to delete my account?
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Go to account settings,
              select “Delete account”, enter the reason for deleting your
              account, Enter your account password, press “Delete my account”
              button. Your account will be deleted.
              <br />
              <br />
              3.How to reset my password?
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Go to sign-in page, click
              “forgot password”, you will be asked to enter your registered
              e-mail id and a verification link will be sent to your mail id,
              after verification you will be redirected to a reset password page
              where u can set your new password.
              <br />
              <br />
              4.Can I pay for my appointments online through this website?
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No, currently pay option is
              not available in our website.
              <br />
              <br />
              5.How to update my picture/name/address?
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Go to settings page, by
              clicking the edit option that is available next to your
              information you can edit your information that u wanted to change
            , click “Üpdate”, your info will be updated.
              <br />
              <br />
              6.How can I register for the website?
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Go to our website, choose if
              you are a dentist/general user, you’ll be redirected to a sign-up
              page, Enter your details, enter and confirm your password,
              click “sign-up” .
              <br />
              <br />
              7. what should I do if I requested for an appointment by mistake?
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; You can go to “appointments
              page ”, click the appointment u want to make changes to, click
              cancel appointment, your appointment will be cancelled.
              <br />
              <br />
              8. How will I know that my appointment is booked and confirmed?
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A confirmation notification
              message will be sent to your account when your dentist accepts ur
              appointment request.
              <br />
              <br />
              9. If I have any problem while booking online, whom should I
              contact?
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If you have a problem while
              booking an online appointment go to “Help page”, click “Contact
              us”, describe the problems you are facing and submit, we will
              get back to you soon.
              <br />
              <br />
              10. How to stop getting notifications from this website?
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Go to “settings” page, click
              “notification options”, turn on your prefered notifications that
              you want to receive .
            </p>
          </div>
        </div>
      </section>
      <section class="home_section">
        <div class="home_paras">
          <h1 class="home_sectionTag text-big" id="contact">
            Drop us a like!
          </h1>
          &nbsp; &nbsp;
          <p class="home_sectionSubTag text-small">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feel free to drop us your
            valuable feedbacks and doubts and we'll get back to u as soon as
            possible.
            <br />
            <br />
            <a href="mailto: damsproject2021@gmail.com">
              Click here to mail us!
            </a>
          </p>
        </div>

        {/* <div class="home_thumbnail">
          <img src="logo.jpg" alt="icons/logo.jpg" />
        </div> */}
      </section>
      <footer class="home_background">
        <p class="home_text-footer">Copyright ©-All rights are reserved</p>
      </footer>
    </div>
  );
}

export default Home;