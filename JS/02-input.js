/* window.confirm --- window.prompt */

// const shoudRenew = confirm('Do you want to renew your subscription?');
// console.log(shoudRenew);

/** Prompt always returns a string*/
// const quantity = prompt('Enter the item quantity.');
// console.log(quantity);
// console.log(typeof quantity);

/** Сhange the string to a number*/
let quantity = prompt('Enter the item quantity.');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);