import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function resetPass(email) {
  const auth = getAuth();
  return sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      return true
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error('There was an issue. Please try again later.')
      // ..
    });
}