import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function createUser(email, password, userName) {
  const auth = getAuth();
  console.log(password)
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return updateProfile(user, {
        displayName: userName
      })
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}