/*
   аналог promisify з нодівських модулів
*/
function myPromisify(funcWithAsyncCallback) {
  // повертаємо функцію яка повертає проміс і приймає аргументи початкової функції
  return function promisifiedFunc (...args) {

    return new Promise((resolve, reject) => {
      // запускаємо початкову функцію та передаємо їй аргументи, після чого окремо передємо коллбек
      funcWithAsyncCallback(...args, (err, data) => {
        if(err) {
          // якщо є помилка то проміс відхиляємо з нею
          reject(err);
        } else {
          // якщо немає помилки то проміс приймаємо з даними
          resolve(data);
        }
      });
    });
  }
}

function myPromisify2(funcWithAsyncCallback) {
  // повертаємо функцію яка повертає проміс і приймає аргументи початкової функції
  return function promisifiedFunc (...args) {

    return new Promise((resolve, reject) => {
      // запускаємо початкову функцію та передаємо їй аргументи, після чого окремо передємо коллбек
      funcWithAsyncCallback(...args, (data, err ) => {
        if(err) {
          // якщо є помилка то проміс відхиляємо з нею
          reject(err);
        } else {
          // якщо немає помилки то проміс приймаємо з даними
          resolve(data);
        }
      });
    });
  }
}


function myPromisify3(funcWithAsyncCallback) {
  // повертаємо функцію яка повертає проміс і приймає аргументи початкової функції
  return function promisifiedFunc (...args) {

    return new Promise((resolve, reject) => {
      // запускаємо початкову функцію та передаємо їй аргументи, після чого окремо передємо коллбек
      funcWithAsyncCallback((data, err ) => {
        if(err) {
          // якщо є помилка то проміс відхиляємо з нею
          reject(err);
        } else {
          // якщо немає помилки то проміс приймаємо з даними
          resolve(data);
        }
      });
    }, ...args );
  }
}



/**
 * 
 * @param {string} name 
 * @param {number} number 
 * @param {(err, text) => {}} callback 
 */
const myBadAsyncFunc = (name, number, callback) => {

  const isNameGiven = name.trim() !== '' && typeof name === 'string';

  const isNumberGiven = typeof number === 'number' && !isNaN(number);

  const error = isNameGiven && isNumberGiven ? null : new Error('Invalid data given');

  const text = `Name is ${name} and number is ${number}`;

  callback(error, text);
}

// myBadAsyncFunc('Test', 1234, (err, text) => {
//   if(err) throw err;

//   console.log(text);
// });

async function testMyPromisify () {
  const promisified = myPromisify(myBadAsyncFunc);

  try {
    const text = await promisified('', NaN);
    console.log(text);
  } catch (error) {
    console.log(error);
  }
}

testMyPromisify();