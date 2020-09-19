// Testing if .JS/API is connected to HTML //
console.log("hello");
console.log(moment().format("H"));
console.log(moment().format("h A"));

// Creating array for work day hours //
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Creating an array to save to local storage 
// var textSave = [];

// Variable to get current time 
var currentTime = moment().format("H");
console.log(currentTime);

// DOM Elements
var currentDay = $("#currentDay");
var container = $(".container");


// Dynamically creating current date/time for page header 
currentDay.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

for (var i = 0; i < timeArray.length; i++) {
    // Creating page elements
    var timeRow = $("<div class = 'row time-block'>");
    var hourCol = $("<div class = 'col-md-2 hour'>");
    var textCol = $("<textarea class = 'col-md-8 '>");
    var saveCol = $("<button class = 'col-md-2 saveBtn'>");
    var btnIcon = $("<i class='fas fa-save'></i>"); 

    // Appending elements to the page 
    container.append(timeRow);
    timeRow.append(hourCol);
    timeRow.append(textCol);
    timeRow.append(saveCol);
    saveCol.append(btnIcon);

    // Adding separate id and data 
    textCol.attr("data-time", i);
    textCol.attr("id", i);


    // Adding content to page elements
    // Change from 24hr clock
    var timeChange = timeArray[i] - 12;
    if (timeArray[i] < 12) {
        hourCol.html(`${timeArray[i]} AM`);
        } else if (timeArray[i] === 12) {
        hourCol.html(`12 PM`)
        } else {
        hourCol.html(`${timeChange} PM`);
        };

    // Setting colors based on current time 
    if (timeArray[i] < currentTime) {
        textCol.attr("class", "col-md-8 past");
    } else if (timeArray[i] > currentTime) {
        textCol.attr("class", "col-md-8 future");
    } else if (timeArray == currentTime) {
        textCol.attr("class", "col-md-8 present");
    }

};








// TODO: Create event listener for buttons. 

// TODO: Grab the value of the text area and save it to a var (to be able to save the text from the text area that is in the same row as button)

// TODO: using localStorage.setItem save the text to local storage 

// TODO: retrieve the data from local storage using localStorage.getItem show it back in the text area they belong to (how can I know what text from local storage goes to what text area?) 

// localStorage snip --------------