/* 
* Copyright (c) by Vedansh 
*/

console.log("\n\t First Typescript Program !!\n\t");
console.log("================================\n");

// Syntax for type declarations: [keyword] [varName]: [type] = [value];
// any type is used for assigning any type of data in it.

let log = console.log;
let num: any; // type definition
let rollno: number = 10922;
let string: string = "Its me rahul";
let valid: boolean = true;
let x: null = null;
let y: undefined;
let z: void;
let arr: Array<number> = [];

log("1st num : "+num);
log("2nd rollno : "+rollno);
log("3rd string : "+string);
log("4th valid : "+valid);
log("5th x : "+x);
log("6th y : "+y);
log("7th z : "+z);


console.log("================================\n");
console.log("\n End of Program !!\n\t");