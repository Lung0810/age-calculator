//Initalize Flatpickr
const datePicker = flatpickr("#birthdate", {
    dateFormat: "Y-m-d",
    maxDate: "today", //Basic Validation: can't pick future dates
})

const DateTime = luxon.DateTime;

document.getElementById('calculate-btn').addEventListener('click', ()=>{
    const dateValue = document.getElementById('birthdate').value;
    const errorMsg = document.getElementById('error-msg');
    const resultDiv = document.getElementById('result');

    if(!dateValue){
        errorMsg.style.display = "block"
        resultDiv.style.display = "none";
        return;
    }

    errorMsg.style.display = "none"


    //1. Parse the selected date
    const birthDate = DateTime.fromISO(dateValue);
    const now = DateTime.now();


    //2. Calculate the difference using Luxon
    //the 'diff' method calculate the interval between tow dates
    const diff = now.diff(birthDate, ['years', 'months', 'days']).toObject();

    //3. Display the results
    document.getElementById('years').textContent = Math.floor(diff.years);
    document.getElementById('months').textContent = Math.floor(diff.months);
    document.getElementById('days').textContent = Math.floor(diff.days);

    resultDiv.style.display = 'block';
})