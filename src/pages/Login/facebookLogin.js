import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import React from 'react';
import Cookies from './setCookie.js';

export default function facebookLogin (updateCookie) {
  const auth = getAuth();
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      Cookies.setCookie(user.uid, user.displayName);
      updateCookie();
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      // console.log(error);
      // console.log(errorCode);
      // console.log(errorMessage);
    });
}