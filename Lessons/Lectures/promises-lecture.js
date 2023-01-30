"use strict"

console.log('This happened First');

function getUsers() {
    fetch('https://api.github.com/users')
        .then(response => {
            // console.log(response);
            return response.text();
        })
        .then(data => {
            console.log('The Fetch is complete');
            return data
        })
        .catch(error => {
            // console.error(error)); // catches problem, and allows you to handle it in your own way
            alert(error);
        })


    console.log('This happened second');

    fetch('https://api.github.com/users')
        .then(response => {
            // console.log(response);
            return response.text();
        })
        .then(data => {
            //console.log(data);
        })
        .catch(error => {
            // console.error(error)); // catches problem, and allows you to handle it in your own way
            alert(error);
        })


    console.log('This happened third');

    fetch('https://api.github.com/users')
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .then(data => {
            //console.log(data);
        })
        .catch(error => {
            // console.error(error)); // catches problem, and allows you to handle it in your own way
            alert(error);
        })

}

async function getUsersAsync () {
    try {
        let response = await fetch('https://api.github.com/users');
        let data = await response.json();
        return data;
    } catch (error) {

    }

}


//iife arrow function
(async () => {
    try {
        let users = await getUsers();
        let repos = await getRepos();
    }
    catch (error) {

    }
})();



console.log(getUsersAsync());


console.log("This Happened After The Fetch")



//    fetch('https://api.github.com/users')
//         .then(response => {
//             // console.log(response);
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             // console.error(error)); // catches problem, and allows you to handle it in your own way
//             alert(error);
//         })