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
  doc,
} from "firebase/firestore";

export const handleEdit = async (id) => {
  const name = prompt("Enter name:");
  const docRef = doc(db, "doc", id);
  const payload = { name };
  setDoc(docRef, payload);
};
