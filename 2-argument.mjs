#! /usr/bin/node

import { argv } from "node:process"

/* argv.forEach(
       (arg, index) => { console.log('arg[' + index + ']: ' + arg)}
) */

/* const count = Number(argv[2])
for (let i = o; i < count; i++) {
       console.log ('Godswill be good') 
} */

const num = 0
console.log(num == '')
console.log(num === '')

const day = 7
switch (day) {
       case 1:
              console.log('Monday')
              break;
       case 2:
              console.log('Tuesday')
              break;
       case 3:
              console.log('Wednesday')
              break;
       case 4:
              console.log('Thursday')
       default:
              console.log('Sunday')
              break;
}