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
var inputCity = d3.select('#city');
var inputState = d3.select('#state');
var inputCountry = d3.select('#country');
var inputShape = d3.select('#shape');


// Multiple filter event listner
button.on('click', update);

function update() {
    var filters = {
        'datetime': inputDate.property('value'),
        'city': inputCity.property('value'),
        'state': inputState.property('value'),
        'country': inputCountry.property('value'),
        'shape': inputShape.property('value'),
    };

    console.log(filters)
    var multiFilter = (tableData, filters) => {
        var filterKeys = Object.keys(filters);
        return tableData.filter(eachObj => {
            return filterKeys.every(eachKey => {
                if (!filters[eachKey].length) {
                    return true; // passing an empty filter means that filter is ignored.
                }
                return filters[eachKey].includes(eachObj[eachKey]);
            });
        });
    };
    return loadData(multiFilter(tableData, filters));
};