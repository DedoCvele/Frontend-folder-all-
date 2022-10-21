/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

/* 
    Solution  1
*/


function anagrams(str1, str2){
    const charMap1 = buildCharMap(str1)
    const charMap2 = buildCharMap(str2)

    if(charMap1.size !== charMap2.size){
        return false
    }

    for(const [char1, count1] of charMap1){
        if(charMap2.get(char1) !== count1){
            return false
        }
    }

    return true
}

/* 
    reusable code
*/

const buildCharMap = (str) => {
    const charMap = new Map();
    for(const char of removeSpaceAndLowerCase(str)){
        charMap.set(char, charMap.get(char) + 1 || 1)
    }
    return charMap
}


const removeSpaceAndLowerCase = (str) => {
    return str.toLowerCase().replaceAll(" ", "")
}

console.log(anagrams("save", "vase"))



/* 
    Solution 2 
*/

function anagrams1(str1, str2){
    return cleanString(str1) === cleanString(str2)
}

const cleanString = (str) =>{
    return str.toLowerCase().replaceAll(" ", "").split("").sort().join("")
}

console.log(anagrams1("God", "Dog"))