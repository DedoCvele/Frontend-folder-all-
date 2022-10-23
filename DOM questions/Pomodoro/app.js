const timeMills = document.querySelector('.timer__milliseconds')
const timeSeconds = document.querySelector('.timer__seconds')
const timeMinutes = document.querySelector('.timer__minutes') 

const startButton = document.querySelector('.stopwatch__start')
const stopButton = document.querySelector('.stopwatch__stop')
const restartButton = document.querySelector('.stopwatch__reset')

let cancleId;
let startTime;
let savedTime = 0;
const countdown = 25 * 60 * 1000

function startTimer(){
    startButton.disabled = true
    stopButton.disabled = false
    restartButton.disabled = false
    startTime = Date.now()
    cancleId = requestAnimationFrame(updateTimer)
}

function stopTimer(){
    startButton.disabled = false
    stopButton.disabled = true
    restartButton.disabled = false

    savedTime += Date.now() - startTime 
    cancelAnimationFrame(cancleId)
}

function resetTimer(){
    
    startTime = Date.now()
    savedTime = 0;

    timeMills.innerHTML = '000'
    timeSeconds.innerHTML = '00'
    timeMinutes.innerHTML = '25'
    
}

function updateTimer(){
    let millElapsed = Date.now() - startTime + savedTime

    let millisLeft = countdown - millElapsed
    if(millisLeft < 0){
        millisLeft = 0
        cancelAnimationFrame(cancleId)
        cancleId = null
    }

    let secondsLeft = millisLeft / 1000
    let minLeft = secondsLeft / 60
    
    let millisText = millisLeft % 1000;
    let secText = Math.floor(secondsLeft) % 60
    let minText = Math.floor(minLeft)

    if(millisText.toString().length < 3 ){
        millisText = millisText.toString().padStart(3, '0')
    }
    if(secText.toString().length < 2 ){
        secText = secText.toString().padStart(2, '0')
    }
    if(minText.toString().length < 2 ){
        minText = minText.toString().padStart(2, '0')
    }

    timeMills.innerHTML = millisText
    timeSeconds.innerHTML = secText
    timeMinutes.innerHTML = minText

    if(cancleId){
        cancleId = requestAnimationFrame(updateTimer)
    }
    
}