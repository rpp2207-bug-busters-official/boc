import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';


export default function googleLogin() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  auth.languageCode = 'it';
  const googleLogin = () => {
    console.log('entering facebookLogin')
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const email = err.customData.email;
        const credential = GoogleAuthProvider.credentialFromResult(err);
      })
  }

  googleLogin();
}