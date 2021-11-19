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
import "./appointments_pg.css";

function Appointment_pg() {
  const queryParams = new URLSearchParams(window.location.search);

  const email = queryParams.get("email");

  const [info, setInfo] = useState([]);
  const q = query(collection(db, "doc"), where("doc_mail", "==", email));

  useEffect(
    () =>
      onSnapshot(q, (snapshot) =>
        setInfo(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  const accept1 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_m1_req: false,
      doc_m1_bkd: true,
    });
  };

  const accept2 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_m2_req: false,
      doc_m2_bkd: true,
    });
  };

  const accept3 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_m3_req: false,
      doc_m3_bkd: true,
    });
  };

  const accept4 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_tu1_req: false,
      doc_tu1_bkd: true,
    });
  };

  const accept5 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_tu2_req: false,
      doc_tu2_bkd: true,
    });
  };

  const accept6 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_tu3_req: false,
      doc_tu3_bkd: true,
    });
  };

  const accept7 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_w1_req: false,
      doc_w1_bkd: true,
    });
  };

  const accept8 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_w2_req: false,
      doc_w2_bkd: true,
    });
  };

  const accept9 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_w3_req: false,
      doc_w3_bkd: true,
    });
  };

  const accept10 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_th1_req: false,
      doc_th1_bkd: true,
    });
  };

  const accept11 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_th2_req: false,
      doc_th2_bkd: true,
    });
  };

  const accept12 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_th3_req: false,
      doc_th3_bkd: true,
    });
  };

  const accept13 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_f1_req: false,
      doc_f1_bkd: true,
    });
  };

  const accept14 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_f2_req: false,
      doc_f2_bkd: true,
    });
  };

  const accept15 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_f3_req: false,
      doc_f3_bkd: true,
    });
  };

  const accept16 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_sa1_req: false,
      doc_sa1_bkd: true,
    });
  };

  const accept17 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_sa2_req: false,
      doc_sa2_bkd: true,
    });
  };

  const accept18 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_sa3_req: false,
      doc_sa3_bkd: true,
    });
  };

  const accept19 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_su1_req: false,
      doc_su1_bkd: true,
    });
  };

  const accept20 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_su2_req: false,
      doc_su2_bkd: true,
    });
  };

  const accept21 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_su3_req: false,
      doc_su3_bkd: true,
    });
  };

  const decline1 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_m1_req: false,
      doc_m1_bkd: false,
    });
  };

  const decline2 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_m2_req: false,
      doc_m2_bkd: false,
    });
  };

  const decline3 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_m3_req: false,
      doc_m3_bkd: false,
    });
  };

  const decline4 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_tu1_req: false,
      doc_tu1_bkd: false,
    });
  };

  const decline5 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_tu2_req: false,
      doc_tu2_bkd: false,
    });
  };

  const decline6 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_tu3_req: false,
      doc_tu3_bkd: false,
    });
  };

  const decline7 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_w1_req: false,
      doc_w1_bkd: false,
    });
  };

  const decline8 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_w2_req: false,
      doc_w2_bkd: false,
    });
  };

  const decline9 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_w3_req: false,
      doc_w3_bkd: false,
    });
  };

  const decline10 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_th1_req: false,
      doc_th1_bkd: false,
    });
  };

  const decline11 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_th2_req: false,
      doc_th2_bkd: false,
    });
  };

  const decline12 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_th3_req: false,
      doc_th3_bkd: false,
    });
  };

  const decline13 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_f1_req: false,
      doc_f1_bkd: false,
    });
  };

  const decline14 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_f2_req: false,
      doc_f2_bkd: false,
    });
  };

  const decline15 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_f3_req: false,
      doc_f3_bkd: false,
    });
  };

  const decline16 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_sa1_req: false,
      doc_sa1_bkd: false,
    });
  };

  const decline17 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_sa2_req: false,
      doc_sa2_bkd: false,
    });
  };

  const decline18 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_sa3_req: false,
      doc_sa3_bkd: false,
    });
  };

  const decline19 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_su1_req: false,
      doc_su1_bkd: false,
    });
  };

  const decline20 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_su2_req: false,
      doc_su2_bkd: false,
    });
  };

  const decline21 = () => {
    var f = auth.currentUser.uid;

    updateDoc(doc(db, "doc", f), {
      doc_su3_req: false,
      doc_su3_bkd: false,
    });
  };

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
              <div id="mon1_name"></div>
              <div id="mon1_time">TIME:&nbsp;{doc.doc_mon_1}</div>
              <div id="mon1_date"></div>
              <div id="mon1_email"></div>
              <button
                id="mon1c"
                className="apg_d_btn_acc"
                onClick={() => accept1()}
              >
                ACCEPT
              </button>

              <br />
              <button
                id="mon1c"
                className="apg_d_btn_dec"
                onClick={() => decline1()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="mon2_name"></div>
              <div id="mon2_time">TIME:&nbsp;{doc.doc_mon_2}</div>
              <div id="mon2_email"></div>
              <button
                id="mon2c"
                className="apg_d_btn_acc"
                onClick={() => accept2()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="mon2c"
                className="apg_d_btn_dec"
                onClick={() => decline2()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="mon3_name"></div>
              <div id="mon3_time">TIME:&nbsp;{doc.doc_mon_3}</div>
              <div id="mon3_email"></div>
              <button
                id="mon3c"
                className="apg_d_btn_acc"
                onClick={() => accept3()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="mon3c"
                className="apg_d_btn_dec"
                onClick={() => decline3()}
              >
                DECLINE
              </button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Tuesday</th>

            <td className="apg_table_cont">
              <div id="tue1_name"></div>
              <div id="tue1_time">TIME:&nbsp;{doc.doc_tue_1}</div>
              <div id="tue1_email"></div>
              <button
                id="tue1c"
                className="apg_d_btn_acc"
                onClick={() => accept4()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="tue1c"
                className="apg_d_btn_dec"
                onClick={() => decline4()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="tue2_name"></div>
              <div id="tue2_time">TIME:&nbsp;{doc.doc_tue_2}</div>
              <div id="tue2_email"></div>
              <button
                id="tue2c"
                className="apg_d_btn_acc"
                onClick={() => accept5()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="tue2c"
                className="apg_d_btn_dec"
                onClick={() => decline5()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="tue3_name"></div>
              <div id="tue3_time">TIME:&nbsp;{doc.doc_tue_3}</div>
              <div id="tue3_email"></div>
              <button
                id="tue3c"
                className="apg_d_btn_acc"
                onClick={() => accept6()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="tue3c"
                className="apg_d_btn_dec"
                onClick={() => decline6()}
              >
                DECLINE
              </button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Wednesday</th>

            <td className="apg_table_cont">
              <div id="wed1_name"></div>
              <div id="wed1_time">TIME:&nbsp;{doc.doc_wed_1}</div>
              <div id="wed1_email"></div>
              <button
                id="wed1c"
                className="apg_d_btn_acc"
                onClick={() => accept7()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="wed1c"
                className="apg_d_btn_dec"
                onClick={() => decline7()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="wed2_name"></div>
              <div id="wed2_time">TIME:&nbsp;{doc.doc_wed_2}</div>
              <div id="wed2_email"></div>
              <button
                id="wed2c"
                className="apg_d_btn_acc"
                onClick={() => accept8()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="wed2c"
                className="apg_d_btn_dec"
                onClick={() => decline8()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="wed3_name"></div>
              <div id="wed3_time">TIME:&nbsp;{doc.doc_wed_3}</div>
              <div id="wed3_email"></div>
              <button
                id="wed3c"
                className="apg_d_btn_acc"
                onClick={() => accept9()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="wed3c"
                className="apg_d_btn_dec"
                onClick={() => decline9()}
              >
                DECLINE
              </button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Thursday</th>

            <td className="apg_table_cont">
              <div id="thu1_name"></div>
              <div id="thu1_time">TIME:&nbsp;{doc.doc_thu_1}</div>
              <div id="thu1_email"></div>
              <button
                id="thu1c"
                className="apg_d_btn_acc"
                onClick={() => accept10()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="thu1c"
                className="apg_d_btn_dec"
                onClick={() => decline10()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="thu2_name"></div>
              <div id="thu2_time">TIME:&nbsp;{doc.doc_thu_2}</div>
              <div id="thu2_email"></div>
              <button
                id="thu2c"
                className="apg_d_btn_acc"
                onClick={() => accept11()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="thu2c"
                className="apg_d_btn_dec"
                onClick={() => decline11()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="thu3_name"></div>
              <div id="thu3_time">TIME:&nbsp;{doc.doc_thu_3}</div>
              <div id="thu3_email"></div>
              <button
                id="thu3c"
                className="apg_d_btn_acc"
                onClick={() => accept12()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="thu3c"
                className="apg_d_btn_dec"
                onClick={() => decline12()}
              >
                DECLINE
              </button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Friday</th>

            <td className="apg_table_cont">
              <div id="fri1_name"></div>
              <div id="fri1_time">TIME:&nbsp;{doc.doc_fri_1}</div>
              <div id="fri1_email"></div>
              <button
                id="fri1c"
                className="apg_d_btn_acc"
                onClick={() => accept13()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="fri1c"
                className="apg_d_btn_dec"
                onClick={() => decline13()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="fri2_name"></div>
              <div id="fri2_time">TIME:&nbsp;{doc.doc_fri_2}</div>
              <div id="fri2_email"></div>
              <button
                id="fri2c"
                className="apg_d_btn_acc"
                onClick={() => accept14()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="fri2c"
                className="apg_d_btn_dec"
                onClick={() => decline14()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="fri3_name"></div>
              <div id="fri3_time">TIME:&nbsp;{doc.doc_fri_3}</div>
              <div id="fri3_email"></div>
              <button
                id="fri3c"
                className="apg_d_btn_acc"
                onClick={() => accept15()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="fri3c"
                className="apg_d_btn_dec"
                onClick={() => decline15()}
              >
                DECLINE
              </button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Saturday</th>

            <td className="apg_table_cont">
              <div id="sat1_name"></div>
              <div id="sat1_time">TIME:&nbsp;{doc.doc_sat_1}</div>
              <div id="sat1_email"></div>
              <button
                id="sat1c"
                className="apg_d_btn_acc"
                onClick={() => accept16()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="sat1c"
                className="apg_d_btn_dec"
                onClick={() => decline16()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="sat2_name"></div>
              <div id="sat2_time">TIME:&nbsp;{doc.doc_sat_2}</div>
              <div id="sat2_email"></div>
              <button
                id="sat2c"
                className="apg_d_btn_acc"
                onClick={() => accept17()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="sat2c"
                className="apg_d_btn_dec"
                onClick={() => decline17()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="sat3_name"></div>
              <div id="sat3_time">TIME:&nbsp;{doc.doc_sat_3}</div>
              <div id="sat3_email"></div>
              <button
                id="sat3c"
                className="apg_d_btn_acc"
                onClick={() => accept18()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="sat3c"
                className="apg_d_btn_dec"
                onClick={() => decline18()}
              >
                DECLINE
              </button>
            </td>
          </tr>

          <tr className="apg_row">
            <th className="apg_table_head_cont">Sunday</th>

            <td className="apg_table_cont">
              <div id="sun1_name"></div>
              <div id="sun1_time">TIME:&nbsp;{doc.doc_sun_1}</div>
              <div id="sun1_email"></div>
              <button
                id="sun1c"
                className="apg_d_btn_acc"
                onClick={() => accept19()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="sun1c"
                className="apg_d_btn_dec"
                onClick={() => decline19()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="sun2_name"></div>
              <div id="sun2_time">TIME:&nbsp;{doc.doc_sun_2}</div>
              <div id="sun2_email"></div>
              <button
                id="sun2c"
                className="apg_d_btn_acc"
                onClick={() => accept20()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="sun2c"
                className="apg_d_btn_dec"
                onClick={() => decline20()}
              >
                DECLINE
              </button>
            </td>

            <td className="apg_table_cont">
              <div id="sun3_name"></div>
              <div id="sun3_time">TIME:&nbsp;{doc.doc_sun_3}</div>
              <div id="sun3_email"></div>
              <button
                id="sun3c"
                className="apg_d_btn_acc"
                onClick={() => accept21()}
              >
                ACCEPT
              </button>
              <br />

              <button
                id="sun3c"
                className="apg_d_btn_dec"
                onClick={() => decline21()}
              >
                DECLINE
              </button>
            </td>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default Appointment_pg;
