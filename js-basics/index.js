// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (e.g. 1name)
// Cannot contain a space or hyphen (e.g. (-))

let name = 'Mosh';
console.log(name);

// When declaring and initializing, initialize on seperate columns

let firstName = 'Uno';
let lastName = 'Bayan';

// use let when you want a changeable variable
// use const for (you know)

const interestRate = 0.3;
console.log(interestRate);

// Primitives/Value Types
let newName = 'Mosh'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let anotherName = undefined;
let emptyName = null;

// 2 types of languages :
// Static-typed
// Dynamic - JavaScript (e.g. you can assign a variable different values at run-time)
// use "typeof" to find a variable type in a console
// e.g. "typeof newName" gives string

// Reference Types - Object, Array, Function
// An Object
let person = {
    myName: 'Uno',
    age: 20
};

console.log(person);

// Dot Notation - Default
person.myName = 'Ken';

// Bracket Notation
person['myName'] = 'Kenichi';

console.log(person.myName);
// Kenichi

let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]); // red
selectedColors[2] = 'green';
console.log(selectedColors);
// The array is an object
console.log(selectedColors.length);
// 3

function greet(name) {
    console.log('Hello ' + name);
}

greet('Ken');
// Hello Ken

function square(number) {
    return number*number;
}

console.log(square(2));
// 4

// document writes on the page
for (let i = 0; i <= 10; i++) {
    document.write(i + '</br>');
}

// forin loop syntax
// for (let forin in object) {

// }


