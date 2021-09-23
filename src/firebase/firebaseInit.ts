import { initializeApp } from 'firebase/app';

import { firebaseConfig } from './firebaseConfig';

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;