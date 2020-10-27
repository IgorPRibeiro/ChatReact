import React, { useRef, useState } from 'react';

import * as firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBrx4ZD2a3OKg1OMYbrc2JcKtfRU12Reow",
  authDomain: "sprechen-e44ff.firebaseapp.com",
  databaseURL: "https://sprechen-e44ff.firebaseio.com",
  projectId: "sprechen-e44ff",
  storageBucket: "sprechen-e44ff.appspot.com",
  messagingSenderId: "750523457520",
  appId: "1:750523457520:web:61002161d9047648b14735",
}


firebase.initializeApp(firebaseConfig);

export default firebase;