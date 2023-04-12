/**  Number.parseInt() Number.parseFloat */

// let elementWidth = '50px';
// console.log(elementWidth);

// const result = Number.parseInt(elementWidth);
// console.log(result);
// console.log(typeof result); 

// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth);

// let elementHight = '200.74px';
// elementHight = Number.parseFloat(elementHight);
// console.log('elementHight', elementHight);

console.log('----------------------------------')


/** toFixed(digits) */

let salary = 1300.16472;
console.log(salary);

console.log(salary.toFixed(2));
console.log(typeof salary.toFixed(2));

salary = Number(salary.toFixed(3));
console.log(salary);
console.log(typeof salary);

console.log(Number(salary.toFixed(2)));
console.log(typeof Number(salary.toFixed(2)));

console.log('----------------------------------')

/** Convert to Number */

let quantity = '30';
let value = 'Not a Number'

console.log(Number(quantity));
console.log(Number(value));

console.log('----------------------------------')

/** Аscension to degree - вознесіння до ступеня
    Exponent operator

 * Math */

// const base = 3;
// const power = 5;

// 5

console.log('----------------------------------')

/** Напиши скрипт, який просить користувача  ввести число і степінь, 
 * вводить число в цю степінь і виводить результат в консоль */

// Ввести число
// let base = prompt('Введіть число');
// base = Number(base);
// console.log('Число:', base);

// Ввести степінь
// let power = prompt('Введіть степінь');
// power = Number(power);
// console.log('Степінь:', power);

// Привести введені дані в степінь і вивести результат
// console.log('Результат', base ** power);

/* Генерація псевдовипадкових чисел 
*- Math.random()
*- Math.round()
*/

// Math.random() * (max - min) + min
// const max = 50;
// const min = 30;

// console.log('Random:', Math.random() * (max - min) + min);
// console.log('Random:', Math.round(Math.random() * (max - min) + min));

/** ЗАДАЧА... Рандомна зміна кольору фону */

const colors = ['tomato', 'teal', 'orange', 'blue', 'red', 'green', 'yellow', 'pink'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;














