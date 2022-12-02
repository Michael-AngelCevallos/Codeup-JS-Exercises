
// ============================= !! MINI-EXERCISE 1 !!

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
console.log('4. write a program that allows user to enter 10 grocery items.');

const grocerItems = [];

for ( let i = 0; i < 4; i += 1){
    grocerItems[i] = prompt("Enter grocery items");

}

console.log(grocerItems)


/**
 *
 * Loops Notes
 */

let pies = [ 'apple', 'cherry', 'key lime', 'huckleberry'];
              //0        1          2              3
for (let i = 0; i < pies.length; i += 1){ // pies.length gives you index #
    console.log(i);
    console.log(pies[i]);
}