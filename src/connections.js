import React, { useRef, useState } from 'react';

import * as firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
  //Your config
}


firebase.initializeApp(firebaseConfig);

export default firebase;
