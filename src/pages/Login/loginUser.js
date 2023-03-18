import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Cookies from './setCookie.js';

export default function signIn(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      Cookies.setCookie(user.uid);
    })
    .catch((error) => {
      console.log('failure')
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}