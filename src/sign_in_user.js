import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase1";
import { useAuthState } from "react-firebase-hooks/auth";
import "./sign_in_user.css";

// import { Link, useHistory } from "react-router-dom";

function Sign_in_user() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/Dashboard?email=" + email);
  }, [user, loading]);
  return (
    <div class="signIn_body">
      <div className="signIn_main_box">
        <h1 className="signin">Sign-in to your account</h1>
        <span class="userid" align="left">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="user"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-user fa-w-14 fa-3x"
            height="30px"
            width="30px"
          >
            <path
              fill="currentColor"
              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              class=""
            ></path>
          </svg>
          &nbsp;User ID / Email ID :
        </span>
        <span class="userid_box" align="right">
          <input
            type="text"
            size="35"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
            style={{ padding: "14px 20px" }}
          />
        </span>

        <div>
          <span class="pass2" align="left">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/key--v1.png" />
            &nbsp;Password :
          </span>
          <span class="password_box2" align="right">
            <input
              type="password"
              id="pwd"
              name="pwd"
              minlength="8"
              height="500px"
              size="35"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{ padding: "14px 20px" }}
            />
          </span>
        </div>
        <div>
          <div>
            <button
              type="submit"
              form="form1"
              value="Submit"
              class="login_button"
              onClick={() => signInWithEmailAndPassword(auth, email, password)}
            >
              LOGIN
            </button>

            <br />
            {/* <button
              type="submit"
              form="form1"
              value="Submit"
              class="login_button_google"
              onClick={signInWithGoogle}
            >
              LOGIN WITH GOOGLE
            </button> */}
          </div>
        </div>
        <div>
          <div>
            <Link to="/reset">
              <div class="forgot_password">Forgot Password?</div>
            </Link>
          </div>
          <div>
            {" "}
            <p className="signup">
              Don't have an account?
              <Link to="/signup_general_user">&nbsp;Signup</Link>
            </p>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}
export default Sign_in_user;
