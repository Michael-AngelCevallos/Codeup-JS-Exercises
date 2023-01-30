


// todo Write a function named wait that accepts a number as a parameter,
// todo And returns a promise that resolves after the passed number of milliseconds.



function wait(num){
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve("Your promise will resolve after " + num + " milliseconds");
        }, num)
    });
}

wait(1000).then((data) => console.log(data));
wait(3000).then((data) => console.log(data));
wait(5000).then((data) => console.log(data));



function getUserLastCommit(username) {
    let url = `https://api.github.com/users/${username}/events/public`;

    console.log(url);

    return fetch(url, {headers: {'Authorization': 'GIT_TOKEN'}})
        .then((response) => response.json())
        .then((listOfEvents)=>{
            console.log(listOfEvents);
            for(let event of listOfEvents) {
                if(event.type ==='PushEvent'){
                    return event.created_at;
                }
            }
        })
}

getUserLastCommit('Michael-AngelCevallos').then(r => console.log());





