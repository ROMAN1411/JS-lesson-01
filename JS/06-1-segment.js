/** Напиши скрипт, який перевіряє входження числа
 * у відрізок х1 та х2
 *
 * До х1
 * Після х2
 * Від х1 до х2
 * До х1 та після х2 */

const x1 = 10;
const x2 = 30;
const number = 8;

console.log(`Число ${number} потрапляє у відрізок до ${x1}`, number < x1);
console.log(`Число ${number} потрапляє у відрізок від ${x2}`, number > x2);
console.log(
  `Число ${number} потрапляє у відрізок від ${x1} до ${x2}`,
  number > x1 && number < x2
);
console.log(
  `Число ${number} потрапляє у відрізок до ${x1} чи від ${x2}`,
  number < x1 || number > x2
);
