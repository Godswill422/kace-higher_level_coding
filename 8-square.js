#! /usr/bin/node

let size = 2;

for (let i = 0; i < size; i++) {
    let row = '';

    for (let j = 0; j < size; j++) {
     row += 'x';
    }
    console.log(row);
}