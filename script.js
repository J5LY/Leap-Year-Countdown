let leapYear = "29 Feb, 2024"
let differenceInSeconds
const yearsHTML = document.getElementById('years')
const monthsHTML = document.getElementById('months')
const daysHTML = document.getElementById('days')
const hoursHTML = document.getElementById('hours')
const minutesHTML = document.getElementById('minutes')
const secondsHTML = document.getElementById('seconds')
const statement = document.getElementById('underStatement')


document.getElementById("birthday").addEventListener("change", function() {
    leapYear = document.getElementById("birthday").value;
})

//Countdown Function
function countdownTimer(){

    const currentTime = new Date()
    const leap = new Date(leapYear)

    let difference = leap - currentTime
    let differenceInSeconds = difference / 1000 - 39600; 

    if (isNaN(differenceInSeconds)) leapYear = "29 Feb, 2024"; 
    
    if (differenceInSeconds === 0){
        alert('Happy Birthday');
    }

    if (differenceInSeconds < 0) {
        differenceInSeconds = differenceInSeconds * -1;

        statement.innerHTML = 'ago it was your birthday';
    
     } else {
            statement.innerHTML = 'until it is your birthday';
     }

    console.log(difference)

    let years = Math.floor(differenceInSeconds / 60 / 60 / 24 / 365)
    let months = Math.floor((differenceInSeconds / 60 / 60 / 24) * 0.0328767) % 12
    let days = Math.floor((differenceInSeconds / 60 / 60 / 24) % 30.4167)
    let hours = Math.floor((differenceInSeconds / 60 / 60) % 24)
    let minutes = Math.floor((differenceInSeconds/ 60) % 60) 
    let seconds = Math.floor((differenceInSeconds) % 60)


    let hours1 = Math.floor(differenceInSeconds / 60 / 60)

    yearsHTML.innerHTML = years
    monthsHTML.innerHTML = months
    daysHTML.innerHTML = days
    hoursHTML.innerHTML = hours
    minutesHTML.innerHTML = minutes
    secondsHTML.innerHTML = seconds
}


countdownTimer();

setInterval(countdownTimer, 1000);
















