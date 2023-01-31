
// make a request to the GitHub API (public user events end point) - Automatically returns 30 most recent events
// filter the events by PushEvents and return the first( or most recent) PushEvent
//  get created_at property and return from the function


//refactor to use Async/Await







// todo Write a function named wait that accepts a number as a parameter,
// todo And returns a promise that resolves after the passed number of milliseconds.


    function wait(num) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Your promise will resolve after " + num + " milliseconds  ----->>>>  ");
            }, num)
        });
    }

    wait(1000).then((data) => console.log(data + '  MONKEYS !!'));
    wait(3000).then((data) => console.log(data + '  BANANAS!!!'));
    wait(5000).then((data) => console.log(data + '  APPLES!!!!!!'));


//todo This is how you can write them apart


    let promise1 = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('You\'ll see this after 1 second');
        }, 1000);
    });

    promise1.then(function (value) {
        console.log(value);
    });
    let promise2 = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('You\'ll see this after 3 seconds');
        }, 3000);
    });

    promise2.then(function (value) {
        console.log(value);
    });
    let promise3 = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('You\'ll see this after 5 seconds');
        }, 5000)
    });
    promise3.then(function (value) {
        console.log(value);
    })


// //  todo Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
//
//
    /**IMPORTANT REMINDER --- >> `GIT_TOKEN` FOUND BELOW IS API KEY LOCATED IN KEYS.JS  */





    function lastCommit(userName) {
        return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': `GIT_TOKEN`}})
            .then((data) => {
                // console.log(data);
                return data.json()
            }).then((jsonData) => {
                // console.log(jsonData);
                return "Date of last commit:  " + jsonData[0].created_at + "  user name is: " + jsonData[0].actor.display_login
            })
    }


    lastCommit('Michael-AngelCevallos').then((data) => console.log(data));


/** HOW TO WRITE REFACTOR DATE IN CONSOLE LOG TO MAKE READABLE <<<------
 *
 * STEP 1: GO TO CONSOLE LOG IN HTML PAGE (INSPECT)
 * STEP 2: TYPE IN CONSOLE LOG:  const dateObject = new Date('2023-01-30T21:47:26Z'); // <<----- Enter the date given in here
 * Step 3: click enter // undefined <<--- is returned in console.log
 * Step 4: Type in console log: dateObject
 * Step 5: click enter // Date will now be returned in a readable format in the console log on html page
 */



/**  WITHOUT FUNCTION METHOD <<<<<<<<----------- */

// const lastCommit = (username) => {
//     fetch(`https://api.github.com/users/${username}/events`, {headers: {"Authorization": `GIT_TOKEN`}})
//         .then(resp => resp.json())
//         .then(data => data.find(event => event.type === "PushEvent"))
//         .then(event => event.created_at)
//         .then(date => console.log(date));
// };
//
// lastCommit("Michael-AngelCevallos");








/** Teachers Example, DID NOT WORK FOR ME */

// function getLastCommitDate(username){
//         const url = `https://api.github.com/users/${username}/events/public`
//     const options = {
//             headers: {
//                 'Authorization' : `token ${GIT_TOKEN}`
//             }
//     }
//         return fetch(url, options)
//             .then(res => res.json())
//             .then(data =>{
//                 const PushEvents = data.filter(event => event.type = 'PushEvent')[0]
//                 const mostRecentPush = PushEvents[0];
//                 const pushCreatedAt = mostRecentPush.created_at;
//                 return new Date(pushCreatedAt).toLocaleString;

//
//             })
//
// }
//
//
//
// getLastCommitDate("Michael-AngelCevallos").then((data) => {
//     console.log(data)
// })