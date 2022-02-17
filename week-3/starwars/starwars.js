let queryType;
let itemID;
// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'
clearInputs();
function fetchData() {
    queryType = document.querySelector('#queryType').value;
    itemID = document.querySelector('#itemID').value;
    getFromSWAPI(queryType, itemID);
}

function getFromSWAPI(queryType, itemID) {
    // assign values to any necessary variable
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json()
    })
    .then(function(data){
        updateInfo(data);

    })
    .catch(function(err) {
        if (err === 'Error: NOT FOUND') {
            clearData();
            clearInputs();
            alert('No Entry Found in the Database');
        } else {
            console.warn("Error with swapi.dev: " + err);
            alert('No Entry Found in the Database');
            clearData();
            clearInputs();
        }
    })
}

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.

function updateInfo(data) {
    const keys = Object.keys(data);
    document.querySelector('#dataLabel1').innerText = keys[0];
    document.querySelector('#dataValue1').innerText = data[keys[0]];
    document.querySelector('#dataLabel2').innerText = keys[1];
    document.querySelector('#dataValue2').innerText = data[keys[1]];
}

function clearData() {
    document.querySelector('#dataLabel1').innerText = "";
    document.querySelector('#dataValue1').innerText = "";
    document.querySelector('#dataLabel2').innerText = "";
    document.querySelector('#dataValue2').innerText = "";
}

function clearInputs() {
    document.querySelector('#queryType').value = "";
    document.querySelector('#itemID').value = "";
}