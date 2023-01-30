const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



//  todo Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// todo .filter takes in a function which receives an item and decides (returns boolean) whether the item should make it or not

const threes = users.filter(user => user.languages.length >= 3);

console.log(threes);


// todo Use .map to create an array of strings where each element is a user's email address
//

let userEmails = users.map(user =>
    user.email);

console.log(userEmails);

// todo Use .reduce to get the total years of experience from the list of users. Once you get the total of years you
// todo can use the result to calculate the average.

let totalyears = users .reduce((userStack ,user) =>{
    return userStack += user.yearsOfExperience;
},0);

console.log("number of years " + totalyears);

let  userStack = 0;
for (let user of users){
    userStack += user.yearsOfExperience
}
console.log(totalyears / users.length);



// todo Use .reduce to get the longest email from the list of users.


let longestemail2 = users.reduce((longestSoFar, user) => {
    if (user.email.length > longestSoFar.length) return user.email;
    return longestSoFar;
}, "");


// todo

 let longestemail = userEmails.reduce(function (a, b)
{ return a.length > b.length ? a : b; });

console.log(longestemail2);


// Example: Your instructors are: ryan, luis, zach, fernando, justin.

let greeting = users.reduce((runningGreeting, user) => {
    return runningGreeting += user.name + ', ';
}, "your instructors are: " );
console.log(greeting);
greeting =greeting.substring(0, greeting.length-2) + '.';


let instructors = users.reduce((instructorStack ,user) =>{
    return instructorStack.concat(user.name)
},[]);

console.log(`"Your instructors are:" ${instructors}`);

// Use .reduce to get the unique list of languages from the list of users.

let knownlanguages = user.reduce((languages, user) =>{
    for(let lang in user.languages){
        if (!languages.includes(lang)) {
            languages.push(lang);
        }}
    return languages
},[]);

console.log(knownlanguages);


let uniquelanguages = users.reduce((languages, user)  => {
        for (let language of user.languages){
            if (!languages.includes(language)){
                languages.push(language);
    }
}
return languages;

},[]);

console.log(uniquelanguages);