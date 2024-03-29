import Cookies from 'js-cookie';
import { getAuth } from 'firebase/auth';

function setCookie(userId, userName, rememberMe) {
  if (rememberMe) {
    Cookies.set('userId', userId, {expires: 30});
  } else {
    Cookies.set('userId', userId, {expires: 1});
  }

  if (userName !== undefined) {
    if (rememberMe) {
      Cookies.set('username', userName, {expires: 30});
    } else {
      Cookies.set('username', userName, {expires: 1});
    }
  }
}

function logOut(userId) {
  Cookies.remove('userId');
}

function getCookie() {
  const currCookie = Cookies.get('userId');
  if (currCookie === '') {
    return undefined;
  }
  return currCookie;
}

function getUsername() {
  return Cookies.get('username');
}

let obj = {
  setCookie:setCookie,
  logOut:logOut,
  getCookie: getCookie,
  getUsername: getUsername,
}
export default obj;