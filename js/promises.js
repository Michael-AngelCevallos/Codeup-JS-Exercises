// todo Write a function named wait that accepts a number as a parameter,
// todo and returns a promise that resolves after the passed number of milliseconds.

const wait = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
}

// todo and returns a promise that resolves after the passed number of milliseconds.
wait(3000).then(() => console.log('Monkey'));// waits then console.logs after 3 sec
wait(1000).then(() => console.log('Banana')); // waits then console.logs after 1 sec
console.log("Hello"); // Automatically console.logs to console





// const lastCommit = (username) => {
//     fetch(`https://api.github.com/users/${username}/events`, {headers: {"Authorization": PROMISES_PRAC_API}})
//         .then(resp => resp.json())
//         .then(data => data.find(event => event.type === "PushEvent"))
//         .then(event => event.created_at)
//         .then(date => console.log(date));
// };
// lastCommit("Michael-AngelCevallos");