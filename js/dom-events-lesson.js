"use strict";
// Immediately Invoked Function Expression (IFFE)
(() => {
    let btn = document.querySelector('#btn1');
    let btn2 = document.querySelector('#btn2');
    let btn3 = document.querySelector()
    // Add an Event Listener to btn1
    btn.addEventListener("click", () => {
        alert('Great job following Instructions');

    });
    // Add listener to btn2
    btn.addEventListener("click", () => {
        //First Remove All buttons on page
        btn.remove();
        btn2.remove();
        let video = document.createElement("video");
        video.src = // Place saved file here (find in saved folder);
        video.autoplay = true;
        document.querySelector('.page-wrapper').appendChild(video);

        btn3.addEventListener("click", () => {
            btn2.removeEventListener("click", // add your nuke video here)
        })

        // Manipulate header
        let header = document.querySelector('#header');
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 0) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        })


    });
})();