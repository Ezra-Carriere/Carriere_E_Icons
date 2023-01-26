console.log('Javascript is running!');


let play = document.querySelector("#play");

function logID() {
    console.log(this.id);
}

play.addEventListener('click', logID);

let speaker = document.querySelector("#speaker");

function logID() {
    console.log(this.id);
}

speaker.addEventListener('click', logID);
