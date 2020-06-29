// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   if (login.length > 4 && login.length < 16) {
//       return 'true';
//   } else {
//       return 'false';
//   }
// };


// const isLoginUnique = function (allLogins, login) {
  
//       if (allLogins.includes(login)) {
//           return false;
//       } else {
//           return true;
//       }
  
// };

// const addLogin = function (allLogins, login) {
//   if (isLoginValid === true && isLoginUnique === true) {
//       console.log('okey')
//   } else {
//       console.log('mistake');
//   }
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   return login.length > 4 && login.length < 16;  
// };
// // console.log(isLoginValid('man'))

// const isLoginUnique = function (allLogins, login) {
//   return allLogins.includes(login);
// };
// // console.log(isLoginUnique(logins, 'Ajax'));

// const addLogin = function (allLogins, login) {
//     let loginValid = isLoginValid(login);
//     let loginUnique = isLoginUnique(allLogins, login);

// if (loginValid === false) {
//     return 'Помилка! Логін повинен бути від 4 до 16 символів';
// } else if (loginUnique === false) {
//     return 'Такий логін вже використовується!';
// } else {
//     return 'Логін успішно доданий!';
// }
// }
// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
// //  */
// console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'