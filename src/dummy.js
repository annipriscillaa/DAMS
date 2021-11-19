// import React from "react";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebase1";
import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import "./scheduler.css"

function add(a, b, c, d) {
  var w = document.getElementById(a);
  var x = document.getElementById(b);
  var y = document.getElementById(c);
  var z = document.getElementById(d);
  w.readOnly = false;
  x.hidden = true;
  y.hidden = false;
  z.hidden = false;
}

function cancel(a, b, c, d) {
  var w = document.getElementById(a);
  var x = document.getElementById(b);
  var y = document.getElementById(c);
  var z = document.getElementById(d);
  w.hidden = false;
  w.readOnly = true;
  x.hidden = false;
  y.hidden = true;
  z.hidden = true;
}

function Schedular() {
  // const auth = getAuth(app);
  // var user = auth.currentUser;
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [mon_1, set_mon_1] = useState("");
  const [mon_2, set_mon_2] = useState("");
  const [mon_3, set_mon_3] = useState("");
  const [tue_1, set_tue_1] = useState("");
  const [tue_2, set_tue_2] = useState("");
  const [tue_3, set_tue_3] = useState("");
  const [wed_1, set_wed_1] = useState("");
  const [wed_2, set_wed_2] = useState("");
  const [wed_3, set_wed_3] = useState("");
  const [thu_1, set_thu_1] = useState("");
  const [thu_2, set_thu_2] = useState("");
  const [thu_3, set_thu_3] = useState("");
  const [fri_1, set_fri_1] = useState("");
  const [fri_2, set_fri_2] = useState("");
  const [fri_3, set_fri_3] = useState("");
  const [sat_1, set_sat_1] = useState("");
  const [sat_2, set_sat_2] = useState("");
  const [sat_3, set_sat_3] = useState("");
  const [sun_1, set_sun_1] = useState("");
  const [sun_2, set_sun_2] = useState("");
  const [sun_3, set_sun_3] = useState("");

  const fix_mon_1 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_mon_1: mon_1,
    });
  };

  const fix_mon_2 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_mon_2: mon_2,
    });
  };

  const fix_mon_3 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_mon_3: mon_3,
    });
  };

  const fix_tue_1 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_tue_1: tue_1,
    });
  };

  const fix_tue_2 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_tue_2: tue_2,
    });
  };

  const fix_tue_3 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_tue_3: tue_3,
    });
  };

  const fix_wed_1 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_wed_1: wed_1,
    });
  };

  const fix_wed_2 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_wed_2: wed_2,
    });
  };

  const fix_wed_3 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_wed_3: wed_3,
    });
  };

  const fix_thu_1 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_thu_1: thu_1,
    });
  };

  const fix_thu_2 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_thu_2: thu_2,
    });
  };

  const fix_thu_3 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_thu_3: thu_3,
    });
  };

  const fix_fri_1 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_fri_1: fri_1,
    });
  };

  const fix_fri_2 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_fri_2: fri_2,
    });
  };

  const fix_fri_3 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_fri_3: fri_3,
    });
  };

  const fix_sat_1 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_sat_1: sat_1,
    });
  };

  const fix_sat_2 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_sat_2: sat_2,
    });
  };

  const fix_sat_3 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_sat_3: sat_3,
    });
  };

  const fix_sun_1 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_sun_1: sun_1,
    });
  };

  const fix_sun_2 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_sun_2: sun_2,
    });
  };

  const fix_sun_3 = (a, b, c, d) => {
    var user = auth.currentUser.uid;

    var w = document.getElementById(a);
    var x = document.getElementById(b);
    var y = document.getElementById(c);
    var z = document.getElementById(d);
    w.hidden = false;
    w.readOnly = true;
    x.hidden = false;
    y.hidden = true;
    z.hidden = true;

    updateDoc(doc(db, "doc", user), {
      doc_sun_3: sun_3,
    });
  };

  const queryParams = new URLSearchParams(window.location.search);

  const email = queryParams.get("email");

  const [info, setInfo] = useState([]);
  console.log(info);
  const q = query(collection(db, "doc"), where("doc_mail", "==", email));
  console.log(email);

  useEffect(
    () =>
      onSnapshot(q, (snapshot) =>
        setInfo(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  return (
    <div className="sch_box">
    <div class="sch_main_box">
      <div class="sch_title"> <h1>SCHEDULER</h1> </div>
      <div className="sch_main_table_box">
        <table class="sch_main_table">
          {info.map((doc) => (
            <div key={doc.doc_id} className="sch_idontknowwhatthisdivis">

              <tr class="sch_table_content">
                <th>DAY</th>
                <th>SCHEDULE</th>
              </tr>

              <tr className="sch_cont">
                <td className="sch_heads">MONDAY</td>
                <td>
                  <table>
                    <tr>
                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_mon_a1_1"
                                onClick={() =>
                                  add(
                                    "sch_mon_a2_1",
                                    "sch_mon_a1_1",
                                    "sch_mon_a4_1",
                                    "sch_mon_a5_1",
                                    "sch_mon_a3_1"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_mon_a2_1"
                                placeholder={doc.doc_mon_1}
                                onChange={(e) => set_mon_1(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_mon_a3_1"
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_mon_a4_1"
                                onClick={() =>
                                  fix_mon_1(
                                    "sch_mon_a2_1",
                                    "sch_mon_a1_1",
                                    "sch_mon_a4_1",
                                    "sch_mon_a5_1",
                                    "sch_mon_a3_1"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_mon_a5_1"
                                onClick={() =>
                                  cancel(
                                    "sch_mon_a2_1",
                                    "sch_mon_a1_1",
                                    "sch_mon_a4_1",
                                    "sch_mon_a5_1",
                                    "sch_mon_a3_1"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_mon_a1_2"
                                onClick={() =>
                                  add(
                                    "sch_mon_a2_2",
                                    "sch_mon_a1_2",
                                    "sch_mon_a4_2",
                                    "sch_mon_a5_2",
                                    "sch_mon_a3_2"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_mon_a2_2"
                                placeholder={doc.doc_mon_2}
                                onChange={(e) => set_mon_2(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_mon_a3_2"
                                placeholder={doc.doc_mon_2}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_mon_a4_2"
                                onClick={() =>
                                  fix_mon_2(
                                    "sch_mon_a2_2",
                                    "sch_mon_a1_2",
                                    "sch_mon_a4_2",
                                    "sch_mon_a5_2",
                                    "sch_mon_a3_2"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_mon_a5_2"
                                onClick={() =>
                                  cancel(
                                    "sch_mon_a2_2",
                                    "sch_mon_a1_2",
                                    "sch_mon_a4_2",
                                    "sch_mon_a5_2",
                                    "sch_mon_a3_2"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_mon_a1_3"
                                onClick={() =>
                                  add(
                                    "sch_mon_a2_3",
                                    "sch_mon_a1_3",
                                    "sch_mon_a4_3",
                                    "sch_mon_a5_3",
                                    "sch_mon_a3_3"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_mon_a2_3"
                                placeholder={doc.doc_mon_3}
                                onChange={(e) => set_mon_3(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_mon_a3_3"
                                placeholder={doc.doc_mon_2}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_mon_a4_3"
                                onClick={() =>
                                  fix_mon_3(
                                    "sch_mon_a2_3",
                                    "sch_mon_a1_3",
                                    "sch_mon_a4_3",
                                    "sch_mon_a5_3",
                                    "sch_mon_a3_3"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_mon_a5_3"
                                onClick={() =>
                                  cancel(
                                    "sch_mon_a2_3",
                                    "sch_mon_a1_3",
                                    "sch_mon_a4_3",
                                    "sch_mon_a5_3",
                                    "sch_mon_a3_3"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                
              </tr>
              <tr>
                <td className="sch_heads">TUESDAY</td>
                <td>
                  <table>
                    <tr>
                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_tue_a1_1"
                                onClick={() =>
                                  add(
                                    "sch_tue_a2_1",
                                    "sch_tue_a1_1",
                                    "sch_tue_a4_1",
                                    "sch_tue_a5_1",
                                    "sch_tue_a3_1"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_tue_a2_1"
                                placeholder={doc.doc_tue_1}
                                onChange={(e) => set_tue_1(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_tue_a3_1"
                                placeholder={doc.doc_tue_1}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_tue_a4_1"
                                onClick={() =>
                                  fix_tue_1(
                                    "sch_tue_a2_1",
                                    "sch_tue_a1_1",
                                    "sch_tue_a4_1",
                                    "sch_tue_a5_1",
                                    "sch_tue_a3_1"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_tue_a5_1"
                                onClick={() =>
                                  cancel(
                                    "sch_tue_a2_1",
                                    "sch_tue_a1_1",
                                    "sch_tue_a4_1",
                                    "sch_tue_a5_1",
                                    "sch_tue_a3_1"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_tue_a1_2"
                                onClick={() =>
                                  add(
                                    "sch_tue_a2_2",
                                    "sch_tue_a1_2",
                                    "sch_tue_a4_2",
                                    "sch_tue_a5_2",
                                    "sch_tue_a3_2"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_tue_a2_2"
                                onChange={(e) => set_tue_2(e.target.value)}
                                placeholder={doc.doc_tue_2}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_tue_a3_2"
                                placeholder={doc.doc_tue_2}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_tue_a4_2"
                                onClick={() =>
                                  fix_tue_2(
                                    "sch_tue_a2_2",
                                    "sch_tue_a1_2",
                                    "sch_tue_a4_2",
                                    "sch_tue_a5_2",
                                    "sch_tue_a3_2"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_tue_a5_2"
                                onClick={() =>
                                  cancel(
                                    "sch_tue_a2_2",
                                    "sch_tue_a1_2",
                                    "sch_tue_a4_2",
                                    "sch_tue_a5_2",
                                    "sch_tue_a3_2"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_tue_a1_3"
                                onClick={() =>
                                  add(
                                    "sch_tue_a2_3",
                                    "sch_tue_a1_3",
                                    "sch_tue_a4_3",
                                    "sch_tue_a5_3",
                                    "sch_tue_a3_3"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_tue_a2_3"
                                onChange={(e) => set_tue_3(e.target.value)}
                                placeholder={doc.doc_tue_3}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_tue_a3_3"
                                placeholder={doc.doc_tue_3}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_tue_a4_3"
                                onClick={() =>
                                  fix_tue_3(
                                    "sch_tue_a2_3",
                                    "sch_tue_a1_3",
                                    "sch_tue_a4_3",
                                    "sch_tue_a5_3",
                                    "sch_tue_a3_3"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_tue_a5_3"
                                onClick={() =>
                                  cancel(
                                    "sch_tue_a2_3",
                                    "sch_tue_a1_3",
                                    "sch_tue_a4_3",
                                    "sch_tue_a5_3",
                                    "sch_tue_a3_3"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                
              </tr>
              <tr>
                <td className="sch_heads">WEDNESDAY</td>
                <td>
                  <table>
                    <tr>
                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_wed_a1_1"
                                onClick={() =>
                                  add(
                                    "sch_wed_a2_1",
                                    "sch_wed_a1_1",
                                    "sch_wed_a4_1",
                                    "sch_wed_a5_1",
                                    "sch_wed_a3_1"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_wed_a2_1"
                                onChange={(e) => set_wed_1(e.target.value)}
                                placeholder={doc.doc_wed_1}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_wed_a3_1"
                                placeholder={doc.doc_wed_1}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_wed_a4_1"
                                onClick={() =>
                                  fix_wed_1(
                                    "sch_wed_a2_1",
                                    "sch_wed_a1_1",
                                    "sch_wed_a4_1",
                                    "sch_wed_a5_1",
                                    "sch_wed_a3_1"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_wed_a5_1"
                                onClick={() =>
                                  cancel(
                                    "sch_wed_a2_1",
                                    "sch_wed_a1_1",
                                    "sch_wed_a4_1",
                                    "sch_wed_a5_1",
                                    "sch_wed_a3_1"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_wed_a1_2"
                                onClick={() =>
                                  add(
                                    "sch_wed_a2_2",
                                    "sch_wed_a1_2",
                                    "sch_wed_a4_2",
                                    "sch_wed_a5_2",
                                    "sch_wed_a3_2"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_wed_a2_2"
                                onChange={(e) => set_wed_2(e.target.value)}
                                placeholder={doc.doc_wed_2}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_wed_a3_2"
                                placeholder={doc.doc_wed_2}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_wed_a4_2"
                                onClick={() =>
                                  fix_wed_2(
                                    "sch_wed_a2_2",
                                    "sch_wed_a1_2",
                                    "sch_wed_a4_2",
                                    "sch_wed_a5_2",
                                    "sch_wed_a3_2"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_wed_a5_2"
                                onClick={() =>
                                  cancel(
                                    "sch_wed_a2_2",
                                    "sch_wed_a1_2",
                                    "sch_wed_a4_2",
                                    "sch_wed_a5_2",
                                    "sch_wed_a3_2"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_wed_a1_3"
                                onClick={() =>
                                  add(
                                    "sch_wed_a2_3",
                                    "sch_wed_a1_3",
                                    "sch_wed_a4_3",
                                    "sch_wed_a5_3",
                                    "sch_wed_a3_3"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_wed_a2_3"
                                placeholder={doc.doc_wed_3}
                                onChange={(e) => set_wed_3(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_wed_a3_3"
                                placeholder={doc.doc_wed_3}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_wed_a4_3"
                                onClick={() =>
                                  fix_wed_3(
                                    "sch_wed_a2_3",
                                    "sch_wed_a1_3",
                                    "sch_wed_a4_3",
                                    "sch_wed_a5_3",
                                    "sch_wed_a3_3"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_wed_a5_3"
                                onClick={() =>
                                  cancel(
                                    "sch_wed_a2_3",
                                    "sch_wed_a1_3",
                                    "sch_wed_a4_3",
                                    "sch_wed_a5_3",
                                    "sch_wed_a3_3"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                
              </tr>
              <tr>
                <td className="sch_heads">THURSDAY</td>
                <td>
                  <table>
                    <tr>
                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_thu_a1_1"
                                onClick={() =>
                                  add(
                                    "sch_thu_a2_1",
                                    "sch_thu_a1_1",
                                    "sch_thu_a4_1",
                                    "sch_thu_a5_1",
                                    "sch_thu_a3_1"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_thu_a2_1"
                                placeholder={doc.doc_thu_1}
                                onChange={(e) => set_thu_1(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_thu_a3_1"
                                placeholder={doc.doc_thu_1}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_thu_a4_1"
                                onClick={() =>
                                  fix_thu_1(
                                    "sch_thu_a2_1",
                                    "sch_thu_a1_1",
                                    "sch_thu_a4_1",
                                    "sch_thu_a5_1",
                                    "sch_thu_a3_1"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_thu_a5_1"
                                onClick={() =>
                                  cancel(
                                    "sch_thu_a2_1",
                                    "sch_thu_a1_1",
                                    "sch_thu_a4_1",
                                    "sch_thu_a5_1",
                                    "sch_thu_a3_1"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_thu_a1_2"
                                onClick={() =>
                                  add(
                                    "sch_thu_a2_2",
                                    "sch_thu_a1_2",
                                    "sch_thu_a4_2",
                                    "sch_thu_a5_2",
                                    "sch_thu_a3_2"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_thu_a2_2"
                                placeholder={doc.doc_thu_2}
                                onChange={(e) => set_thu_2(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_thu_a3_2"
                                placeholder={doc.doc_thu_2}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_thu_a4_2"
                                onClick={() =>
                                  fix_thu_2(
                                    "sch_thu_a2_2",
                                    "sch_thu_a1_2",
                                    "sch_thu_a4_2",
                                    "sch_thu_a5_2",
                                    "sch_thu_a3_2"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_thu_a5_2"
                                onClick={() =>
                                  cancel(
                                    "sch_thu_a2_2",
                                    "sch_thu_a1_2",
                                    "sch_thu_a4_2",
                                    "sch_thu_a5_2",
                                    "sch_thu_a3_2"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_thu_a1_3"
                                onClick={() =>
                                  add(
                                    "sch_thu_a2_3",
                                    "sch_thu_a1_3",
                                    "sch_thu_a4_3",
                                    "sch_thu_a5_3",
                                    "sch_thu_a3_3"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_thu_a2_3"
                                onChange={(e) => set_thu_3(e.target.value)}
                                placeholder={doc.doc_thu_3}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_thu_a3_3"
                                placeholder={doc.doc_thu_3}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_thu_a4_3"
                                onClick={() =>
                                  fix_thu_3(
                                    "sch_thu_a2_3",
                                    "sch_thu_a1_3",
                                    "sch_thu_a4_3",
                                    "sch_thu_a5_3",
                                    "sch_thu_a3_3"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_thu_a5_3"
                                onClick={() =>
                                  cancel(
                                    "sch_thu_a2_3",
                                    "sch_thu_a1_3",
                                    "sch_thu_a4_3",
                                    "sch_thu_a5_3",
                                    "sch_thu_a3_3"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                
              </tr>
              <tr>
                <td className="sch_heads">FRIDAY</td>
                <td>
                  <table>
                    <tr>
                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_fri_a1_1"
                                onClick={() =>
                                  add(
                                    "sch_fri_a2_1",
                                    "sch_fri_a1_1",
                                    "sch_fri_a4_1",
                                    "sch_fri_a5_1",
                                    "sch_fri_a3_1"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_fri_a2_1"
                                onChange={(e) => set_fri_1(e.target.value)}
                                placeholder={doc.doc_fri_1}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_fri_a3_1"
                                placeholder={doc.doc_fri_1}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_fri_a4_1"
                                onClick={() =>
                                  fix_fri_1(
                                    "sch_fri_a2_1",
                                    "sch_fri_a1_1",
                                    "sch_fri_a4_1",
                                    "sch_fri_a5_1",
                                    "sch_fri_a3_1"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_fri_a5_1"
                                onClick={() =>
                                  cancel(
                                    "sch_fri_a2_1",
                                    "sch_fri_a1_1",
                                    "sch_fri_a4_1",
                                    "sch_fri_a5_1",
                                    "sch_fri_a3_1"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_fri_a1_2"
                                onClick={() =>
                                  add(
                                    "sch_fri_a2_2",
                                    "sch_fri_a1_2",
                                    "sch_fri_a4_2",
                                    "sch_fri_a5_2",
                                    "sch_fri_a3_2"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_fri_a2_2"
                                placeholder={doc.doc_fri_2}
                                onChange={(e) => set_fri_2(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_fri_a3_2"
                                placeholder={doc.doc_fri_2}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_fri_a4_2"
                                onClick={() =>
                                  fix_fri_2(
                                    "sch_fri_a2_2",
                                    "sch_fri_a1_2",
                                    "sch_fri_a4_2",
                                    "sch_fri_a5_2",
                                    "sch_fri_a3_2"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_fri_a5_2"
                                onClick={() =>
                                  cancel(
                                    "sch_fri_a2_2",
                                    "sch_fri_a1_2",
                                    "sch_fri_a4_2",
                                    "sch_fri_a5_2",
                                    "sch_fri_a3_2"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_fri_a1_3"
                                onClick={() =>
                                  add(
                                    "sch_fri_a2_3",
                                    "sch_fri_a1_3",
                                    "sch_fri_a4_3",
                                    "sch_fri_a5_3",
                                    "sch_fri_a3_3"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_fri_a2_3"
                                onChange={(e) => set_fri_3(e.target.value)}
                                placeholder={doc.doc_fri_3}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_fri_a3_3"
                                placeholder={doc.doc_fri_3}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_fri_a4_3"
                                onClick={() =>
                                  fix_fri_3(
                                    "sch_fri_a2_3",
                                    "sch_fri_a1_3",
                                    "sch_fri_a4_3",
                                    "sch_fri_a5_3",
                                    "sch_fri_a3_3"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_fri_a5_3"
                                onClick={() =>
                                  cancel(
                                    "sch_fri_a2_3",
                                    "sch_fri_a1_3",
                                    "sch_fri_a4_3",
                                    "sch_fri_a5_3",
                                    "sch_fri_a3_3"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                
              </tr>
              <tr>
                <td className="sch_heads">SATURDAY</td>
                <td>
                  <table>
                    <tr>
                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_sat_a1_1"
                                onClick={() =>
                                  add(
                                    "sch_sat_a2_1",
                                    "sch_sat_a1_1",
                                    "sch_sat_a4_1",
                                    "sch_sat_a5_1",
                                    "sch_sat_a3_1"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_sat_a2_1"
                                placeholder={doc.doc_sat_1}
                                onChange={(e) => set_sat_1(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_sat_a3_1"
                                placeholder={doc.doc_sat_1}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_sat_a4_1"
                                onClick={() =>
                                  fix_sat_1(
                                    "sch_sat_a2_1",
                                    "sch_sat_a1_1",
                                    "sch_sat_a4_1",
                                    "sch_sat_a5_1",
                                    "sch_sat_a3_1"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_sat_a5_1"
                                onClick={() =>
                                  cancel(
                                    "sch_sat_a2_1",
                                    "sch_sat_a1_1",
                                    "sch_sat_a4_1",
                                    "sch_sat_a5_1",
                                    "sch_sat_a3_1"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_sat_a1_2"
                                onClick={() =>
                                  add(
                                    "sch_sat_a2_2",
                                    "sch_sat_a1_2",
                                    "sch_sat_a4_2",
                                    "sch_sat_a5_2",
                                    "sch_sat_a3_2"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_sat_a2_2"
                                placeholder={doc.doc_sat_2}
                                onChange={(e) => set_sat_2(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_sat_a3_2"
                                placeholder={doc.doc_sat_2}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_sat_a4_2"
                                onClick={() =>
                                  fix_sat_2(
                                    "sch_sat_a2_2",
                                    "sch_sat_a1_2",
                                    "sch_sat_a4_2",
                                    "sch_sat_a5_2",
                                    "sch_sat_a3_2"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_sat_a5_2"
                                onClick={() =>
                                  cancel(
                                    "sch_sat_a2_2",
                                    "sch_sat_a1_2",
                                    "sch_sat_a4_2",
                                    "sch_sat_a5_2",
                                    "sch_sat_a3_2"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_sat_a1_3"
                                onClick={() =>
                                  add(
                                    "sch_sat_a2_3",
                                    "sch_sat_a1_3",
                                    "sch_sat_a4_3",
                                    "sch_sat_a5_3",
                                    "sch_sat_a3_3"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_sat_a2_3"
                                placeholder={doc.doc_sat_3}
                                onChange={(e) => set_sat_3(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_sat_a3_3"
                                placeholder={doc.doc_sat_3}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_sat_a4_3"
                                onClick={() =>
                                  fix_sat_3(
                                    "sch_sat_a2_3",
                                    "sch_sat_a1_3",
                                    "sch_sat_a4_3",
                                    "sch_sat_a5_3",
                                    "sch_sat_a3_3"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_sat_a5_3"
                                onClick={() =>
                                  cancel(
                                    "sch_sat_a2_3",
                                    "sch_sat_a1_3",
                                    "sch_sat_a4_3",
                                    "sch_sat_a5_3",
                                    "sch_sat_a3_3"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                
              </tr>
              <tr>
                <td className="sch_heads">SUNDAY</td>
                <td>
                  <table>
                    <tr>
                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_sun_a1_1"
                                onClick={() =>
                                  add(
                                    "sch_sun_a2_1",
                                    "sch_sun_a1_1",
                                    "sch_sun_a4_1",
                                    "sch_sun_a5_1",
                                    "sch_sun_a3_1"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_sun_a2_1"
                                placeholder={doc.doc_sun_1}
                                onChange={(e) => set_sun_1(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_sun_a3_1"
                                placeholder={doc.doc_sun_1}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_sun_a4_1"
                                onClick={() =>
                                  fix_sun_1(
                                    "sch_sun_a2_1",
                                    "sch_sun_a1_1",
                                    "sch_sun_a4_1",
                                    "sch_sun_a5_1",
                                    "sch_sun_a3_1"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_sun_a5_1"
                                onClick={() =>
                                  cancel(
                                    "sch_sun_a2_1",
                                    "sch_sun_a1_1",
                                    "sch_sun_a4_1",
                                    "sch_sun_a5_1",
                                    "sch_sun_a3_1"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_sun_a1_2"
                                onClick={() =>
                                  add(
                                    "sch_sun_a2_2",
                                    "sch_sun_a1_2",
                                    "sch_sun_a4_2",
                                    "sch_sun_a5_2",
                                    "sch_sun_a3_2"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_sun_a2_2"
                                placeholder={doc.doc_sun_2}
                                onChange={(e) => set_sun_2(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_sun_a3_2"
                                placeholder={doc.doc_sun_2}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_sun_a4_2"
                                onClick={() =>
                                  fix_sun_2(
                                    "sch_sun_a2_2",
                                    "sch_sun_a1_2",
                                    "sch_sun_a4_2",
                                    "sch_sun_a5_2",
                                    "sch_sun_a3_2"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_sun_a5_2"
                                onClick={() =>
                                  cancel(
                                    "sch_sun_a2_2",
                                    "sch_sun_a1_2",
                                    "sch_sun_a4_2",
                                    "sch_sun_a5_2",
                                    "sch_sun_a3_2"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>

                      <td>
                        <table>
                          <tr>
                            <td>
                              <button
                                type="submit"
                                id="sch_sun_a1_3"
                                onClick={() =>
                                  add(
                                    "sch_sun_a2_3",
                                    "sch_sun_a1_3",
                                    "sch_sun_a4_3",
                                    "sch_sun_a5_3",
                                    "sch_sun_a3_3"
                                  )
                                }
                              >
                                <img className="src_edit_img" src="icons/edit.png"/>
                              </button>
                            </td>
                            <td>
                              <input className="sch_time"
                                type="text"
                                readOnly
                                id="sch_sun_a2_3"
                                placeholder={doc.doc_sun_3}
                                onChange={(e) => set_sun_3(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                readOnly
                                hidden
                                id="sch_sun_a3_3"
                                placeholder={doc.doc_sun_3}
                              />
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_sun_a4_3"
                                onClick={() =>
                                  fix_sun_3(
                                    "sch_sun_a2_3",
                                    "sch_sun_a1_3",
                                    "sch_sun_a4_3",
                                    "sch_sun_a5_3",
                                    "sch_sun_a3_3"
                                  )
                                }
                              >
                                <img className="src_fix_img" src="icons/fix.png"/>
                              </button>
                            </td>
                            <td>
                              <button
                                type="submit"
                                hidden
                                id="sch_sun_a5_3"
                                onClick={() =>
                                  cancel(
                                    "sch_sun_a2_3",
                                    "sch_sun_a1_3",
                                    "sch_sun_a4_3",
                                    "sch_sun_a5_3",
                                    "sch_sun_a3_3"
                                  )
                                }
                              >
                                <img className="src_cancel_img" src="icons/cancel.png"/>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              
              </tr>
            </div>
          ))}
        </table>
      </div>
    </div>
    </div>
  );
}

export default Schedular;
