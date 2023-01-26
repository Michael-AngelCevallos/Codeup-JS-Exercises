
/** SHORT HAND AND INCREMENTERS //  <--------------------------

num += 2; // num = num + 2
num -= 2; // num = num - 2
num *= 2; // num = num * 2
num /= 2;// num = num / 2
num++;// num = num + 1
num--;// num = num -1

*/





/**
 - While Loops

 1.Create a file named while.js in the js directory.

 2. Create a while loop that uses console.log() to create the output shown below.


 2
 4
 8
 16
 32
 64
 128
 256
 512
 1024
 2048
 4096
 8192
 16384
 32768
 65536

 */

let numMultiply = 2;
let counter = 0;
while(counter < 16){
    console.log(numMultiply)
    numMultiply = numMultiply *= 2;
    counter++;
}



/*/////////   OR ///BUT, TOP IS BETTER EXAMPLE/////

for(let i = 2; i <= 65536; i *= 2){
    console.log(i)
}

*/

/*/OR//


for(let i = 0, num = 2; i < 16; i++){
    console.log(num);
    num *= 2
}

*/

/**
 - Do While Loop
 1. An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.


 // This is how you get a random number between 50 and 100
 var allCones = Math.floor(Math.random() * 50) + 50;
 // This expression will generate a random number between 1 and 5
 Math.floor(Math.random() * 5) + 1;
 The output should be similar to the following:

 5 cones sold...  // if there are enough cones
 Cannot sell you 6 cones I only have 3...  // If there are not enough cones
 Yay! I sold them all! // If there are no more cones
 1. Finally, commit the changes to your git repository, and push to GitHub.
 PreviousIntro to Unit Testing
 NextIntroduction

 */



function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let conesToSell = getRandomNum(50, 100);
do{
    let conesToBuy = getRandomNum(1, 5);
    if (conesToBuy <= conesToSell){
        console.log(`${conesToBuy} cones sold...`);
        conesToSell -= conesToBuy; // conesToSell = conesToSell - conesToBuy
    }else {
        console.log(`Cannot sell you ${conesToBuy} cones, I only have ${conesToSell}....`);
        console.log(`${conesToSell} cones sold...`)
        conesToSell -= conesToSell;

    }if (conesToSell === 0){
        console.log(" Hell Yea! I have sold them all!!!")
        break;
    }
}while (conesToSell > 0)

