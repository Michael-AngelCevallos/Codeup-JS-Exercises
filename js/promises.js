


// todo Write a function named wait that accepts a number as a parameter,
// todo And returns a promise that resolves after the passed number of milliseconds.



function wait(num){
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve("Your promise will resolve after " + num + " milliseconds  ----->>>>  ");
        }, num)
    });
}

wait(1000).then((data) => console.log(data + '  MONKEYS !!'));
wait(3000).then((data) => console.log(data + '  BANANAS!!!'));
wait(5000).then((data) => console.log(data + '  APPLES!!!!!!'));







//  todo Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.


const lastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {"Authorization": `GIT_TOKEN`}})
        .then(resp => resp.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
};

lastCommit("Michael-AngelCevallos");





