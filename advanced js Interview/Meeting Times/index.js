/** Meeting Times **
 * 
 * Given an array of meeting times, determine if a person can
 * attend all meetings. 
 *  
 * @example
 * meetingTimes([[10, 15], [20, 25]]) -> true
 * meetingTimes([[5, 10], [10, 15], [12, 25], [25, 30]]) -> false
 * meetingTimes([[10, 20], [20, 30], [30, 40]]) -> true
 * 
 */

function checkTime(arr){
    arr.sort((a, b) => a[0] - b[0])
    
    for(let i = 1; i < arr.length; i++){
        const curr = arr[i][0]
        const past = arr[i - 1][1]

        if(curr < past){
            return false
        }
    }
    return true
}

console.log(checkTime([[10, 20], [20, 30], [30, 40]]))