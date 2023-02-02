// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh9OmWaXnGN3vuYCtOUL1YC_Nrp-c6tcs",
  authDomain: "crwn-clothing-db-56f53.firebaseapp.com",
  projectId: "crwn-clothing-db-56f53",
  storageBucket: "crwn-clothing-db-56f53.appspot.com",
  messagingSenderId: "1029845050311",
  appId: "1:1029845050311:web:d0c04b6087878b628cafe2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    // if user data (snapshot) does not exist,
    // create/set the document with the data from userAuth in my collection.
    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }   
    }

    // if user data exists, return userDocRef
    return userDocRef;

}