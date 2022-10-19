/* 
    Check if its a Palindrome
    return true if its a palindrome
    return false if its not a palindrome
*/




/* Method 1 empthy string*/

let arr = 'arrra'

function palindrome (str){
    let pal = '';
    for(let i=0; i< str.length; i++){
        pal = str[i] + pal;
    }
    if (str === pal){
        return true
    }else{
        return false
    }
}
console.log(palindrome(arr))

/* Method 2 Fast*/

let arr1 = 'abcba'

function palindrome1 (str){
    const palin = str.split('').reverse().join('')

    return str === palin
}


console.log(palindrome1(arr1))


/* Method 3 Every (inefficient)*/

let arr2 = 'majkati'

function palindrome2 (str){
    return str.split('').every((char, index) =>{
        return char === str[str.length - 1 - index]
    })
}


console.log(palindrome2(arr2))


/* Method 4 Every (efficient)*/

let arr3 = 'Dog goD'

function palindrome2 (str){
    
    const middle = Math.floor(str.length / 2)
    for(let i=0; i<middle; i++){
        
        const oppositeIndex = str.length - 1 -i;
        if(str[i] !== str[oppositeIndex]){
            return false
        }
    }
    return true
}


console.log(palindrome2(arr3))