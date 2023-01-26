"use strict"
//let message = myFunction(name:"Mike");
//console.log(message);
//myFunction();
//fight("Bob", "Billy");
//let x = isEven(90934852365423876);
//console.log(x);
//let y= isEven(8797592);
//console.log(y);
//let iBreakThings= isEven(true);
//console.log(iBreakThings);
let message = sayHello("Michael")
console.log(message)
//function myFunction(name){
   // return ("Thank you, " + name + " you have ran my function");
//}
//function fight(person1, person2){
    //console.log(person1 + " punched " + person2);

//}




"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name){
    alert ("Hello" + sayHello);
}


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

sayHello("Michael")
console.log();
/**
 *
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);




/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


removeFirstCharacter('bob');//  returns 'ob'
removeFirstCharacter('jason');// returns 'ason'

console.log(removeFirstCharacter);
function removeFirstCharacter(input){
    //if ( typeof input !== 'string') return false;
    //if (input.length === 0){
    //    return input;
    //} else {
    //    return input.slice(1)
    //}
    const output = (input) = (input.length === 0) ? input : input.slice(1);{
        return output;
    }
}
