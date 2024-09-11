//TODO: Syntax
//! push()
//? array.push(element1, ..., elementN)

let fruits = ["apple", "banana"];
fruits.push('orange');
console.log(fruits);//output: ["apple", "banana", "orange"]

//TODO: Syntax
//! pop()
//? array.pop()

let fruits1 =  ["apple", "banana", "orange"];
fruits1.pop();
console.log(fruits1);// output:  ["apple", "banana"]


//TODO: Syntax
//! shift()
//? array.shift()

let fruits2 = ["apple", "banana", "orange"];
fruits2.shift();
console.log(fruits2); // output:  ["banana", "orange"]

//TODO: Syntax
//! unshift()
//? array.unshift(element1, ..., elementN)

let fruits3 = ["banana", "orange"];
fruits3.unshift("apple");
console.log(fruits3); // output: ["apple", "banana", "orange"];


//TODO: Syntax
//! concat()
//? var new_array = array1.concat(array2, ..., arrayN)

let fruits4 =  ["apple", "banana"];
let more_fruits = ["orange", "grape"];
let allfruits = fruits4.concat(more_fruits);
console.log(allfruits); // output: ["apple", "banana", "orange", "grape"]


//TODO: Syntax
//! slice()
//? array.slice(start, end)

let fruits5 = ["apple", "banana", "orange", "grape"];
let citrus = fruits4.slice(1, 3);
console.log(citrus); // output: ["banana", "orange"]

//TODO: Syntax
//! splice()
//? array.splice(start, deleteCount, item1, ..., itemN)

let fruits6 = ["apple", "banana", "orange", "grape"];
fruits6.splice(1, 1, "kiwi");
console.log(fruits6); // output: ["apple", "kiwi", "orange", "grape"]

//TODO: Syntax
//! indexOf()
//? array.indexOf(searchIndex, fromIndex)

let fruits7 = ["apple", "banana", "orange", "grape"];
let index = fruits7.indexOf("banana");
console.log(index); // output: 1


//TODO: Syntax
//! forEach()
//? array.forEach(callback(currentValue, index, array), thisArg)

let fruits8 = ["apple", "banana", "orange", "grape"];
fruits8.forEach(function(item, index) {
    console.log(item, index);
});
// output:
// 0 "apple"
// 1 "banana"
// 3 "orange"
// 4 "grape"

//TODO: Syntax
//! map()
//? array.map(function callback(currentValue, index, array) { // return element for new_array }, thisArg)
let numbers = [1, 4, 9];
let roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
console.log(roots);// output [1, 2, 3]

//TODO: Syntax
//! filter()
//? array.filter(function callback(currentValue, index, array) { // return true to keep the element, false otherwise }, thisArg)

let num = [1, 2, 3, 4, 5, 6];
let evenNumbers = num.filter(function(nums) {
    return nums % 2 == 0;
});
console.log(evenNumbers); // output: [2, 4, 6]

//TODO: Syntax
//! reduce()
//? array.reduce(function callback(accumulator, currentValue, index, array) { // return new accumulator value }, initialValue)

let number = [1, 2, 3, 4];
let sum = number.reduce(function(total, num) {
    return total + num;
}, 0);
console.log(sum); // output: 10

//TODO: Syntax
//! find()
//? array.find(function callback(element, index, array) { //  return true to keep the element, false otherwise }, thisArg)

let numbers1 = [1, 2, 3, 4, 5];
let found = numbers1.find(function(num) {
    return num > 3;
})
console.log(found); // output: 4


//TODO: Syntax
//! findIndex()
//? array.findIndex(function callback(element, index, array) { //  return true to keep the element, false otherwise }, thisArg)

let numbers2 = [1, 2, 3, 4, 5];
let foundIndex = numbers2.findIndex(function(num) {
    return num > 3;
})
console.log(foundIndex); // output: // 3


//TODO: Syntax
//! sort()
//? array.sort(compareFunction)

let fruits9 = ["banana", "orange", "apple", "grape"];
fruits9.sort();
console.log(fruits9); // output: ["apple", "banana", "grape", "orange"]

//TODO: Syntax
//! reverse()
//? array.reverse()

let fruits10 = ["banana", "orange", "apple", "grape"];
fruits10.reverse();
console.log(fruits10); // output: ["grape", "apple". "orange", "banana"]


//TODO: Syntax
//! includes()
//? array.includes(valueToFind, fromIndex)

let fruits11 = ["banana", "orange", "apple", "grape"];
let hasBanana = fruits11.includes("banana");
console.log(hasBanana); // output: true


//TODO: Syntax
//! some()
//? array.some(function callback(element, index, array) { // return true to keep element, false otherWise}, thisArg)

let numbers3 = [1, 2, 3, 4, 5];
let hasEven = numbers3.some(function(num) {
    return num % 2 === 0;
});
console.log(hasEven); // output: true


//TODO: Syntax
//! every()
//? array.every(function callback(element, index, array) { // return true to keep element, false otherWise}, thisArg)

let numbers4 = [1, 2, 3, 4, 5];
let allPositive = numbers4.every(function(num) {
    return num > 0;
});
console.log(allPositive); // output: true


//TODO: Syntax
//! join()
//? array.join(seperator)

let arr = ["apple", "banana", "orange"];
let result = arr.join('-');
console.log(result);
