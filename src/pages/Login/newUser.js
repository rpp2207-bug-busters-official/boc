import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import setCookie from './setCookie';

export default function createUser(email, password, username) {
  const auth = getAuth();
  console.log('here', email, password, username)
  console.log(arguments)
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setCookie(user.uid);
      return updateProfile(user, {
        displayName: username
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
    });
}