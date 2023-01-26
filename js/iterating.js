
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'classMates'. then console.log
     */
let classMates = ['Mike', 'John', 'Alex', 'James'];
    console.log(classMates)
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the classMates
     * array.
     */
    console.log( classMates.length );

    /**
     * TODO:
     * Create log statements that will print each of the classMates individually by
     * accessing each element's index.
     */
        console.log(classMates[0])
        console.log(classMates[1])
        console.log(classMates[2])
        console.log(classMates[3])
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the classMates
     * array.
     */
    console.log('- Same but With a for loop')

    for (let i = 0; i < classMates.length; i += 1){
        console.log(classMates[i])
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log('-With ForEach loop-')

        classMates.forEach(function(element){
            console.log(element)
        });

 console.log('-Call 3 functions Exercise-')
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     */   /**
     * - second: returns the second item in the array
     *
     *
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


     let nameArr = ['john', 'jeremy', 'alexander'];
     function first(arr){
         return arr[0];
     }

     function second (arr){
         return arr[1];
     }
     function third(arr){
         return arr[2]
     };

     console.log(first(nameArr));
    console.log(second(nameArr));
    console.log(third(nameArr));

;



/**
 *
 * //////////// ---------> NOTES <----------//////////
 * let students = [
 *
 * "Justin"; // 0
 * "Javier";// 1
 * "laura";// 2
 * "Issac"; // 3
 * "Trevor";// 4
 * "Dane";// 5
 * "Ryan";// 6
 * Vivian";// 7
 *];
 *
 *
 *
 * //EXAMPLES//
 * console.log(students.length) // GIVES U "Justin"
 * console.log(students[students.length - 2]); // GIVES YOU SECOND TO LAST ARRAY
 *
 * console.log(students (1,5)//
 *
 * students[0] = 'William';
 * console.log(students);
 *
 *
 *
 *
 */


// ============================= ARRAYS AND FUNCTIONS EXAMPLES

// !! Write a function, logNums, that takes in an array and logs each number in the array !!

/*const arr = [1, 2, 3, 4, 5];
function logNums(input){
    arr.forEach(function(input){
        console.log(input);
    });
    logNums(arr);
*/
// !! Write a function, returnLongString, that takes in an array of strings and returns all strings concatenated together !!

    const arrStrings = ['apples', 'toast', 'cats', 'dogs'];

    function returnLongString(arr) {
        let stringClump;
        for (let i = 0; i < arr.length; i += 1) {
            stringClump += arr[i];
        }
        return stringClump
    }
    console.log(returnLongString(arrStrings))

// !! Write a function, returnArrSum, that takes in an array of values and returns the sum of all number elements !!

const array = [1, 2, 3, 4, 5];


    function returnArrSum(arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum +=[i];
        }
        return sum;
    }
    returnArrSum(array);
    console.log(7);



function returnArrSum(arr){
    let sum = 0;
    array.forEach(function(value){
        sum += value;

    });
    console.log(sum)
}
console.log(returnArrSum)


console.log( ' --BONUS--');
//1. Create an array of 10 foods. Write using a for loop, write logic that will log only the foods that start with a vowel. Write another solution using a forEach loop.
const foods = ['pies', 'apples', 'peanuts', 'tacos', 'ice', 'oreo', 'bananas', 'tortas', 'burger', 'jelly'];

for(let i=0; i < foods.length; i++){
    let firstChar = foods[i][0];
    let vowels = ['a', 'e', 'i', 'o', 'u']
    if(vowels.includes(firstChar)){
        console.log(foods[i]); // if the first char is a vowel
    }

}

//2. Write a function, addEvenNums, that takes in an array of numbers and adds up only the even numbers in the array and returns the sum of the even numbers. Assume any array inputs will only contain valid number elements and be non-empty.


//3. Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
//‘input num in input array’ if the second argument is an element in the first argument array
//otherwise, the function should return the string ‘input num NOT in input array’ (edited)