import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';



export default function googleLogin() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  console.log('yoy')
  auth.languageCode = 'it';
  const googleLogin = () => {
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const email = err.customData.email;
        const credential = GoogleAuthProvider.credentialFromResult(err);
      })
  }

  googleLogin();
}