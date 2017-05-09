// Firebase config
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DB_URL,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
};

// react-redux-firebase options
export const firebaseOptions = {
  enableLogging: false, // enable/disable Firebase's database logging
  userProfile: 'users', // firebase root where user profiles are stored
  // todo: check profileFactory on http://react-redux-firebase.com/docs/recipes/profile.html
};
