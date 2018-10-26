console.log("See ya, Space Cowboy");

entries = [];
storage = window.localStorage;

// Returns last element input in cell
function fetch(id) {
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
function save() {
    storage.setItem(date, entries);
}

function readStorage() {
    return storage.getItem(date);
}
