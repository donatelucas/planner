var input = document.querySelector('.user-input');
var output = document.querySelector('.content-output');
var save = document.querySelector('.save-button');

save.addEventListener('set', setItem);

output.textContent = localStorage.getItem('planner');
input.value = localStorage.getItem('planner');

function setItem() {

        localStorage.setItem('planner', input.value);
        output.textContent = input.value;


	// localStorage.setItem('planner', input.value);
    // output.textContent = input.value;
    // return output.textContent;
}

/*
function ryuseiken() {
    output.textContent.forEach(function(setItem) {
        output.textContent = input.value;
    }
}); */

function getDate() {
    var d = new Date();
    var date = d.toString();
    return date;
}

function displayDate() {
    var date = getDate();
    var str = date.substring(0,15);
    document.getElementById("date").innerHTML = str;
    return str;
}

console.log("See ya, Space Cowboy");
