// // const name = "Michael";
// // const fruits = ['banana', 'strawberry', 'orange'];
// // // const users = [
// // //     {
// // //         name: 'Michael',
// // //         languages: ['html', 'css', 'js']
// // //     },
// // //     {
// // //        name: 'Ryan',
// // //        languages: ['htm', 'css', 'java']
// // //     }
// // // ]
// //
// //
// // for (let item of fruits){
// //     console.log(item)
// // }
//
//
//
//
//
//
//
// /**  ES6 FAST METHOD */
//
//
//  // todo Regular Function for evenOrOdd//
//
//     // function evenOrOdd(n){
// //     let result;
// //     if(n % 2 === 0){
// //         result = 'even'
// //     } else{
// //         result = 'odd'
// //     }
// //     return result;
// // }
//
//
//     // todo es6 method with Function //
//
//   // function evenOrOdd(n)  {
//   //     return (n % 2 === 0) ? 'even' : 'odd';
//   // }
//
//
// // todo ALSO EVEN FASTER CONST METHOD <<<<-------- BEST METHOD
//
//   const evenOrOdd = (n) => (n % 2 === 0) ? 'even' : 'odd';
//
//
//
// console.log(evenOrOdd(2))
// console.log(evenOrOdd(3))
// console.log(evenOrOdd(18))
// console.log(evenOrOdd(235))
//
//
//
// /** */
//
// const helloWorld = (name = 'Mike') => `Hello, ${name}!`
//
//
// console.log(helloWorld('Carlos'));
// console.log(helloWorld())
//
//
//
//
// /**  Object Property Variable Assignment Shorthand */
//
//
//          let name = 'Mike'
//          let languages = ['java', 'js', 'css'];
//
//
// let user ={
//     name,
//     languages
// }
//
// console.log(user)

/** ES6 Method For ARRAYS */
//
// const users = [
//     {
//         name: " MIKE",
//         languages: ['spanish', 'english']
//     },
//     {
//         name: "Yason",
//         languages: ['spanish', 'french']
//
//     }
// ];
//
// let otherUsers = [
//     {
//         name: 'Bart',
//         email: 'barta@gmail.com',
//         languages: ['japanese', 'french']
//     }
// ]
//
//
// let lastNewUser = [
//     {
//         name: 'Jesus',
//         languages: ['everything']
//     }
// ]



// TODO OBJECT DESTRUCTURING SHORT HAND
const person = {name: 'codeup', age: 4}

// let name = person.name;
// let age = person.age;
// let {age, name} = person;
// let html = `
// <h1>${name}</h1>
// <p>${age}</p>
// `;
//
// console.log(name);



//todo SPREAD OPERATOR
// let newUserArray = [
//     ...users,
//     ...otherUsers,
//     ...lastNewUser
//
// ];
// console.log(newUserArray)
//


// TODO FINDING THE HIGHEST NUMBER IN AN ARRAY
let numbers = [1,2,3,13,27,4,13];
console.log(Math.max(...numbers)) //  returns 27


// TODO LOGGING THE PROPERTIES OF AN OBJECT IN A SPECIFIC VARIABLE

let obj1 = {
    a: 1,
    b:2
};
let obj2 = {
    a: 3,
    b:4
};
let obj3 = {
    a:5,
    b:6
}

console.log(obj3)



// import moment from 'moment-js';
//
// $(document).ready(function() {
//     console.log('Hello, world');
//
//
//     });




/** todo EXERCISE ES6 STARTS HERE <<<<<<<<-----------------*/

/*
 * Complete the TODO items below
 */
//
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },
    {
        name: 'J.W.',
        email: 'jameshester88@gmail.com',
        languages: ['html', 'css', 'javascript']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
// var name = 'your_name_here';

const name = 'Mike'
const email = 'michaelcevallos94@yahoo.com';
const languages = ['css', 'js', 'jquery', 'bootstrap'];

// TODO: rewrite the object literal using object property shorthand

const user = {
    name,
    email,
    languages
};

users.push(user);
console.log(users);


// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];


// TODO: rewrite the following using arrow functions


// // todo Function Method
// function doThisThang (){
//
// }
//
// //todo Const with Arrow function Method EASIEST
// const doThisThang = () => {
//
// }


users.forEach(user => {
    emails.push(user.email);
    console.log(user.email);
});

// todo another way to write out a forEach function
// users.forEach(user => names.push(user.name));
// console.log(user.name);



// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {


    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;

    /** ANSWER */
    const {name, email, languages} = user;

    console.log(user);
    // TODO: rewrite the assignment below to use template strings

    // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));


    /** ANSWER */
    // let formattedName = name.charAt(0).toUpperCase() + name.slice(1);   <<<---- Finish THis, Makes first letter of name Uppercase

    developers.push(`${name}'s email is ${email},  ${name} knows ${languages.join(',')}`);
});
console.log(developers);


// TODO: Use `let` for the following variable
// var list = '<ul>';


/** ANSWER */
let list = '<ul>';



// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {


/** Answer */
for (let developer of developers) {
    list += `<li> ${developer} </li>`;

}

    // TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
// list += '</ul>';



/**Answer */
list += `</ul>`;

console.log(list);
// document.getElementById("message").innerHTML = list;

// document.body.innerHTML = list;