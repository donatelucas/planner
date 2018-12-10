var cells = 33;
// var input = document.getElementsByTagName('textarea');
var output = document.querySelector('.content-output');
output.textContent = localStorage.getItem('planner');

function savePlanner() {
    for (i = 0; i < cells; i++) {
        localStorage.setItem(i, document.getElementsByTagName('textarea')[i].value);
    }
    console.log("Your stuff has been saved.");
}

function showPlanner() {
    for (i = 0; i < cells; i++) {
        console.log(localStorage.getItem(i));
    }
}
