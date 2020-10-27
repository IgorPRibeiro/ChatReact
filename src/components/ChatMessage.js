import React, { useRef, useState } from 'react';
import '../App.css';

import * as firebase from 'firebase'
import 'firebase/firestore'

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

export default function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}