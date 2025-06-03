#!/usr/bin/node

const { count } = require("node:console")
const { argv } = require ("node:process") 

// console.log(`argv[2]: ${argv[2]}`)

console.log(`2 + 5 = ${2 + 5}`)

const number = '2009'
console.log(Number(number))

for (let i = 0; i < 3; i++) console.log(i)

/*
const num = 0
console.log(num == '')
console.log(num === '') 
console.log("3 +5 ")

 let y = 13
 console.log(y)
 */


/*
let size = 5, i, j;

for (i = 0; i < size; i++) {
    let row = ''
    for (j = 0; j < size; j++) {
        row += '*  ' // row = row + '*'
    }
    console.log(row);
}
*/

/*
function pow(x, n) {
    let result = 1;

    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log( pow(2, 3) ); // 8
console.log( pow(2, 4) ); // 16
console.log( pow(3, 3) ); // 27

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log('--------')
console.log( pow(3, 1) ); // 3
console.log( pow(2, 3) ); // 8
console.log( pow(2, 4) ); // 16
console.log( pow(3, 3) ); // 27
*/