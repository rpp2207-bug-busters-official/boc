import {getAuth} from 'firebase/auth';
import {GoogleAuthProvider} from 'firebase/auth';
import firebase from '../../../firebase/clientApp.js';


export default function login(req, res) {
  let authenticated = getAuth(firebase);
}