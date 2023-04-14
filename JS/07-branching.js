/** Оператор умови if */

if (false) {
  console.log('first');
}
console.log('second');

console.log('--------------------');

if (true) {
  console.log('first');
}
console.log('second');

console.log('--------------------');

/** Оператор умови if... else */

if (50 > 30) {
  console.log('first');
} else {
  console.log('second');
}

console.log('--------------------');

if (50 < 30) {
  console.log('first');
} else {
  console.log('second');
}

console.log('--------------------');

/** Оператор умови else... if */

// Перевіряються кроки до першого співпадіння

const salary = 3000;

if (salary < 500) {
  console.log('Level-1');
} else if (salary > 500 && salary < 1500) {
  console.log('Level-2');
} else if (salary > 1500 && salary < 3000) {
  console.log('Level-3');
} else {
  console.log('Level-4');
}

console.log('--------------------');

// Перевіряються всі кроки

const salary2 = 2000;

if (salary2 < 500) {
  console.log('Level-1');
}
if (salary2 > 500 && salary2 < 1500) {
  console.log('Level-2');
}
if (salary2 > 1500 && salary2 < 3000) {
  console.log('Level-3');
}
if (salary2 > 3000) {
  console.log('Level-4');
}

console.log('--------------------');

/** Тернарний оператор */

const balance = -300;
// let message;

// if (balance >= 0) {
//   message = 'Позитивний баланс';
// } else {
//   message = 'Негативний баланс';
// }

const message = balance >= 0 ? 'Позитивний баланс' : 'Негативний баланс';

console.log(message);

console.log('--------------------');
