import React, { useRef, useState } from 'react';
import '../App.css';
import '../App.js';

import * as firebase from 'firebase'
import 'firebase/firestore'

import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();



export default function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sair</button>
  )
}