// from data.js
var tableData = data;

// Creating a function to load the data!
function loadData(data) {
    var tbody = d3.select('tbody')
    tbody.text('');
    console.log(tbody)
    data.forEach(element => {
        row = tbody.append('tr')
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append('td')
            cell.text(value)
        });
    });
};

// Loading the Data into Html Table
loadData(tableData)

// selecting the button and input field
var button = d3.select('#filter-btn')
var inputDate = d3.select('#datetime')

// Event listner for data filter button single filter
button.on('click', function() {
    date = inputDate.property('value');

    if (!date.length) {
        loadData(tableData);
    } else {
        console.log(date);
        var filteredData = tableData.filter(function(d) { return d.datetime == date; });
        console.log(filteredData);
        loadData(filteredData);
    };
});