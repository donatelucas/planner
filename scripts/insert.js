console.log("See ya, Space Cowboy");

entries = [];
storage = window.localStorage;

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

function getWeekday(weekday) {
    switch (weekday) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        default:
            return "¯\_(ツ)_/¯";
            break;
    }
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
