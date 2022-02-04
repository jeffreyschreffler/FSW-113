// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

months.map(function(item){
    let select = document.querySelector('#month');
    let options = document.createElement('option');
    select.append(options);
    options.textContent = item;
})

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

let goBtn = document.querySelector('#go');
goBtn.addEventListener('click', printCalendar);
function printCalendar(){
    let usrMonthSelection = document.querySelector('#month');
    selectedMonth = usrMonthSelection.value;
    selectedYear = document.querySelector("#year").value;
    const today = new Date(`${selectedMonth}/1/${selectedYear}`)


    const month = today.getMonth()
    let days
    switch (month) {
        case 1:
            days = 28
            break
        case 3:
        case 5:
        case 8: 
        case 10:
            days = 30
            break
        default:
            days = 31
    }
        
    let x
    const weekday = today.getDay()
    for (x = 0; x < weekday; x++){
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    }

    let dt = 0
    do {
        dt++
        document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
    } while ( dt < days)

    const monthName = today.toLocaleDateString('default', {month:'long'})
    const year = today.getFullYear()
    document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`

    const remainder = (7 - ((x + dt) % 7))
    let y = 0
    while ( y < remainder) {
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
        y++
    }

    }


    // modify this script to use the first day of the month the user selects in place of the const today 








