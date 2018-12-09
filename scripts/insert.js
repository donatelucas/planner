console.log("See ya, Space Cowboy");

var input = document.querySelector('.input');
var output = document.querySelector('.output');
var save_button = document.querySelector('.save');

save_button.addEventListener('click', updateOutput);

output.textContent = localStorage.getItem('content');
input.value = localStorage.getItem('content');

function updateOutput() {
	localStorage.setItem('content', input.value);

	output.textContent = input.value;
    console.log(getItem('content'));
}

function save() {
    document.getElementById("save").addEventListener("click", function ()
    {
        var user = document.getElementById("user").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("user", user) ;
        alert("gmail id saved") ;
        console.log("gmail id saved")
    }, false);
}

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

// Returns last element input in cell
function fetch(id) {
    lastEntry = document.getElementById('1').value;
    entries.push(lastEntry);
    console.log(lastEntry);
    return entries;
}

function returnEntries() {
    for (i = 0; i < entries.length; i++) {
        console.log(entries[i]);
    }
}

// Saves all cell values on localStorage;
function save() {
    for (i = 0; i < entries.length; i++) {
        storage.setItem(i, entries[i]);
    }
}

function readStorage() {
    for (i = 0; i < entries.length; i++) {
        console.log(storage.getItem(i));
    }
}
