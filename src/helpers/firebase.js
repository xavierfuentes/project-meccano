import * as firebase from 'firebase';

// Firebase config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DB_URL,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// const database = firebase.database();

export function createUserWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signinWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signinWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  // https://developers.google.com/identity/protocols/googlescopes#peoplev1
  // Gmail
  provider.addScope('https://www.googleapis.com/auth/gmail.readonly');
  provider.addScope('https://www.googleapis.com/auth/gmail.send');
  // People
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');

  auth.signInWithRedirect(provider);
  return auth.getRedirectResult();
}

export function signout() {
  return auth.signOut();
}

// class FirebaseApi {
//   static initAuth() {
//     firebase.initializeApp(firebaseConfig);
//     return new Promise((resolve, reject) => {
//       const unsub = firebase.auth().onAuthStateChanged(
//         user => {
//           unsub();
//           resolve(user);
//         },
//         error => reject(error)
//       );
//     });
//   }

//   static createUserWithEmailAndPassword({ email, password }) {
//     return firebase.auth().createUserWithEmailAndPassword(email, password);
//   }

//   static signInWithEmailAndPassword({ email, password }) {
//     return firebase.auth().signInWithEmailAndPassword(email, password);
//   }

//   static authSignOut() {
//     return firebase.auth().signOut();
//   }

//   static databasePush(path, value) {
//     return new Promise((resolve, reject) => {
//       firebase.database().ref(path).push(value, error => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve();
//         }
//       });
//     });
//   }

//   static GetValueByKeyOnce(path, key) {
//     return firebase.database().ref(path).orderByKey().equalTo(key).once('value');
//   }

//   static GetChildAddedByKeyOnce(path, key) {
//     return firebase.database().ref(path).orderByKey().equalTo(key).once('child_added');
//   }

//   static databaseSet(path, value) {
//     return firebase.database().ref(path).set(value);
//   }
// }

// export default FirebaseApi;
