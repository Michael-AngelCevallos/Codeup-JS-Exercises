/*
How TO Accept User Input

Easy way with window Prompt

Difficult Way with HTML textbox
 */

//EASY WAY
// let username = window.prompt("whats your name?")
// console.log(username);

//Difficult way - use html

//declare variable
let username;

document.getElementById("mybutton").onclick = function() {

    //this takes  whatever user input in textbox and displays user input in console
        username = document.getElementById("mytext").value;
         console.log(username);

     // Change the text of the label when button is clicked, username is the users input into the text box
    document.getElementById("myLabel").innerHTML = "Hello" + username;
}