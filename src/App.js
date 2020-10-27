import React, { useRef, useState } from 'react';
import './App.css';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';

import * as firebase from 'firebase'
import 'firebase/firestore'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import  './connections';

import  ChatRoom  from "./components/ChatRoom";
import  SignIn  from "./components/SignIn";
import  SignOut  from "./components/SignOut";

const auth = firebase.auth();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Chat Igor</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}


export default App;
