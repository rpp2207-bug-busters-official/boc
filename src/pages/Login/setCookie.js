import Cookies from 'js-cookie';

export default function setCookie(userId) {
  Cookies.set('userId', userId, {expires: 1});
}