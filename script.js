// Testing if .JS/API is connected to HTML //
console.log("hello");
console.log(moment().format("H"));
console.log(moment().format("h A"));

// Creating array for work day hours //
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Creating an object array to save to local storage 
var textSave = [{planText: 0, text: ""},
                {planText: 1, text: ""},
                {planText: 2, text: ""},
                {planText: 3, text: ""},
                {planText: 4, text: ""},
                {planText: 5, text: ""},
                {planText: 6, text: ""},
                {planText: 7, text: ""},
                {planText: 8, text: ""}
                ];

// Creating a variable to check localStorage
var storageCheck = JSON.parse(localStorage.getItem("Daily Plan"));

// Checking if local storage is null 
if (storageCheck != null) {
    textSave = storageCheck;
};

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
    // Putting text into textarea from textSave/localStorage
    textCol.text(textSave[i].text);
    var saveCol = $("<button class = 'col-md-2 saveBtn'>");
    var btnIcon = $("<i class='fas fa-save'></i>"); 

    // Appending elements to the page 
    container.append(timeRow);
    timeRow.append(hourCol);
    timeRow.append(textCol);
    timeRow.append(saveCol);
    saveCol.append(btnIcon);

    // Adding separate id and data 
    saveCol.attr("data-time", i);
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
    } else if (timeArray[i] == currentTime) {
        textCol.attr("class", "col-md-8 present");
    }

};


$(document).on("click", ".saveBtn", function() {
    var clickData = ($(this).attr("data-time"));
    var clickText = $(`textarea[data-time=${clickData}]`).val();
    for (var j = 0; j < textSave.length; j++) {
        console.log(clickData);
        if (textSave[j].planText === parseInt(clickData)) {
            textSave[j].text = clickText;
        }  
    };

    localStorage.setItem("Daily Plan", JSON.stringify(textSave));
//  console.log(textSave);

});
