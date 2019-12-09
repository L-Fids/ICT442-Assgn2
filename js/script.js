/****************************************************
* Assignment 2 - ICT 442: Random Operation Calculator FIRST CUT
* Author: Logan Fidler 
* Date: December 3, 2019
*****************************************************/

var rows, columns, startDate, tableStructure;

var getButton = document.getElementById("tableButton");
console.log(getButton);
getButton.addEventListener("click", runProgram);

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

function createTable (tableStructure) {
    var selectTable = document.getElementById("calendarTable");

    for (var i = 0; i < tableStructure.length; i++) {
        var createTR = document.createElement("tr");

        for (var j = 0; j < tableStructure[i].length; j++) {
            var createTD = document.createElement("td");
            var txt = document.createTextNode(tableStructure[i][j]);
            createTD.appendChild(txt);
            createTR.appendChild(createTD);
        }

        selectTable.appendChild(createTR);
    }
    
}