/* Arithmetic expressions is a combination of ...
operands (values, variables, etc.)
operators( +,-, *, / , %)
that can be evaluated to a value
ex. y = x + 5;
 */

let students = 20;

//add to variable
students = students + 1;
console.log(students)

//subtract
students = students -1;
console.log(students)

//multiply
students = students * 2;
console.log(students)

//divide
students = students / 2;
console.log(students)


// Modules (%)- will divide by number given and return the even split number( NO Decimals, No Remainders, Just whole number)
// Normally used to find if a number is even or odd, ( apply variable name % 2, if 1 returns, number is odd, if 0 returns number is even<-------
let extraStudents =  students % 3;
console.log(extraStudents); //returns 2


//Augmented Assignment Operator
//Ex +=, -=

studendts += 1;
studendts -= 1;
studendts *= 2;
studendts /= 2;

/* PEMDAS APPLIES
ORDER OF OPERATIONS
1. PARENTHESIS
2.EXPONENTS
3.Multiplication
4.Division
5.Addition
6. Subtraction

 */

let result = 1 + 2 * (3 + 4);
console.log(result);// returns 15