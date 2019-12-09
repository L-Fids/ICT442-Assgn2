/****************************************************
* Assignment 2 - ICT 442: Random Operation Calculator FIRST CUT
* Author: Logan Fidler 
* Date: December 3, 2019
*****************************************************/

var rows, columns, startDate, tableStructure;

function runProgram() {
    //get rows and columns. 
    rows = parseInt(document.getElementById("rowInput").value);
    columns = parseInt(document.getElementById("columnInput").value);
    
    // create the table structure
    tableStructure = createStructure(rows, columns);

    // create the html table based on the table structure from user
    //createTable(tableStructure);
    console.log(tableStructure);
    console.log(this);
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

function createTable (tableStructure) {
    var selectTable = document.getElementById("calendarTable");
}