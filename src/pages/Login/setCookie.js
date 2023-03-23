import Cookies from 'js-cookie';

function setCookie(userId, userName) {
  Cookies.set('userId', userId, {expires: 1});
  if (userName !== undefined) {
    Cookies.set('username', userName, {expires: 1});
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
  getUsername: getUsername
}
export default obj;