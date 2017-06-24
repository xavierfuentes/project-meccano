export const auth = state => state.auth;
export const currentUser = state => state.auth.user;
export const isSignedin = state => state.auth.user && !!state.auth.user.uid;
