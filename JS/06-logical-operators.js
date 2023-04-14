/** Приведення до буля Boolean(value) */

console.log(Boolean(5));
console.log(Boolean("5"));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(-5));
console.log(Boolean(null));

console.log("----------------------");

/** Логічні "І" (оператор &&)*/

console.log(5 && 6);
console.log(5 && 6 && 7 && "hello");

console.log(5 && 6 && 0 && "hello");

/** Логічні "Чи" (оператор ||)*/

console.log(5 || 7 || 8 || 10);
console.log(0 || false || 8 || 10);

console.log("----------------------");

/** Логічні "НЕ" (оператор !)*/

console.log(!true);
console.log(!false);
console.log(!5);
console.log(!0);
console.log(!"0");
