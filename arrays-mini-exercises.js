
// ============================= !! MINI-EXERCISE 1 !!
console.log('-----> MINI-EXERCISE 1 <------');

const classMates = ['Jona', 'Action', 'Nando']

//#1
console.log('1. Create an array of three of your classmates.');
console.log(classMates)

//#2
console.log('2. Practice console logging each classmate separately.');
console.log(classMates[0]);
console.log(classMates[1]);
console.log(classMates[2]);
//#3
console.log('3. Reassign the second element to be the string "Justin".');

classMates[1]= 'Justin'
console.log(classMates)
//#4
console.log('4. write a program that prompts user to enter 10 grocery items.');

const grocerItems = [];

for ( let i = 0; i < 4; i += 1){
    grocerItems[i] = prompt("Enter grocery items");

}

console.log(grocerItems)

/**
 *
 * /////////------> Loops Notes <-------- ///////////////
 */


console.log(' LOOP NOTES')


console.log('EXAMPLE #1')
let pies = [ 'apple', 'cherry', 'key lime', 'huckleberry'];
              //0        1          2              3
for (let i = 0; i < pies.length; i += 1){ // pies.length gives you index #
    console.log(i);
    console.log(pies[i]);
}

console.log('EXAMPLE #2');

for (let i = pies.length - 1; i >= 0; i -= 1){
    console.log[i];
}


console.log("ForEach LOOPS");
/** ForEach LOOPS
 *
 *  //// SYNTAX/////
 *
 *  someArray.forEach(function(element, index, array){
 *      console.log(element);
 *      console.log(index);
 *  }
 *
 *  // PROS: simpler Syntax, easier to read
 *  // CONS: can only increment through entire array
 *  // USE: when you
 *
 *
 *
 *  const number = [1, 2, 3, 4, 5];
 *  function logEvenOddMessage(number){
 *      let isEvenMsg = ( number % 2 === 0) ? 'even' : 'odd' ;
 *      console.log(isEvenMsg);
 *
 * }
 *
 * logEvenOddMessage(numbers[1]);
 *
 * numbers.forEach();
 *
 *
 *
 * /// this (below) outputs 9
 * const numbers = [3, 2, 4];
 * let total = 0;
 * numbers.forEach(function(number){
 *      total += number;
 * });
 * console.log(total);
 */

// ============================= !! MINI-EXERCISE 2 !!
console.log('-----> MINI-EXERCISE 2 <---------');
// classMates HAS BEEN DECLARED ALREADY IN ABOVE EXAMPLES///
// NORMALLY YOU WOULD HAVE TO PUT ' let classMates = [ names go here ];
    console.log('1. Loop through your classmates array with a for loop to log each classmate.')

for (let i = 0; i < classMates.length; i += 1){ // classMates.length gives you index #

    console.log(classMates[i]);
}


console.log('2. Loop through your classmates array with a forEach loop to log each classmate.')

classMates.forEach(function(element) {
    console.log(element);

});


console.log('USING AN ARROW FUNCTION TODO SAME AS ABOVE');
/** USING AN ARROW FUNCTION TODO SAME AS ABOVE */

classMates.forEach((element) =>{
    console.log(element)
});


