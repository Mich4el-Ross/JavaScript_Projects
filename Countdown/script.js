let newYearsDate = new Date('1 jan 2023')

let daysBox = document.getElementById("daysText")
let hourBox = document.getElementById("hoursText")
let minsBox = document.getElementById("minutesText")
let secsBox = document.getElementById("secondsText")

function calculateTime() {

    const yearsDate = new Date(newYearsDate).getTime()
    const currentDate = new Date().getTime()
    
    const secondsTime = ( yearsDate - currentDate ) / 1000

    let days = Math.floor(secondsTime / 3600 / 24)
    let hours = Math.floor(secondsTime / 3600 % 24) 
    let mins = Math.floor((secondsTime / 60) % 60)
    let secs = Math.floor(secondsTime % 60) 
   
    
    daysBox.innerText = `${DataFormat(days)}`
    hourBox.innerText = `${DataFormat(hours)}` 
    minsBox.innerText = `${DataFormat(mins)}`
    secsBox.innerText = `${DataFormat(secs)}`
}

function DataFormat(time){
    return time < 10 ? `0${time}` : time
}

calculateTime() 
window.setInterval(calculateTime, 1000)