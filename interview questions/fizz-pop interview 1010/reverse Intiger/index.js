/* 
    Reverse the order of a number
*/

function revInt(int){
    const reversed = int.toString().split("").reverse().join("")
    return parseInt(reversed) * Math.sign(int)
}

console.log(revInt(-45234123))