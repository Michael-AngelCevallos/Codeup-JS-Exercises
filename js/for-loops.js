/**
1.Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

For example, showMultiplicationTable(7) should output


7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
*/

let ShowMultiplicationTable = 1;
for (let i = 1; i <= 10; i++) {
 let result = ShowMultiplicationTable * i;
 console.log(ShowMultiplicationTable + ' * ' + i + ' = ' + result);
}
//OR

//showMultiplication(7);
//function sowMultiplicationTable(num){
//for(i = 1,; i < 11; i++){
//let answer = `${num} x ${i} = ${num * i}`;
//console.log(answer)
//}
//}

//END
/**2. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:


    123 is odd
80 is even
24 is even
199 is odd
...
 */



for (let i = 0; i < 10; i++){
 let randomNum = getRandomNum(20, 200);
 let isEven = randomNum % 2 === 0;
 let answer = `${randomNum} is ${isEven ? 'even': 'odd'}`
 console.log(answer);
}
 function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
 }

/**
3.Create a for loop that uses console.log to create the output shown below.


1
22
333
4444
55555
666666
7777777
88888888
999999999
 */

for (let i = 0; i < 9; i++) {
 let number = i + 1; // this is actual number being printed
 let result = number.toString();// makes it a string, so any operators concat in the result
 for (let j = 1; j <= i; j++) {
   result += number; // concat the num at the end of result
 }
 console.log(result)
}

/* OR!!!!!!! for.loop method
for(let i = 0; i < 9; i++{
let answer = String(i+1).repeat(i+1);
console.log(answer);
}
 */
/**
4. Create a for loop that uses console.log to create the output shown below.


100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5
 */

for(let i = 100; i > 0; i -= 5){
 console.log(i);
}

