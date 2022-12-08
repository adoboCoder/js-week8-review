// attaching an event listener

function buttonClick() {
    console.log("Button was clicked!");
}

let button = document.querySelector("button");
button.addEventListener("click", buttonClick);

//button.removeEventListener("click", buttonClick);

let link = document.querySelector("a");
link.addEventListener("click", event => {
    event.preventDefault();
    alert("You're not going anywhere!");
});