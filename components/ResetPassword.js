import { getAuth, updatePassword } from "firebase/auth";

export default function setPass(password) {
  const auth = getAuth();

  const user = auth.currentUser;

  return updatePassword(user, password)
    .then(() => {
      // Update successful.
      return true
    }).catch((error) => {
      // An error ocurred
      // ...
      throw new Error(error);
    });
}