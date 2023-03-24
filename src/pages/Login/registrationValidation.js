export default function registrationValidation ({username, email, password})  {
  const createPredicate = ([test, errMsg]) => {
    return (a) => {
      return test(a) ? null : errMsg;
    };
  };

  const validationRules = {
    username: [
      [
        ((b) => { return Boolean(b); }).bind(null),
        'Username is required.'
      ],
    ],
    email: [
      [
        ((b) => { return (b.includes('@') && b.includes('.')); }).bind(null),
        'The email entered is not valid.',
      ],
      [
        ((b) => { return b.length <= 60; }).bind(null),
        'The email must not exceed 60 characters.'
      ]
    ],
    password: [
      [
        ((b) => { return b.password === b.rePassword}).bind(null),
        'Both passwords must match.'
      ],
      [
        ((b) => { return b.password.length >= 6}).bind(null),
        'Password must be at least 6 characters long.'
      ]
    ]
  };
  let res = {}
  let sampleDataOne = {username: username, password: password, email: email};
  let currentElement, validations;
  for (let i = 0; i < Object.keys(validationRules).length; i++) {
    currentElement = Object.keys(validationRules)[i];
    for (let j = 0; j < validationRules[currentElement].length; j++) {
      validations = createPredicate(validationRules[currentElement][j]);
      let err = validations(sampleDataOne[currentElement])
      if (err !== null) {
        res[currentElement] = err;
      }
    }
  }

  return res;
}