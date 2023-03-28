import RegistrationValidation from '../src/pages/Login/registrationValidation.js';
import Cookies from '../src/pages/Login/setCookie.js';

describe('Testing Registration Validating function', () => {
  test('Should give errors when no input is valid', () => {
    expect(RegistrationValidation({
      'username':'',
      'password':{password:'', rePassword:''},
      'email':''
    })).toStrictEqual({
      'username':'Username is required.',
      'password': 'Password must be at least 6 characters long.',
      'email': 'The email entered is not valid.'
    });
  });

  test('Should give corresponding errors when some inputs are valid', () => {
    expect(RegistrationValidation({
      'username':'Justin8912',
      'password':{password:'', rePassword:''},
      'email':'jnstendara@gmail.com'
    })).toStrictEqual({
      'password': 'Password must be at least 6 characters long.'
    });
  });

  test('Should give error when passwords dont match', () => {
    expect(RegistrationValidation({
      'username':'justin8912',
      'password':{password:'asdfas', rePassword:'asdfasdfasdf'},
      'email':'jnstendara@gmail.com'
    })).toStrictEqual({
      'password':'Both passwords must match.'
    });
  });
});

describe('Testing Cookie functions', () => {
  test('Should be able to use function to getUserId', () => {
    Object.defineProperty(window.document, 'cookie', {
      configurable: true,
      writeable: true,
      value:'userId=thisIsACookie'
    });
    expect(Cookies.getCookie()).toStrictEqual('thisIsACookie');
  });

  test('Should be able to use function to getUsername', () => {
    Object.defineProperty(window.document, 'cookie', {
      configurable: true,
      writeable: true,
      value:'username=justin8912'
    });
    expect(Cookies.getUsername()).toStrictEqual('justin8912');
  });
})