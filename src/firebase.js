import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCtJYFpzMILLNdJQuPprt3XQMZa1WWdlyw',
  authDomain: 'clone-e8557.firebaseapp.com',
  projectId: 'clone-e8557',
  storageBucket: 'clone-e8557.appspot.com',
  messagingSenderId: '229461281879',
  appId: '1:229461281879:web:3cdb16c278b1bbae132712',
  measurementId: 'G-7JM6Z5247R',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
