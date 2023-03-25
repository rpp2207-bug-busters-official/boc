import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Cookies from './setCookie.js';

export default function signIn(email, password, rememberMe) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return Cookies.setCookie(user.uid, user.displayName, rememberMe);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error('Login invalid')
    });
}