/* 
    Calculate the time
    Given a number in secound, return this number in mm::ss format
*/

function convert(seconds){
    let timerMinutes = Math.floor(seconds / 60) 
    let timerSeconds = seconds % 60
    if(timerMinutes.toString().length === 1){
        timerMinutes = "0" + timerMinutes
    }

    return timerMinutes + ":" + timerSeconds    
}

console.log(convert(70))