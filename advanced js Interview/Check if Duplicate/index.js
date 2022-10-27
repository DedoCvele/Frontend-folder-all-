/** Contains Duplicate **
 * 
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 * 
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 * 
 */

/* Big Boy Way B) */

function dupes(arr){
    const setDupes = new Set()

    for(let i=0; i < arr.length; i++){
        if(setDupes.has(arr[i])){
            console.log("set has dupes")
            return true;
        }
        setDupes.set(arr[i])
    }
    console.log("set has no dupes")
    return false;
}

console.log(dupes([1, 2, 9, 5, 9]))


/* Junior way */

function dupes1(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] === arr[i]){
                console.log("map has dupes")
                return true
            }
        }
    }
    console.log("map has no dupes")
    return false
}

console.log(dupes1([1, 2, 5, 9]))