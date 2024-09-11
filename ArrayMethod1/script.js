//TODO: Syntax
//! Array.from()
//? Array.from(arrayLike, mapFn, thisArg)

let str = "Hello";
let value = Array.from(str);
console.log(value); // output: ["H", "e", "l", "l", "o"]

//TODO: Syntax
//! Array.from()
//? Array.from(arrayLike, mapFn, thisArg) // creating Array.from() a set
let mySet = new Set(["apple", "banana", "orange"]);
let setArr = Array.from(mySet);
console.log(setArr); // output: ["apple", "banana", "orange"]


//TODO: Syntax
//! Array.from()
//? Array.from(arrayLike, mapFn, thisArg) // creating Array.from() arguments
function f() {
    return Array.from(arguments);
}
console.log(f(1, 2, 3)); // output: [1, 2, 3]

//TODO: Syntax
//! Array.from()
//? Array.from(arrayLike, mapFn, thisArg) // using Array.from() with a map function
let n = [1, 2, 3];
let doubled = Array.from(n, x => x * 2);
console.log(doubled); // [2, 4, 6]


//TODO: Syntax
//! Array.from()
//? Array.from(arrayLike, mapFn, thisArg) // using Array.from() an iterable object

let iterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}
let newArr = Array.from(iterable);
console.log(newArr); // output: [1, 2, 3]


//TODO: Syntax
//! substring()
//? str.substring(indexStart, indexEnd) 
//FIXME: Example 1
let string = 'Hello, world!';
let strResult = string.substring(0, 5);
console.log(strResult); // output: 'Hello'

//FIXME: Example 2
//? Explanation: if the start index is greater than the end index, substring() swaps them, treating the call as str.substring(2, 7)
let string1 = 'Hello, world!';
let strResult1 = string1.substring(2, 7);
console.log(strResult1); // output: 'ello'

//FIXME: Example 3
//? Negative indexes are treated as 0, Here, str.substring(-3, 5) is equivalent to str.substring(0, 5), resulting in "Hello"
let string2 = 'Hello, world!';
let strResult2 = string2.substring(-3, 5);
console.log(strResult2); // output: 'Hello'

//TODO: Syntax
//! copyWithin()
//? array.copyWithin(target, start, end) 
//FIXME: Example 1
//? target: Zero-based index at which to copy the sequence to. If negative, it will be counted from the end
//? start (optional): Zero-based index at which to start copying elements from. If omitted, it defaults to 0.
//? end (optional):  Zero-based index at which to start copying elements from (end is not include). If omitted, it defaults to array.length

let arr1 = [1, 2, 3, 4, 5];
arr1.copyWithin(0, 3);
console.log(arr1); // output: [4, 5, 3, 4, 5]

//FIXME: Example 2


let arr2 = [1, 2, 3, 4, 5];
arr2.copyWithin(1, 3, 4);
console.log(arr2); // output: [1, 4, 3, 4, 5]

//FIXME: Example 3 Overlapping Copy
let arr3 = [1, 2, 3, 4, 5];
arr3.copyWithin(2, 0, 2);
console.log(arr3); // output: [1, 2, 1, 2, 5]

//TODO: Syntax
//! entries()
//? array.entries()

let arr4 = ["a", "b", "c"];
let iterabl = arr4.entries();
console.log(iterabl.next().value); // output: [0, 'a]
console.log(iterabl.next().value); // output: [1, 'b]
console.log(iterabl.next().value); // output: [2, 'c]

//TODO: Syntax
//! entries()
//? array.entries()
//? using a fro of loop
let arr5 = ["apple", "banana", "cherry"];
for(let [index, value] of arr5.entries()) {
    console.log(index, value);
}
// output:
// 0 'apple'
// 1 'banana'
// 2 'cherry'


//TODO: Syntax
//! toLocalString()
let number2 = 1234567.89;
document.write(number2.toLocaleString('en-US'));


//TODO: Syntax
//! padStart(targetLength, padString)
//? example 1
let strr = '5';
let paddedStr = strr.padStart(3, "0");
console.log(paddedStr);

//? example 2
let number = 1234567896;
let paddedNumber = number.toString().slice(-4);
let paddedString = paddedNumber.padStart(10, "*");
console.log(paddedString);