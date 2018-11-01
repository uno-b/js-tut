var name = "Ken";
var age = 20;
var profession = "programmer";

// add 3 proporties
var person = new Object();
person.pName = "Uno";   // property
person.pAge = 20;
person.pProfession = "Student";


// declaration and initialization of an object
var student = {name: "Tom", grade: "Sophomore", class: "5"};


////////////////////////////////////

var p1 = document.getElementById("p1");

console.log("This is the type of this Element: ", p1.nodeType);// 1
console.log("This is the Inner HTML: ", p1.innerHTML); // Hello, this is the paragraph
console.log("This is the child node: ", p1.childNodes); // Nodelist [text]

var listitem = document.getElementsByTagName("li");
console.log("We have: ", listitem.length, "Items on li tag");

// change value in html
p1.innerHTML = "Changed the p1 text using js";

// create element using js
var createPTag = document.createElement("p");
createPTag.innerHTML = "I just created a new P Tag w/ javascript";

// add the above element inside id with maincontainer
document.getElementById("maincontainer").appendChild(createPTag);

// create a more specific element instead of a tag
var createElement = document.createTextNode("This is a new text node");
document.getElementById("maincontainer").appendChild(createElement);

// time
function timer5Seconds() {
    alert("This is 5 seconds timer");
}

// a message alert will pop up after 2 seconds
// good for creating animation
setTimeout(timer5Seconds, 5000);


















