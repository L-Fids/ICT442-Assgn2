/****************************************************
* Assignment 2 - ICT 442: Random Operation Calculator FIRST CUT
* Author: Logan Fidler 
* Date: December 3, 2019
*****************************************************/

// Global variable declarations
var rows, columns, selectedRow, selectedCol, startDate, tableStructure;

// Event handling for table generating button
var getButton = document.getElementById("tableButton");
getButton.addEventListener("click", runProgram);
getButton.addEventListener("click", clearInputs);

// Event handling for reset button
var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetForm);

function runProgram(E) {
    //get rows and columns. 
    rows = document.getElementById("rowInput").value;
    columns = document.getElementById("columnInput").value;
    
    // create the table structure
    tableStructure = createStructure(rows, columns);

    // create the html table based on the table structure from user
    createTable(tableStructure);
}

// create the structure needed for the dynamically generated table
function createStructure(rows, columns) {
    var outputArray = [];
    var counter = 1;
    
    for (var i = 0; i < rows; i++) {
        outputArray[i] = []; 
        for (var j = 0; j < columns; j++) { 
            outputArray[i][j] = null;
        }
    }
    return outputArray;
}

// take the prebuilt structure and make it an html table.
function createTable (tableStructure) {
    var selectTable = document.getElementById("calendarTable");
    var today = new Date();

    for (var i = 0; i < tableStructure.length; i++) {
        var createTR = document.createElement("tr");

        for (var j = 0; j < tableStructure[i].length; j++) {
            var createTD = document.createElement("td");
            var createID = i + "-" + j;
            var makeBR = document.createElement("br");
            var makeLine = document.createTextNode(" | ");

            // create date node
            var insertDate = document.createTextNode(today.toDateString());
            today.setDate(today.getDate() + 1);

            // create add links
            var addLink = document.createElement("a");
            addLink.innerHTML = "Add Event";
            addLink.setAttribute("href", "#");
            addLink.addEventListener("click", addEventToCell);

            // create view links
            var viewLink = document.createElement("a");
            viewLink.innerHTML = "View Events";
            viewLink.setAttribute("href", "#");
            viewLink.addEventListener("click", viewEvents);

            // add id to cells, add date to cells, add cell to row.
            createTD.setAttribute("id", createID);
            createTD.appendChild(insertDate);
            createTD.appendChild(makeBR);
            createTD.appendChild(addLink);
            createTD.appendChild(makeLine);
            createTD.appendChild(viewLink);
            createTR.appendChild(createTD);
        }
        selectTable.appendChild(createTR);
    }
}

function addEventToCell(E) {
    var addLink = E.target;
    var parentTD = addLink.parentNode;

    var idArray = (parentTD.id).split("-");

    var selectedRow = Number(idArray[0]);
    var selectedCol = Number(idArray[1]);

    var newEvent = prompt("Add your new event:");

    console.log(tableStructure[selectedRow][selectedCol]); // should be null if nothing added

    if (tableStructure[selectedRow][selectedCol] == null) {
        tableStructure[selectedRow][selectedCol] = [];
        tableStructure[selectedRow][selectedCol].push(newEvent);
    }
    else {
        tableStructure[selectedRow][selectedCol].push(newEvent);
    }

    console.log(tableStructure[selectedRow][selectedCol]);
}

function viewEvents(E) {
    // determine location of clicked cell and store its coordinates
    var viewLink = E.target;
    var parentTD = viewLink.parentNode;
    var idArray = (parentTD.id).split("-");
    var selectedRow = Number(idArray[0]);
    var selectedCol = Number(idArray[1]);

    // determine the message to send the modal box
    var msg, count;
    
    if (tableStructure[selectedRow][selectedCol] == null || tableStructure[selectedRow][selectedCol].length < 1) {
        msg = "There are no events on this day";
        console.log(msg);
    }
    else {
        count = tableStructure[selectedRow][selectedCol].length;
        msg = count + " event(s) found on this day";
        console.log(msg);
    }

    // send the appropriate message to the modal box
    modalLogic(msg);
}

function modalLogic(msg) {
    // select elements from the modal
    var modal = document.getElementById("myModal"); 
    var span = document.getElementsByClassName("close")[0];
    var text = document.getElementById("modal-text");
    
    // set appropriate message for the modal
    text.innerHTML = msg;

    // set modal behavior
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(E) {
        if (E.target == modal) {
            modal.style.display = "none";
        }
    }
}

function clearInputs() {
    document.getElementById("tableInputs").reset();
}

function resetForm() {
    location.reload();
}



// TODO: need to create the "Add Events" and "View Events" links
// Need to add an eventlistener to each of the links
// one event listener calls a function that returns the number of events
// other event listener calls a function that lets an event get pushed to appropriate array position