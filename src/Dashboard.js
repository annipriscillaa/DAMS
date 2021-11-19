import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import "./schedular.js";
import "./scheduler.css";
import { auth, db, logout } from "./firebase1";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SidebarContent } from "react-pro-sidebar";
import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  query,
  where,
  onSnapshot,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "./firebase1";

//import icons from react icons
import { FaCalendar, FaCalendarCheck, FaStar, FaUser } from "react-icons/fa";
import {
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiSettings,
} from "react-icons/fi";

import "react-pro-sidebar/dist/css/styles.css";

function Dashboard() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const fetchUserName = async () => {
    try {
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/signin_general");
    fetchUserName();
  }, [user, loading]);

  const queryParams = new URLSearchParams(window.location.search);

  const email = queryParams.get("email");

  const [info, setInfo] = useState([]);

  var doc_name="";
  var doc_email="";
  var doc_id="";

  useEffect(
    () =>
      onSnapshot(collection(db, "doc"), (snapshot) =>
        setInfo(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  const func = (
    email,
    name,
    id,
    mon1,
    mon2,
    mon3,
    tue1,
    tue2,
    tue3,
    wed1,
    wed2,
    wed3,
    thu1,
    thu2,
    thu3,
    fri1,
    fri2,
    fri3,
    sat1,
    sat2,
    sat3,
    sun1,
    sun2,
    sun3,
    mon1_bkd,
    mon2_bkd,
    mon3_bkd,
    tue1_bkd,
    tue2_bkd,
    tue3_bkd,
    wed1_bkd,
    wed2_bkd,
    wed3_bkd,
    thu1_bkd,
    thu2_bkd,
    thu3_bkd,
    fri1_bkd,
    fri2_bkd,
    fri3_bkd,
    sat1_bkd,
    sat2_bkd,
    sat3_bkd,
    sun1_bkd,
    sun2_bkd,
    sun3_bkd
  ) => {
    // var id = document.getElementById("mon_a");
    doc_name = name;
    doc_email = email;
    doc_id = id;
    var mon_a = document.getElementById("mon_a");
    var mon_b = document.getElementById("mon_b");
    var mon_c = document.getElementById("mon_c");

    var tue_a = document.getElementById("tue_a");
    var tue_b = document.getElementById("tue_b");
    var tue_c = document.getElementById("tue_c");

    var wed_a = document.getElementById("wed_a");
    var wed_b = document.getElementById("wed_b");
    var wed_c = document.getElementById("wed_c");

    var thu_a = document.getElementById("thu_a");
    var thu_b = document.getElementById("thu_b");
    var thu_c = document.getElementById("thu_c");

    var fri_a = document.getElementById("fri_a");
    var fri_b = document.getElementById("fri_b");
    var fri_c = document.getElementById("fri_c");

    var sat_a = document.getElementById("sat_a");
    var sat_b = document.getElementById("sat_b");
    var sat_c = document.getElementById("sat_c");

    var sun_a = document.getElementById("sun_a");
    var sun_b = document.getElementById("sun_b");
    var sun_c = document.getElementById("sun_c");

    mon_a.textContent = mon1;
    mon_b.textContent = mon2;
    mon_c.textContent = mon3;

    tue_a.textContent = tue1;
    tue_b.textContent = tue2;
    tue_c.textContent = tue3;

    wed_a.textContent = wed1;
    wed_b.textContent = wed2;
    wed_c.textContent = wed3;

    thu_a.textContent = thu1;
    thu_b.textContent = thu2;
    thu_c.textContent = thu3;

    fri_a.textContent = fri1;
    fri_b.textContent = fri2;
    fri_c.textContent = fri3;

    sat_a.textContent = sat1;
    sat_b.textContent = sat2;
    sat_c.textContent = sat3;

    sun_a.textContent = sun1;
    sun_b.textContent = sun2;
    sun_c.textContent = sun3;

    if (mon1 !== undefined) {
      if (mon1_bkd === false) {
        mon_a.value = id;
        mon_a.style.backgroundColor = "#57CC99"; //green
      } else {
        mon_a.style.backgroundColor = "#FE8F8F"; //red
        mon_a.value = undefined;
      }
    } else {
      mon_a.style.backgroundColor = "#423F3E"; //black
      mon_a.value = undefined;
    }

    if (mon2 !== undefined) {
      if (mon2_bkd === false) {
        mon_b.value = id;
        mon_b.style.backgroundColor = "#57CC99";
      } else {
        mon_b.style.backgroundColor = "#FE8F8F";
        mon_b.value = undefined;
      }
    } else {
      mon_b.style.backgroundColor = "#423F3E";
      mon_b.value = undefined;
    }

    if (mon3 !== undefined) {
      if (mon3_bkd === false) {
        mon_c.value = id;
        mon_c.style.backgroundColor = "#57CC99";
      } else {
        mon_c.style.backgroundColor = "#FE8F8F";
        mon_c.value = undefined;
      }
    } else {
      mon_c.style.backgroundColor = "#423F3E";
      mon_c.value = undefined;
    }

    if (tue1 !== undefined) {
      if (tue1_bkd === false) {
        tue_a.value = id;
        tue_a.style.backgroundColor = "#57CC99";
      } else {
        tue_a.style.backgroundColor = "#FE8F8F";
        tue_a.value = undefined;
      }
    } else {
      tue_a.style.backgroundColor = "#423F3E";
      tue_a.value = undefined;
    }

    if (tue2 !== undefined) {
      if (tue2_bkd === false) {
        tue_b.value = id;
        tue_b.style.backgroundColor = "#57CC99";
      } else {
        tue_b.style.backgroundColor = "#FE8F8F";
        tue_b.value = undefined;
      }
    } else {
      tue_b.style.backgroundColor = "#423F3E";
      tue_b.value = undefined;
    }

    if (tue3 !== undefined) {
      if (tue3_bkd === false) {
        tue_c.value = id;
        tue_c.style.backgroundColor = "#57CC99";
      } else {
        tue_c.style.backgroundColor = "#FE8F8F";
        tue_c.value = undefined;
      }
    } else {
      tue_c.style.backgroundColor = "#423F3E";
      tue_c.value = undefined;
    }

    if (wed1 !== undefined) {
      if (wed1_bkd === false) {
        wed_a.value = id;
        wed_a.style.backgroundColor = "#57CC99";
      } else {
        wed_a.style.backgroundColor = "#FE8F8F";
        wed_a.value = undefined;
      }
    } else {
      wed_a.style.backgroundColor = "#423F3E";
      wed_a.value = undefined;
    }

    if (wed2 !== undefined) {
      if (wed2_bkd === false) {
        wed_b.value = id;
        wed_b.style.backgroundColor = "#57CC99";
      } else {
        wed_b.style.backgroundColor = "#FE8F8F";
        wed_b.value = undefined;
      }
    } else {
      wed_b.style.backgroundColor = "#423F3E";
      wed_b.value = undefined;
    }

    if (wed3 !== undefined) {
      if (wed3_bkd === false) {
        wed_c.value = id;
        wed_c.style.backgroundColor = "#57CC99";
      } else {
        wed_c.style.backgroundColor = "#FE8F8F";
        wed_c.value = undefined;
      }
    } else {
      wed_c.style.backgroundColor = "#423F3E";
      wed_c.value = undefined;
    }

    if (thu1 !== undefined) {
      if (thu1_bkd === false) {
        thu_a.value = id;
        thu_a.style.backgroundColor = "#57CC99";
      } else {
        thu_a.style.backgroundColor = "#FE8F8F";
        thu_a.value = undefined;
      }
    } else {
      thu_a.style.backgroundColor = "#423F3E";
      thu_a.value = undefined;
    }

    if (thu2 !== undefined) {
      if (thu2_bkd === false) {
        thu_b.value = id;
        thu_b.style.backgroundColor = "#57CC99";
      } else {
        thu_b.style.backgroundColor = "#FE8F8F";
        thu_b.value = undefined;
      }
    } else {
      thu_b.style.backgroundColor = "#423F3E";
      thu_b.value = undefined;
    }

    if (thu3 !== undefined) {
      if (thu3_bkd === false) {
        thu_c.value = id;
        thu_c.style.backgroundColor = "#57CC99";
      } else {
        thu_c.style.backgroundColor = "#FE8F8F";
        thu_c.value = undefined;
      }
    } else {
      thu_c.style.backgroundColor = "#423F3E";
      thu_c.value = undefined;
    }

    if (fri1 !== undefined) {
      if (fri1_bkd === false) {
        fri_a.value = id;
        fri_a.style.backgroundColor = "#57CC99";
      } else {
        fri_a.style.backgroundColor = "#FE8F8F";
        fri_a.value = undefined;
      }
    } else {
      fri_a.style.backgroundColor = "#423F3E";
      fri_a.value = undefined;
    }

    if (fri2 !== undefined) {
      if (fri2_bkd === false) {
        fri_b.value = id;
        fri_b.style.backgroundColor = "#57CC99";
      } else {
        fri_b.style.backgroundColor = "#FE8F8F";
        fri_b.value = undefined;
      }
    } else {
      fri_b.style.backgroundColor = "#423F3E";
      fri_b.value = undefined;
    }

    if (fri3 !== undefined) {
      if (fri3_bkd === false) {
        fri_c.value = id;
        fri_c.style.backgroundColor = "#57CC99";
      } else {
        fri_c.style.backgroundColor = "#FE8F8F";
        fri_c.value = undefined;
      }
    } else {
      fri_c.style.backgroundColor = "#423F3E";
      fri_c.value = undefined;
    }

    if (sat1 !== undefined) {
      if (sat1_bkd === false) {
        sat_a.value = id;
        sat_a.style.backgroundColor = "#57CC99";
      } else {
        sat_a.style.backgroundColor = "#FE8F8F";
        sat_a.value = undefined;
      }
    } else {
      sat_a.style.backgroundColor = "#423F3E";
      sat_a.value = undefined;
    }

    if (sat2 !== undefined) {
      if (sat2_bkd === false) {
        sat_b.value = id;
        sat_b.style.backgroundColor = "#57CC99";
      } else {
        sat_b.style.backgroundColor = "#FE8F8F";
        sat_b.value = undefined;
      }
    } else {
      sat_b.style.backgroundColor = "#423F3E";
      sat_b.value = undefined;
    }

    if (sat3 !== undefined) {
      if (sat3_bkd === false) {
        sat_c.value = id;
        sat_c.style.backgroundColor = "#57CC99";
      } else {
        sat_c.style.backgroundColor = "#FE8F8F";
        sat_c.value = undefined;
      }
    } else {
      sat_c.style.backgroundColor = "#423F3E";
      sat_c.value = undefined;
    }

    if (sun1 !== undefined) {
      if (sun1_bkd === false) {
        sun_a.value = id;
        sun_a.style.backgroundColor = "#57CC99";
      } else {
        sun_a.style.backgroundColor = "#FE8F8F";
        sun_a.value = undefined;
      }
    } else {
      sun_a.style.backgroundColor = "#423F3E";
      sun_a.value = undefined;
    }

    if (sun2 !== undefined) {
      if (sun2_bkd === false) {
        sun_b.value = id;
        sun_b.style.backgroundColor = "#57CC99";
      } else {
        sun_b.style.backgroundColor = "#FE8F8F";
        sun_b.value = undefined;
      }
    } else {
      sun_b.style.backgroundColor = "#423F3E";
      sun_b.value = undefined;
    }

    if (sun3 !== undefined) {
      if (sun3_bkd === false) {
        sun_c.value = id;
        sun_c.style.backgroundColor = "#57CC99";
      } else {
        sun_c.style.backgroundColor = "#FE8F8F";
        sun_c.value = undefined;
      }
    } else {
      sun_c.style.backgroundColor = "#423F3E";
      sun_c.value = undefined;
    }
  };

  const book_mon_a = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("mon_a");
    var date = document.getElementById("mon_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        mon_1_name: doc_name,
        mon_1_email: doc_email,
        mon_1_time: det.textContent,
        mon_1_date: date.value,
        mon_1_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("mon_a");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_m1_req: true,
      doc_m1_prob: a.value,
    });
  };

  const book_mon_b = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("mon_b");
    var date = document.getElementById("mon_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        mon_2_name: doc_name,
        mon_2_email: doc_email,
        mon_2_time: det.textContent,
        mon_2_date: date.value,
        mon_2_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("mon_b");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_m2_req: true,
      doc_m2_prob: a.value,
    });
  };

  const book_mon_c = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("mon_c");
    var date = document.getElementById("mon_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        mon_3_name: doc_name,
        mon_3_email: doc_email,
        mon_3_time: det.textContent,
        mon_3_date: date.value,
        mon_3_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("mon_c");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_m3_req: true,
      doc_m3_prob: a.value,
    });
  };

  const book_tue_a = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("tue_a");
    var date = document.getElementById("tue_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        tue_1_name: doc_name,
        tue_1_email: doc_email,
        tue_1_time: det.textContent,
        tue_1_date: date.value,
        tue_1_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("tue_a");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_tu1_req: true,
      doc_tu1_prob: a.value,
    });
  };

  const book_tue_b = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("tue_b");
    var date = document.getElementById("tue_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        tue_2_name: doc_name,
        tue_2_email: doc_email,
        tue_2_time: det.textContent,
        tue_2_date: date.value,
        tue_2_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("tue_b");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_tu2_req: true,
      doc_tu2_prob: a.value,
    });
  };

  const book_tue_c = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("tue_c");
    var date = document.getElementById("tue_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        tue_3_name: doc_name,
        tue_3_email: doc_email,
        tue_3_time: det.textContent,
        tue_3_date: date.value,
        tue_3_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("tue_c");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_tu3_req: true,
      doc_tu3_prob: a.value,
    });
  };

  const book_wed_a = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("wed_a");
    var date = document.getElementById("wed_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        wed_1_name: doc_name,
        wed_1_email: doc_email,
        wed_1_time: det.textContent,
        wed_1_date: date.value,
        wed_1_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("wed_a");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_w1_req: true,
      doc_w1_prob: a.value,
    });
  };

  const book_wed_b = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("wed_b");
    var date = document.getElementById("wed_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        wed_2_name: doc_name,
        wed_2_email: doc_email,
        wed_2_time: det.textContent,
        wed_2_date: date.value,
        wed_2_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("wed_b");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_w2_req: true,
      doc_w2_prob: a.value,
    });
  };

  const book_wed_c = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("wed_c");
    var date = document.getElementById("wed_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        wed_3_name: doc_name,
        wed_3_email: doc_email,
        wed_3_time: det.textContent,
        wed_3_date: date.value,
        wed_3_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("wed_c");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_w3_req: true,
      doc_w3_prob: a.value,
    });
  };

  const book_thu_a = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("thu_a");
    var date = document.getElementById("thu_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        thu_1_name: doc_name,
        thu_1_email: doc_email,
        thu_1_time: det.textContent,
        thu_1_date: date.value,
        thu_1_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("thu_a");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_th1_req: true,
      doc_th1_prob: a.value,
    });
  };

  const book_thu_b = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("thu_b");
    var date = document.getElementById("thu_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        thu_2_name: doc_name,
        thu_2_email: doc_email,
        thu_2_time: det.textContent,
        thu_2_date: date.value,
        thu_2_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("thu_b");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_th2_req: true,
      doc_th2_prob: a.value,
    });
  };

  const book_thu_c = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("thu_c");
    var date = document.getElementById("thu_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        thu_3_name: doc_name,
        thu_3_email: doc_email,
        thu_3_time: det.textContent,
        thu_3_date: date.value,
        thu_3_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("thu_c");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_th3_req: true,
      doc_th3_prob: a.value,
    });
  };

  const book_fri_a = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("fri_a");
    var date = document.getElementById("fri_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        fri_1_name: doc_name,
        fri_1_email: doc_email,
        fri_1_time: det.textContent,
        fri_1_date: date.value,
        fri_1_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("fri_a");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_f1_req: true,
      doc_f1_prob: a.value,
    });
  };

  const book_fri_b = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("fri_b");
    var date = document.getElementById("fri_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        fri_2_name: doc_name,
        fri_2_email: doc_email,
        fri_2_time: det.textContent,
        fri_2_date: date.value,
        fri_2_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("fri_b");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_f2_req: true,
      doc_f2_prob: a.value,
    });
  };

  const book_fri_c = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("fri_c");
    var date = document.getElementById("fri_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        fri_3_name: doc_name,
        fri_3_email: doc_email,
        fri_3_time: det.textContent,
        fri_3_date: date.value,
        fri_3_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("fri_c");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_f3_req: true,
      doc_f3_prob: a.value,
    });
  };

  const book_sat_a = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("sat_a");
    var date = document.getElementById("sat_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        sat_1_name: doc_name,
        sat_1_email: doc_email,
        sat_1_time: det.textContent,
        sat_1_date: date.value,
        sat_1_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("sat_a");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_sa1_req: true,
      doc_sa1_prob: a.value,
    });
  };

  const book_sat_b = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("sat_b");
    var date = document.getElementById("sat_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        sat_2_name: doc_name,
        sat_2_email: doc_email,
        sat_2_time: det.textContent,
        sat_2_date: date.value,
        sat_2_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("sat_b");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_sa2_req: true,
      doc_sa2_prob: a.value,
    });
  };

  const book_sat_c = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("sat_c");
    var date = document.getElementById("sat_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        sat_3_name: doc_name,
        sat_3_email: doc_email,
        sat_3_time: det.textContent,
        sat_3_date: date.value,
        sat_3_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("sat_c");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_sa3_req: true,
      doc_sa3_prob: a.value,
    });
  };

  const book_sun_a = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("sun_a");
    var date = document.getElementById("sun_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        sun_1_name: doc_name,
        sun_1_email: doc_email,
        sun_1_time: det.textContent,
        sun_1_date: date.value,
        sun_1_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("sun_a");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_su1_req: true,
      doc_su1_prob: a.value,
    });
  };

  const book_sun_b = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("sun_b");
    var date = document.getElementById("sun_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        sun_2_name: doc_name,
        sun_2_email: doc_email,
        sun_2_time: det.textContent,
        sun_2_date: date.value,
        sun_2_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("sun_b");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_su2_req: true,
      doc_su2_prob: a.value,
    });
  };

  const book_sun_c = () => {
    var user = auth.currentUser.uid;
    var det = document.getElementById("sun_c");
    var date = document.getElementById("sun_date");
    if (det.value === "undefined" || det.value === ""){
      alert("Slot not set yet, please try another slot that is set/not booked");
    }
    else{
      updateDoc(doc(db, "gn_user_doc", user), {
        sun_3_name: doc_name,
        sun_3_email: doc_email,
        sun_3_time: det.textContent,
        sun_3_date: date.value,
        sun_3_id: det.value
      });
      alert("booking request has been sent please donot click on the same button again")
    }

    var f = document.getElementById("sun_c");
    var a = document.getElementById("describe_prob");

    updateDoc(doc(db, "doc", f.value), {
      doc_su3_req: true,
      doc_su3_prob: a.value,
    });
  };


  return (
    <div>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarContent>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "DAMS" : "DAMS"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
            <Menu iconShape="square">
              <MenuItem icon={<FaUser />}>
                <Link to={"/profile_pg_gen?email=" + email}>Profile</Link>
              </MenuItem>
              <MenuItem icon={<FaCalendar />}>
                <Link to={"/appointments_gen?email=" + email}>Appointments</Link>
              </MenuItem>
              <MenuItem icon={<FaCalendarCheck />}>Follow-Ups</MenuItem>
              <MenuItem icon={<FaStar />}>Reviews</MenuItem>
              <MenuItem icon={<FiSettings />}>
                <Link to={"/settings?email=" + email}>Settings</Link>
              </MenuItem>
              <MenuItem icon={<FaCalendar />}>
                <Link to={"/schedular?email=" + email}>Scheduler</Link>
              </MenuItem>
              <button className="dashboard__btn" onClick={logout}>
                <MenuItem icon={<FiLogOut />}>
                  <button
                    className="dashboard__btn"
                    type="submit"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </MenuItem>
              </button>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>

      <div className="dsh_main_content">
        <div className="dsh_title">
          <h1>Welcome To DAMS</h1>
        </div>
        <div className="dsh_doc_list_main">
          {info.map((doc) => (
            <div className="dsh_doc_list">
              <div className="dsh_doc_vall">
                <input
                  className="dsh_doc_val"
                  name="name"
                  type="text"
                  value={doc.doc_name}
                ></input>
              </div>
              <div className="dsh_doc_button">
                <button
                  className="dsh_schedule_button"
                  type="submit"
                  onClick={() =>
                    func(
                      doc.doc_mail,
                      doc.doc_name,
                      doc.doc_id,
                      doc.doc_mon_1,
                      doc.doc_mon_2,
                      doc.doc_mon_3,
                      doc.doc_tue_1,
                      doc.doc_tue_2,
                      doc.doc_tue_3,
                      doc.doc_wed_1,
                      doc.doc_wed_2,
                      doc.doc_wed_3,
                      doc.doc_thu_1,
                      doc.doc_thu_2,
                      doc.doc_thu_3,
                      doc.doc_fri_1,
                      doc.doc_fri_2,
                      doc.doc_fri_3,
                      doc.doc_sat_1,
                      doc.doc_sat_2,
                      doc.doc_sat_3,
                      doc.doc_sun_1,
                      doc.doc_sun_2,
                      doc.doc_sun_3,
                      doc.doc_m1_bkd,
                      doc.doc_m2_bkd,
                      doc.doc_m3_bkd,
                      doc.doc_tu1_bkd,
                      doc.doc_tu2_bkd,
                      doc.doc_tu3_bkd,
                      doc.doc_w1_bkd,
                      doc.doc_w2_bkd,
                      doc.doc_w3_bkd,
                      doc.doc_th1_bkd,
                      doc.doc_th2_bkd,
                      doc.doc_th3_bkd,
                      doc.doc_f1_bkd,
                      doc.doc_f2_bkd,
                      doc.doc_f3_bkd,
                      doc.doc_sa1_bkd,
                      doc.doc_sa2_bkd,
                      doc.doc_sa3_bkd,
                      doc.doc_su1_bkd,
                      doc.doc_su2_bkd,
                      doc.doc_su3_bkd
                    )
                  }
                >
                  BOOK
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="dsh_doc_schedule">
          <div className="dsh_user_input">
            <textarea
              id="describe_prob"
              placeholder="Describe your problem here"
              className="dsh_user_input_box"
            ></textarea>
          </div>

          <table className="dsh_main_table">
            <tr>
              <th>DAY</th>
              <th>SCHEDULE</th>
              <th>DATE</th>
            </tr>

            <tr>
              <td>Monday</td>
              <td>
                <table>
                  <tr>
                    <td>
                      <button
                        className="dsh_time"
                        id="mon_a"
                        onClick={book_mon_a}
                      ></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="mon_b" onClick={book_mon_b}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="mon_c" onClick={book_mon_c}></button>
                    </td>
                  </tr>
                </table>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-18" id="mon_date"></input>
              </td>
            </tr>

            <tr>
              <td>Tuesday</td>
              <td>
                <tabl>
                  <tr>
                    <td>
                      <button className="dsh_time" id="tue_a" onClick={book_tue_a}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="tue_b" onClick={book_tue_b}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="tue_c" onClick={book_tue_c}></button>
                    </td>
                  </tr>
                </tabl>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-19" id="tue_date"></input>
              </td>
            </tr>

            <tr>
              <td>Wednesday</td>
              <td>
                <tabl>
                  <tr>
                    <td>
                      <button className="dsh_time" id="wed_a" onClick={book_wed_a}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="wed_b" onClick={book_wed_b}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="wed_c" onClick={book_wed_c}></button>
                    </td>
                  </tr>
                </tabl>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-20" id="wed_date"></input>
              </td>
            </tr>

            <tr>
              <td>Thursday</td>
              <td>
                <tabl>
                  <tr>
                    <td>
                      <button className="dsh_time" id="thu_a" onClick={book_thu_a}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="thu_b" onClick={book_thu_b}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="thu_c" onClick={book_thu_c}></button>
                    </td>
                  </tr>
                </tabl>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-21" id="thu_date"></input>
              </td>
            </tr>

            <tr>
              <td>Friday</td>
              <td>
                <tabl>
                  <tr>
                    <td>
                      <button className="dsh_time" id="fri_a" onClick={book_fri_a}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="fri_b" onClick={book_fri_b}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="fri_c" onClick={book_fri_c}></button>
                    </td>
                  </tr>
                </tabl>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-22" id="fri_date"></input>
              </td>
            </tr>

            <tr>
              <td>Saturday</td>
              <td>
                <tabl>
                  <tr>
                    <td>
                      <button className="dsh_time" id="sat_a" onClick={book_sat_a}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="sat_b" onClick={book_sat_b}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="sat_c" onClick={book_sat_c}></button>
                    </td>
                  </tr>
                </tabl>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-16" id="sat_date"></input>
              </td>
            </tr>

            <tr>
              <td>Sunday</td>
              <td>
                <tabl>
                  <tr>
                    <td>
                      <button className="dsh_time" id="sun_a" onClick={book_sun_a}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="sun_b" onClick={book_sun_b}></button>
                    </td>
                    <td>
                      <button className="dsh_time" id="sun_c" onClick={book_sun_c}></button>
                    </td>
                  </tr>
                </tabl>
              </td>
              <td>
                <input type="date" step="7" min="2021-10-17" id="sun_date"></input>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
