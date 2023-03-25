import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import React from 'react';
import Cookies from './setCookie.js';

export default function facebookLogin (updateCookie) {
  const auth = getAuth();
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      Cookies.setCookie(user.uid, user.displayName);
      updateCookie();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
}