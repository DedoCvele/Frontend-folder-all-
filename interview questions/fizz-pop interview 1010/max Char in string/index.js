/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */


/* 
    Character Map (solution 1)
*/

const charMap = {};

function maxChar(arr){

    let max = 0;
    let maxChar = "";

    for ( let char of arr){
            charMap[char] = charMap[char] + 1 || 1;
    }

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char;
        }
    }
    return maxChar
}

console.log(maxChar("najjjak"))



/* 
    Character Map (solution 2)
*/


const charMap1 = {};

function maxChar1(arr){

    let maxN = 0
    let maxC = ''
    const charMap = new Map()
    
    for(let char of arr){
        const count = charMap.get(char);
        charMap.set(char, count + 1 || 1)
    }
    
    for(let [char, count] of charMap){
        console.log(char, count)
        if(count > maxN){
            maxN = count;
            maxC = char;
        }
    }
    return maxC
}

console.log(maxChar1("otorrinolaringolog"))