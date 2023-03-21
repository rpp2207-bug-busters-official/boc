import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Cookies from './setCookie.js';

export default function signIn(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('made it inside')
      return Cookies.setCookie(user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}