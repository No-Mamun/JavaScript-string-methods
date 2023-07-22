
// JavaScript string methods

/*
string methods
1.toUpperCase()
2.toLocaleLowerCase()
3.Includes();
4.Slice
5.Replacing String Content
6.concat;

*/

/*
No:1

const productTitle = 'White T-shirt/Cotton Round Neck T-Shirt for Men / Half sleeve T-Shirt F';

console.log(productTitle.toUpperCase());

console.log(productTitle.toLocaleLowerCase());

console.log(productTitle);

console.log(productTitle.includes("Cotton"));

const pTitleLow = productTitle.toLocaleLowerCase();

console.log(pTitleLow);

console.log(productTitle.slice(0, 50)  + '....');

*/

/*
No:2
let str = "Apple, Banana, Mango";

console.log(str.slice(7,20));

*/

/*
No:3,Replacing String Content;

let str = "I love you Sakina";

let Zarina = str.replace("Sakina","Zarina");

console.log(Zarina);

*/

/*
No:4,Replacing String Content;

let str = "This is php Tutorial";

let newtext = str.replace("php","Js");

console.log(str);

console.log(newtext);

*/

/*
No:5,Replacing String Content;

let str = "This is php Tutorial";

let newtext = str.toLocaleUpperCase();

let newtext = str.toLowerCase();

console.log(newtext);
*/

// No:6,Replacing String Content;

var text1 = "This php Tutorial";

var text2 = "This Js Tutorial";

var newtext = text1.concat(" ",text2,' Thanks');

console.log(newtext);
