import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Cookies from './setCookie.js';

export default function createUser(email, password, username) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      Cookies.setCookie(user.uid, username);
      return updateProfile(user, {
        displayName: username
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(errorMessage);
    });
}