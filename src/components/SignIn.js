import React, { useRef, useState } from 'react';
import '../App.css';
import '../App.js';
import * as firebase from 'firebase';
import 'firebase/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


export default function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Logar com o Google</button>
    </>
  )

}

