var name = "Ken";
var age = 20;
var profession = "programmer";

var person = new Object();
person.pName = "Uno";   // property
person.pAge = 20;
person.pProfession = "Student";
// added 3 proporties

var student = {name: "Tom", grade: "Sophomore", class: "5"};
// declaration and initialization of an object

////////////////////////////////////

var p1 = document.getElementById("p1");

console.log("This is the type of this Element: ", p1.nodeType);
console.log("This is the Inner HTML: ", p1.innerHTML);
console.log("This is the child node: ", p1.childNodes);

var listitem = document.getElementsByTagName("li");
console.log("We have: ", listitem.length, "Items on li tag");



