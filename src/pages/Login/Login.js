import login from '../api/login.js';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import firebase from '../../../firebase/clientApp.js';

export default function Login(props) {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  auth.languageCode = 'it';
  const handleClick = () => {
    console.log('entering handleClick')
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
  return (
    <>
      <p onClick={handleClick}>hi</p>
    </>
  )
}