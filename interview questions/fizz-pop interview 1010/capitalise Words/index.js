/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

/* 
    Solution 1 (better Way)
*/

function cap(str){
    const result = []
    for(const word of str.split(" ")){
        const capWord = word[0].toUpperCase() + word.slice(1)
        result.push(capWord)
    }

    return result.join(" ")

}

console.log(cap("coding is awesome"))


/* 
    Solution 2 (Brute Force)
*/

function cap1(str){
    let result = str[0].toUpperCase()
    for(let i=1; i<str.length; i++){
        
        if(str[i-1] === " "){
            result += str[i].toUpperCase()

        }else{
            result += str[i]
        }
    }

    return result
}

console.log(cap1("a green apple"))