// Testing if .JS/API is connected to HTML //
console.log("hello");
console.log(moment().format("H"));
console.log(moment().format("h A"));

// Creating array for work day hours //
var timeArray = ["9 AM", "10 AM", "11 AM", "12PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

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

    // Adding 
    hourCol.text(timeArray[i]); 
    textCol.attr("id", "text" + i);


    




};




// TODO: create one row with time, text area and button using JQ

// TODO: Ref layout to make using JQ

{/* <div class="row time-block">
<div class="col-md-2 hour">
  9 am
</div>
<textarea class="col-md-8">
  
</textarea>
<button class="col-md-2 saveBtn">
  SAVE
</button>
</div> */}



// TODO: make 'for' loop to create the layouts for each hour. give content and appropriate classes.

// ref snip ----------

// TODO: Create event listener for buttons. 

// TODO: Grab the value of the text area and save it to a var (to be able to save the text from the text area that is in the same row as button)

// TODO: using localStorage.setItem save the text to local storage 

// TODO: retrieve the data from local storage using localStorage.getItem show it back in the text area they belong to (how can I know what text from local storage goes to what text area?) 

// localStorage snip --------------