let screen = document.getElementById("screen");
const DELAY = 0;

let state = 0;
let fontSize = 0;
let sizeDifference = 2;;
let person = ["지원", "유찬", "은수", "은교", "인가", "주안"];
let personIndex = 0;

setInterval(function() {
    if (state === 0) {
        screen.style.backgroundColor = "#00FF00";
        screen.style.color = "#FF0000";

        state = 1;
    }
    else if (state === 1) {;
        screen.style.backgroundColor = "#0000FF";
        screen.style.color = "#00FF00";

        state = 2;
    }
    else {
        screen.style.backgroundColor = "#FF0000";
        screen.style.color = "#0000FF";

        state = 0;
    }
    if (fontSize > 150 || fontSize < 0) {
        if (fontSize < 0) {
            if (++personIndex >= person.length) personIndex = 0;
            screen.textContent = person[personIndex] + "선배 멋져요";
        }
        sizeDifference *= -1;
    }
    fontSize += sizeDifference;
    screen.style.fontSize = fontSize + "px";
}, DELAY);
