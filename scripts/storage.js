var cells = 33;
// var input = document.getElementsByTagName('textarea');
var output = document.querySelector('.content-output');
output.textContent = localStorage.getItem('planner');

function savePlanner() {
    for (i = 0; i < cells; i++) {
        localStorage.setItem('planner', document.getElementsByTagName('textarea')[i].value);
    }
}

function showPlanner() {
    for (i = 0; i < cells; i++) {
        console.log(localStorage.getItem('planner', i));
        console.log("Your stuff has been saved.");
    }
}
