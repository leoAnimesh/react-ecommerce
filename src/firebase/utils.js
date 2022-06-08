import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyBvmJxs0cqOEZqMp2_e7P9eenk_Zvy6fwM",
  authDomain: "crown-clothing-db-bf255.firebaseapp.com",
  projectId: "crown-clothing-db-bf255",
  storageBucket: "crown-clothing-db-bf255.appspot.com",
  messagingSenderId: "199430210486",
  appId: "1:199430210486:web:26a24f7f416696a591f717",
};

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
