console.log("See ya, Space Cowboy");


var entries = [];

// Returns last element input in cell
function fetch() {
    lastEntry = document.getElementById('input').value;
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
function save();
