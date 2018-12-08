console.log("See ya, Space Cowboy");

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
    for (i = 0; i < entries.length; i++) {
        storage.setItem(i, entries[i]);
    }
}

function readStorage() {
    for (i = 0; i < entries.length; i++) {
        console.log(storage.getItem(i));
    }
}

/* Editable textform function example
Link: https://collectiveidea.com/blog/archives/2017/06/13/adjustable-form-text-area-with-the-contenteditable-tag */
/*
$(document).ready(function() {
  $(document).on("submit", "form#new_expandable", function(e) {
    e.preventDefault();

    var contents = $(".expandable-input").html();

    $('input#expandable').val(contents);
    this.submit();
  });
}); */
