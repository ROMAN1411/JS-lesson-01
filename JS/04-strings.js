/** length*/

const message = 'sdvsdvsdvsdvsxd';
console.log(message.length);

/** Конкатенація */

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + lastName;

// console.log(fullName);

// console.log('one' + ' ' + 'two' + ' ' + 'three');

/** Скрипт, який виведе рядок у форматі:
 * "Гість x y поселяється у z номер q"
 *  Замість x y z q значення змынних.
 */

const firstName = 'Chelsy';
const lastName = 'Emerald';
const room = 716;
const type = 'VIP';

const welcomeMsg =
  'Гість' +
  ' ' +
  firstName +
  ' ' +
  lastName +
  ' ' +
  'поселяється в' +
  ' ' +
  type +
  ' ' +
  'номер' +
  ' ' +
  room;

console.log(welcomeMsg);
console.log(
  `Гість ${firstName} ${lastName} поселяється в ${type} номер ${room}`,
);

/** toLowerCase() */

const brand = 'SaMsUnG';
const inDB = 'samsung';

const normalizedBrand = brand.toLowerCase();
console.log(normalizedBrand);

/** includes() */

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';

const string1 = 'Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна компанія #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
console.log(string2.includes(blacklistedWord2));

console.log(string2.toLowerCase().includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));
