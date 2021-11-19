// import React from "react";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app, db, auth } from "./firebase1";
import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import "./appointments_gen.css"

function Appointmentsgen() {

  const queryParams = new URLSearchParams(window.location.search);

  const email = queryParams.get("email");

  const [info, setInfo] = useState([]);
  const q = query(collection(db, "gn_user_doc"), where("gn_user_doc_mail", "==", email));

  useEffect(
    () =>
      onSnapshot(q, (snapshot) =>
        setInfo(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  const c_mon_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      mon_1_name: "",
      mon_1_email: "",
      mon_1_date: "",
      mon_1_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_mon_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      mon_2_name: "",
      mon_2_email: "",
      mon_2_date: "",
      mon_2_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_mon_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      mon_3_name: "",
      mon_3_email: "",
      mon_3_date: "",
      mon_3_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_tue_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      tue_1_name: "",
      tue_1_email: "",
      tue_1_date: "",
      tue_1_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_tue_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      tue_2_name: "",
      tue_2_email: "",
      tue_2_date: "",
      tue_2_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_tue_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      tue_3_name: "",
      tue_3_email: "",
      tue_3_date: "",
      tue_3_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_wed_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      wed_1_name: "",
      wed_1_email: "",
      wed_1_date: "",
      wed_1_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_wed_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      wed_2_name: "",
      wed_2_email: "",
      wed_2_date: "",
      wed_2_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_wed_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      wed_3_name: "",
      wed_3_email: "",
      wed_3_date: "",
      wed_3_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_thu_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      thu_1_name: "",
      thu_1_email: "",
      thu_1_date: "",
      thu_1_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_thu_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      thu_2_name: "",
      thu_2_email: "",
      thu_2_date: "",
      thu_2_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_thu_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      thu_3_name: "",
      thu_3_email: "",
      thu_3_date: "",
      thu_3_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_fri_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      fri_1_name: "",
      fri_1_email: "",
      fri_1_date: "",
      fri_1_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_fri_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      fri_2_name: "",
      fri_2_email: "",
      fri_2_date: "",
      fri_2_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_fri_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      fri_3_name: "",
      fri_3_email: "",
      fri_3_date: "",
      fri_3_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_sat_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      sat_1_name: "",
      sat_1_email: "",
      sat_1_date: "",
      sat_1_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_sat_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      sat_2_name: "",
      sat_2_email: "",
      sat_2_date: "",
      sat_2_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_sat_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      sat_3_name: "",
      sat_3_email: "",
      sat_3_date: "",
      sat_3_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_sun_1 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      sun_1_name: "",
      sun_1_email: "",
      sun_1_date: "",
      sun_1_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_sun_2 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      sun_2_name: "",
      sun_2_email: "",
      sun_2_date: "",
      sun_2_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  const c_sun_3 = () => {
    updateDoc(doc(db, "gn_user_doc", auth.currentUser.uid), {
      sun_3_name: "",
      sun_3_email: "",
      sun_3_date: "",
      sun_3_time: ""
    });
    alert("your appointment has been cancelled successfully");
  }

  return (
    <div className="apg_main">
      <h1 className="apg_title">SCHEDULE</h1>
      {info.map((doc) => (
        <table className="apg_main_table">

          <tr>
            <th className="apg_table_head_cont">DAY</th>
            <th className="apg_table_head_cont">DETAILS</th>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Monday</th>

            <td className="apg_table_cont">
              <div id="mon1_name">{doc.mon_1_name}</div>
              <div id="mon1_time">{doc.mon_1_time}</div>
              <div id="mon1_date">{doc.mon_1_date}</div>
              <div id="mon1_email">{doc.mon_1_email}</div>
              <button id="mon1c" className="apg_btn" onClick={c_mon_1}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="mon2_name">{doc.mon_2_name}</div>
              <div id="mon2_time">{doc.mon_2_time}</div>
              <div id="mon2_date">{doc.mon_2_date}</div>
              <div id="mon2_email">{doc.mon_2_email}</div>
              <button id="mon2c" className="apg_btn" onClick={c_mon_2}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="mon3_name">{doc.mon_3_name}</div>
              <div id="mon3_time">{doc.mon_3_time}</div>
              <div id="mon3_date">{doc.mon_3_date}</div>
              <div id="mon3_email">{doc.mon_3_email}</div>
              <button id="mon3c" className="apg_btn" onClick={c_mon_3}>CANCEL</button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Tuesday</th>

            <td className="apg_table_cont">
              <div id="tue1_name">{doc.tue_1_name}</div>
              <div id="tue1_time">{doc.tue_1_time}</div>
              <div id="tue1_date">{doc.tue_1_date}</div>
              <div id="tue1_email">{doc.tue_1_email}</div>
              <button id="tue1c" className="apg_btn" onClick={c_tue_1}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="tue2_name">{doc.tue_2_name}</div>
              <div id="tue2_time">{doc.tue_2_time}</div>
              <div id="tue2_date">{doc.tue_2_date}</div>
              <div id="tue2_email">{doc.tue_2_email}</div>
              <button id="tue2c" className="apg_btn" onClick={c_tue_2}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="tue3_name">{doc.tue_3_name}</div>
              <div id="tue3_time">{doc.tue_3_time}</div>
              <div id="tue3_date">{doc.tue_3_date}</div>
              <div id="tue3_email">{doc.tue_3_email}</div>
              <button id="tue3c" className="apg_btn" onClick={c_tue_3}>CANCEL</button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Wednesday</th>

            <td className="apg_table_cont">
              <div id="wed1_name">{doc.wed_1_name}</div>
              <div id="wed1_time">{doc.wed_1_time}</div>
              <div id="wed1_date">{doc.wed_1_date}</div>
              <div id="wed1_email">{doc.wed_1_email}</div>
              <button id="wed1c" className="apg_btn" onClick={c_wed_1}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="wed2_name">{doc.wed_2_name}</div>
              <div id="wed2_time">{doc.wed_2_time}</div>
              <div id="wed2_date">{doc.wed_2_date}</div>
              <div id="wed2_email">{doc.wed_2_email}</div>
              <button id="wed2c" className="apg_btn" onClick={c_wed_2}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="wed3_name">{doc.wed_3_name}</div>
              <div id="wed3_time">{doc.wed_3_time}</div>
              <div id="wed3_date">{doc.wed_3_date}</div>
              <div id="wed3_email">{doc.wed_3_email}</div>
              <button id="wed3c" className="apg_btn" onClick={c_wed_3}>CANCEL</button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Thursday</th>

            <td className="apg_table_cont">
              <div id="thu1_name">{doc.thu_1_name}</div>
              <div id="thu1_time">{doc.thu_1_time}</div>
              <div id="thu1_date">{doc.thu_1_date}</div>
              <div id="thu1_email">{doc.thu_1_email}</div>
              <button id="thu1c" className="apg_btn" onClick={c_thu_1}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="thu2_name">{doc.thu_2_name}</div>
              <div id="thu2_time">{doc.thu_2_time}</div>
              <div id="thu2_date">{doc.thu_2_date}</div>
              <div id="thu2_email">{doc.thu_2_email}</div>
              <button id="thu2c" className="apg_btn" onClick={c_thu_2}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="thu3_name">{doc.thu_3_name}</div>
              <div id="thu3_time">{doc.thu_3_time}</div>
              <div id="thu3_date">{doc.thu_3_date}</div>
              <div id="thu3_email">{doc.thu_3_email}</div>
              <button id="thu3c" className="apg_btn" onClick={c_thu_3}>CANCEL</button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Friday</th>

            <td className="apg_table_cont">
              <div id="fri1_name">{doc.fri_1_name}</div>
              <div id="fri1_time">{doc.fri_1_time}</div>
              <div id="fri1_date">{doc.fri_1_date}</div>
              <div id="fri1_email">{doc.fri_1_email}</div>
              <button id="fri1c" className="apg_btn" onClick={c_fri_1}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="fri2_name">{doc.fri_2_name}</div>
              <div id="fri2_time">{doc.fri_2_time}</div>
              <div id="fri2_date">{doc.fri_2_date}</div>
              <div id="fri2_email">{doc.fri_2_email}</div>
              <button id="fri2c" className="apg_btn" onClick={c_fri_2}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="fri3_name">{doc.fri_3_name}</div>
              <div id="fri3_time">{doc.fri_3_time}</div>
              <div id="fri3_date">{doc.fri_3_date}</div>
              <div id="fri3_email">{doc.fri_3_email}</div>
              <button id="fri3c" className="apg_btn" onClick={c_fri_3}>CANCEL</button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Saturday</th>

            <td className="apg_table_cont">
              <div id="sat1_name">{doc.sat_1_name}</div>
              <div id="sat1_time">{doc.sat_1_time}</div>
              <div id="sat1_date">{doc.sat_1_date}</div>
              <div id="sat1_email">{doc.sat_1_email}</div>
              <button id="sat1c" className="apg_btn" onClick={c_sat_1}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="sat2_name">{doc.sat_2_name}</div>
              <div id="sat2_time">{doc.sat_2_time}</div>
              <div id="sat2_date">{doc.sat_2_date}</div>
              <div id="sat2_email">{doc.sat_2_email}</div>
              <button id="sat2c" className="apg_btn" onClick={c_sat_2}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="sat3_name">{doc.sat_3_name}</div>
              <div id="sat3_time">{doc.sat_3_time}</div>
              <div id="sat3_date">{doc.sat_3_date}</div>
              <div id="sat3_email">{doc.sat_3_email}</div>
              <button id="sat3c" className="apg_btn" onClick={c_sat_3}>CANCEL</button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Sunday</th>

            <td className="apg_table_cont">
              <div id="sun1_name">{doc.sun_1_name}</div>
              <div id="sun1_time">{doc.sun_1_time}</div>
              <div id="sun1_date">{doc.sun_1_date}</div>
              <div id="sun1_email">{doc.sun_1_email}</div>
              <button id="sun1c" className="apg_btn" onClick={c_sun_1}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="sun2_name">{doc.sun_2_name}</div>
              <div id="sun2_time">{doc.sun_2_time}</div>
              <div id="sun2_date">{doc.sun_2_date}</div>
              <div id="sun2_email">{doc.sun_2_email}</div>
              <button id="sun2c" className="apg_btn" onClick={c_sun_2}>CANCEL</button>
            </td>

            <td className="apg_table_cont">
              <div id="sun3_name">{doc.sun_3_name}</div>
              <div id="sun3_time">{doc.sun_3_time}</div>
              <div id="sun3_date">{doc.sun_3_date}</div>
              <div id="sun3_email">{doc.sun_3_email}</div>
              <button id="sun3c" className="apg_btn" onClick={c_sun_3}>CANCEL</button>
            </td>

          </tr>
        </table>
      ))}
    </div>
  )
}

export default Appointmentsgen;
