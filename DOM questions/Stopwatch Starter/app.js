const timerMill = document.querySelector('.timer__milliseconds')
const timerSec = document.querySelector('.timer__seconds')
const timerMin = document.querySelector('.timer__minutes')

let cancleId;
let startTime 
let savedTime = 0;

function startTimer(){
    startTime = Date.now()
    
    cancleId =  requestAnimationFrame(updateTimer)
}

function stopTimer(){
    savedTime = savedTime + Date.now() - startTime

    cancelAnimationFrame(cancleId)
}

function resetTimer(){
    startTime = Date.now()
    savedTime = 0

    timerMill.innerHTML = '000'
    timerSec.innerHTML = '00'
    timerMin.innerHTML = '00'
}

function updateTimer(){
    let milElapsed = savedTime + (Date.now() - startTime)
    let secElapsed = milElapsed / 1000;
    let minElapsed = secElapsed / 60

    let minutesText = Math.floor(minElapsed)
    let secondsText = Math.floor(secElapsed % 60)
    let milliText = milElapsed % 1000

    if(minutesText.toString().length < 2){
        minutesText = minutesText.toString().padStart(2, '0')
    }

    if(secondsText.toString().length < 2){
        secondsText = secondsText.toString().padStart(2, '0')
    }

    if(milliText.toString().length < 3){
        milliText = milliText.toString().padStart(3, '0')
    }

    timerMill.innerHTML = milliText
    timerSec.innerHTML = secondsText
    timerMin.innerHTML = minutesText

    cancleId = requestAnimationFrame(updateTimer)
}