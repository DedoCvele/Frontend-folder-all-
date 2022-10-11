/* 
    Find the largest number in a given array
*/

function max(maxSort){
    let x = 0;
    let position = 0;
    let len = maxSort.length;
    for(let i=0; i <= len; i++){
        if(maxSort[i]>x){
            x=maxSort[i]
            position = i + 1 /* accounting if starting from 1 in array */
        }
    }
    console.log(`the largest number is ${x} and its position is ${position}`)
    /* return x; */
}

console.log(max([123, 5, 70, -12, 555, 2]))
