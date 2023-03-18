import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import setCookie from './setCookie.js';

export default function signIn(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setCookie(user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}