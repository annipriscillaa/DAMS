import { React, useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { auth, db, logout } from "./firebase1";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  getFirestore,
  getDoc,
} from "firebase/firestore";
import { handleEdit } from "./util";

import "./profile_page-k.css";

function Profile_page_dentist() {
  const queryParams = new URLSearchParams(window.location.search);

  const email = queryParams.get("email");

  const [info, setInfo] = useState([]);
  console.log(info);
  const q = query(collection(db, "doc"), where("doc_mail", "==", email));

  useEffect(
    () =>
      onSnapshot(q, (snapshot) =>
        setInfo(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  // const q = query(collection(db, "doc"), where("doc_mail", "==", email));
  // const docRef = doc(db, "doc_mail", email);
  // const docSnap = getDoc(docRef);
  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");

  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((q) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });
  //const q = query(collection(db, "doc"), where("doc_mail", "==", email));

  // const docRef = collection(db, "doc");
  // const q = query(docRef, where("doc_mail", "==", email));

  return (
    <div className="pp_main">
      <form>
        <img className="pp_icon" src="icons/user.png" alt="profile_icon"></img>
        <h1 className="pp_Heading">PROFILE</h1>
        <hr />
        <div className="pp_container">
          {info.map((doc) => (
            <div key={doc.doc_id}>
              <div className="pp_box">
                <label for="name">
                  <b>Name</b>
                  <input
                    className="pp_inputfield"
                    type="text"
                    value={doc.doc_name}
                    name="name"
                  ></input>
                  <br />
                </label>

                <button
                  className="pp_Edit"
                  type="submit"
                  onClick={() => handleEdit(doc.doc_id)}
                >
                  Edit
                </button>

                <br />

                <label for="address">
                  <b>Address</b>
                  <input
                    className="pp_inputfield"
                    type="text"
                    value={doc.doc_address}
                    name="address"
                  />
                  <br />
                </label>

                <button className="pp_Edit" type="submit">
                  Edit
                </button>

                <br />

                <label for="age">
                  <b>Age</b>
                  <input
                    className="pp_inputfield"
                    type="number"
                    value={doc.doc_age}
                    name="age"
                  />
                  <br />
                </label>

                <button className="pp_Edit" type="submit">
                  Edit
                </button>

                <br />
              </div>
              <br />
              <br />
              <button className="pp_Update" type="submit">
                Update
              </button>
            </div>
          ))}
        </div>
      </form>
      <br />
    </div>
  );
}

export default Profile_page_dentist;
