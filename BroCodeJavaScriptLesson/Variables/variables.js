// A Variable is a container for storing data
// A variable behaves as if it was the value that it contains

// two steps

// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let age = 21;// numbers
let myName = "Mike"; // string

//boolean data type(true/false)
let student = true; // tells whether a student is enrolled or not

console.log(age);
console.log(myName);
console.log(student);

/** IMPORTANT! Everything Under a past console log takes on the new variable from now on!!*/


//add to age variable
age = age + 1;
console.log(age);// returns 22! 22 is now the value of age from here on out, unless changed <---------------Important!

//adding a number to a string(will add number to the end of the string!)
myName = myName + 1;
console.log(myName) // returns Mike1 to console

//ADD on to console Logs
console.log("Hello, I am ", age, " years old");// returns Hello, I am 22 years old
console.log("Hello, my name is ", myName); // returns Hello, my name is Mike1
console.log("Enrolled: ", student); // returns Enrolled: true


//Change a paragraph with no input on the back end
myName = "Mike";// changes myNAme back to Mike( instead of Mike1)

document.getElementById("p1").innerHTML = "Hello " + myName;// returns Hello Mike on html page

document.getElementById("p2").innerHTML = "My Name is " + myName;

document.getElementById("p3").innerHTML = " You Are " + age + " years old";// returns You Are 22 years old

document.getElementById("p4").innerHTML = "Enrolled : " + student;