import Cookies from 'js-cookie';

function setCookie(userId) {
  Cookies.set('userId', userId, {expires: 1});
}

function logOut(userId) {
  Cookies.remove('userId');
}
let obj = {setCookie:setCookie, logOut:logOut}
export default obj;