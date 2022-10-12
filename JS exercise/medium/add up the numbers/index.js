/* Add up the numbers from a single number
    exmp:
    5 --> 5 + 4 + 3 + 2 + 1
*/

function fulterOut(num1){
    let add = 0;
    let test = num1;
    for(let i=0; i < num1; i++){
        add = add + test
        test--;
    }
    return add;
}

console.log(fulterOut(600))