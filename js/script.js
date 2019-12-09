/****************************************************
* Assignment 2 - ICT 442: Random Operation Calculator FIRST CUT
* Author: Logan Fidler 
* Date: December 3, 2019
*****************************************************/

// Variable declarations
var rows, columns, startDate, tableStructure;

// Event handling for button push
var getButton = document.getElementById("tableButton");
getButton.addEventListener("click", runProgram);
getButton.addEventListener("click", clearInputs);

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
            outputArray[i][j] = counter++;
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

            var insertDate = document.createTextNode(today.toDateString());
            today.setDate(today.getDate() + 1);

            createTD.appendChild(insertDate);
            createTR.appendChild(createTD);
        }

        selectTable.appendChild(createTR);
    }
}

function clearInputs() {
    document.getElementById("tableInputs").reset();
}