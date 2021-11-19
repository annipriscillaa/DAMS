import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { Link, useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { app, signInWithGoogle } from "./firebase1";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import "./signup_dentist_general-k.css";

function Signup_general_user() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setdob] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const signup_general_user = () => {
    createUserWithEmailAndPassword(auth, email, password).then((cd) => {
      const gn_user_id = cd.user.uid;
      setDoc(doc(db, "gn_user_doc", gn_user_id), {
        gn_user_doc_id: gn_user_id,
        gn_user_doc_name: name,
        gn_user_doc_mail: email,
        gn_user_doc_dob: dob,
        gn_user_doc_number: number,
        gn_user_doc_gender: gender,
        gn_user_doc_age: age,
      });
    });
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading, history]);

  return (
    <div className="Signup_page">
      <form>
        <h1 className="Heading_signup">SIGN-UP FOR GENERAL USER </h1>
        <hr />
        <div className="container_signup">
          {/* <div className="profile_photo">
          
            <input className="signup_inputfield_photo" id="image" type="file" name="Photo" placeholder="Photo"  capture />
                   
         </div><br/>
         <label className="label_photo" for="Photo">
         <b>Profile Photo</b></label><br/> */}

          <label for="name">
            <b>Name</b>
            <input
              className="signup_inputfield_"
              type="text"
              placeholder="Enter your Name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <br />
          </label>

          <label for="email">
            <b>Email-id</b>
            <input
              className="signup_inputfield_"
              type="text"
              placeholder="Enter your Email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
          </label>

          <label for="dob">
            <b>DOB</b>
            <input
              className="signup_inputfield_"
              type="date"
              name="dob"
              required
              onChange={(e) => setdob(e.target.value)}
            />
            <br />
          </label>

          <label for="mobile number">
            <b>Mobile number</b>
            <input
              className="signup_inputfield_"
              type="tel"
              placeholder="Enter your Mobile number"
              name="mobile number"
              required
              pattern="[0-9]{10}"
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>

          <p>
            <b>Gender</b>
          </p>
          <input
            className="signup_inputfield_radio"
            type="radio"
            name="Gender"
            value="Male"
            id="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="Male">Male </label>
          <input
            className="signup_inputfield_radio"
            type="radio"
            name="Gender"
            value="Female"
            id="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="Female">Female</label>
          <input
            className="signup_inputfield_radio"
            type="radio"
            name="Gender"
            value="Others"
            id="Others"
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="Others">Others</label>
          <br />
          <br />

          <label for="age">
            <b>Age</b>
            <input
              className="signup_inputfield_"
              type="number"
              placeholder="Enter your current age"
              name="age"
              min="18"
              max="100"
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
          </label>

          <label for="psw">
            <b>Password</b>
            <input
              className="signup_inputfield_"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </label>

          <label for="psw-repeat">
            <b>Repeat Password</b>
            <input
              className="signup_inputfield_"
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </label>

          <div className="terms">
            <input type="checkbox" id="accept_terms" value="accept_terms" />
            <label for="accept_terms">
              <b>I accept to all the terms and privacy polices</b>
            </label>
          </div>

          <button
            type="submit"
            className="su_button"
            onClick={signup_general_user}
          >
            Sign Up
          </button>
          <br />
          <br />
          <div>
            Already have an account? <Link to="/">Login</Link> now.
          </div>
          <br />
        </div>
      </form>
      <br />
    </div>
  );
}

export default Signup_general_user;
