/* 
    Sort a number from low to high
*/

/* 
    easy way using js library
*/

function sortNumb(number){
    return number.sort((a, b) => a-b)
}

console.log(sortNumb([1, 5, 2, 50, 13, 23, 4]))

/* 
    from high to low
*/

function sortNumb1(number){
    return number.sort((a, b) => b-a)
}

console.log(sortNumb1([1, 5, 2, 50, 13, 23, 4]))