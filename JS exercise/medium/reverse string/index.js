/* 
    Calculate the time
    Given a number in secound, return this number in mm::ss format
*/

function reverseString1(str){
    let reverseStr = ''
    for(let i = str.length -1; i>=0; i--){
        reverseStr += str[i];
    }
    return reverseStr
}

console.log(reverseString1("abc"))

/* better method */

function reverseString2(str){
    return str.split('').reverse().join('')
}

console.log(reverseString2("abc"))