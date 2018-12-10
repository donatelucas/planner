var cells = 33;
var output;

function savePlanner() {
    for (i = 0; i < cells; i++) {
        localStorage.setItem(i, document.getElementsByTagName('textarea')[i].value);
    }
    console.log("Your stuff has been saved.");
}

for (i = 0; i < cells; i++) {
    output = localStorage.getItem(i);
    output.textContent = document.getElementsByTagName('textarea')[i].innerText = output;
}

function showPlanner() {
    for (i = 0; i < cells; i++) {
        console.log(localStorage.getItem(i));
    }
}

console.log("See you Space Cowboy...")
