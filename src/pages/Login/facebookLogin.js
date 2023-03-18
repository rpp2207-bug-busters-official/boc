import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import React from 'react';


export default function facebookLogin () {
  const auth = getAuth();

  const provider = new FacebookAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      console.log(result)
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });

}