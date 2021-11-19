import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { Link, useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { app, signInWithGoogle } from "./firebase1";
import { getFirestore, setDoc, doc } from "firebase/firestore";
// import React from 'react';
import "./signup_dentist_general-k.css";

function Signup_dentist() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dental_id, setdental_id] = useState("");
  const [dob, setdob] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const signup_dentist = () => {
    createUserWithEmailAndPassword(auth, email, password).then((cred) => {
      const user_id = cred.user.uid;
      setDoc(doc(db, "doc", user_id), {
        doc_id: user_id,
        doc_name: name,
        doc_mail: email,
        doc_dental_id: dental_id,
        doc_dob: dob,
        doc_address: address,
        doc_number: number,
        doc_gender: gender,
        doc_age: age,
      });
    });
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard?email=" + email);
  }, [user, loading]);

  return (
    <body>
      <div className="Signup_page">
        <form>
          <h1 className="Heading_signup">SIGN-UP FOR DENTIST</h1>
          <hr />
          <div className="container_signup">
            {/* <div className="profile_photo">
              <input
                className="signup_inputfield_photo"
                id="image"
                type="file"
                name="Photo"
                placeholder="Photo"
                capture
              />
            </div>
            <br />
            <label className="label_photo" for="Photo">
              <b>Profile Photo</b>
            </label> */}

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

            <label for="dentalid">
              <b>Dental-id</b>
              <input
                className="signup_inputfield_"
                type="text"
                placeholder="Enter your Dental-id"
                name="dentalid"
                required
                onChange={(e) => setdental_id(e.target.value)}
              />{" "}
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

            <label for="address">
              <b>Address</b>
              <input
                className="signup_inputfield_"
                type="text"
                placeholder="Enter your Denstistry address"
                name="address"
                required
                onChange={(e) => setAddress(e.target.value)}
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
                pattern="[0-9]"
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
              className="su_button"
              type="submit"
              onClick={signup_dentist}
            >
              Sign Up
            </button>
            <br />
            <br />

            {/* <button className='su_button' type="submit" onClick={signInWithGoogle}>
              Sign Up with Google
            </button><br/><br/> */}

            <div>
              Already have an account? <Link to="/sign_in">Login</Link> now.
            </div>
          </div>
        </form>
      </div>
      <br />
    </body>
  );
}

export default Signup_dentist;
