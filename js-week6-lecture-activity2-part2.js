// attaching an event listener

let button = document.querySelector("button");
button.addEventListener("click", event => {
    if (event.button == 0) {
        console.log("Left button");
    } else if (event.button == 1) {
        console.log("Middle button");
    } else if (event.button == 2) {
        console.log("Right button");
    }
});

let body = document.querySelector("body");
body.addEventListener("keydown", event => {
    console.log("You pressed the " + event.key);
});