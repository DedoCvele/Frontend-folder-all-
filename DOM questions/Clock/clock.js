/* const milliHand = document.querySelector('.handle__millisec') */
const secondHand = document.querySelector('.handle__second')
const minuteHand = document.querySelector('.handle__minute')
const hourHand = document.querySelector('.handle__hour')

/* requestAnimationFrame(setHandles) */

setInterval(()=>{
    setHandles()
}, 1)

function setHandles(){
const d = new Date()

const hour = d.getHours()
const minute = d.getMinutes()
const seconds = d.getSeconds()
/* const millisec = d.getMilliseconds() */

const extraMinuteAngle = seconds * 0.1
const minuteAngle = minute * 6 + extraMinuteAngle

const extraHoursAngle = minute * 0.5
const hourHandle = hour * 30 + extraHoursAngle

hourHand.style.transform = `translateX(-50%) rotate(${hourHandle}deg)`
minuteHand.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`
secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`
/* milliHand.style.transform = `translateX(-50%) rotate(${millisec * 1}deg)` */

   /*  requestAnimationFrame(setHandles) */
}