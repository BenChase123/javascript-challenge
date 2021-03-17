// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// var date = "1/2/2010"

// tableData = tableData.filter((sighting) => {
//     return sighting.datetime == date;
// })

tableData.forEach(function(UFO_Sighting) {
    // console.log(UFO_Sighting);
    var row = tbody.append("tr");
    Object.entries(UFO_Sighting).forEach(function([key, value]) {
    //   console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
});

  // Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
// form.on("change", runEnter2);

function deleteRow(rows){
    rows.parentNode.removeChild(rows);
}

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  var rows = document.getElementsByTagName('tbody')[0];
  console.log(rows)

//   for(var i = 1; i < rows.length; i++){
//     console.log(rows[i])
//     deleteRow(rows[i]);
//   }

  deleteRow(rows);

  var tableData = data;

  var table = d3.select("table")

  var tbody = table.append("tbody");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var date = inputElement.property("value");

  // Print the value to the console
//   console.log(date);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
//   d3.select("h1>span").text(inputValue);

  tableData = tableData.filter((sighting) => {
    return sighting.datetime == date;
  })

  tableData.forEach(function(UFO_Sighting) {
    // console.log(UFO_Sighting);
    var row = tbody.append("tr");
    Object.entries(UFO_Sighting).forEach(function([key, value]) {
    //   console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

//   var tableData = data;

}