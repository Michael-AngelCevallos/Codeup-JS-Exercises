// todo Write a function named wait that accepts a number as a parameter,
// todo And returns a promise that resolves after the passed number of milliseconds.

const wait = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
}

wait(3000).then(() => console.log('Display in console after 3 seconds'));// waits then console.logs after 3 sec
wait(1000).then(() => console.log('Display in console after 1 second')); // waits then console.logs after 1 sec
console.log("Display Automatically"); // Automatically console.logs to console





const lastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events`,
        {headers: {
                "Authorization": `token ${PROMISES_PRAC_API}`
            }, })
        .then(resp => resp.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
};
lastCommit("Michael-AngelCevallos");