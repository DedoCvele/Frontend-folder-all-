/* 
    Show Rating
    given a rating, display a star(*) for each full rating and
    a full stop(.) for each half rating
*/

function review(star){
    let rate = "";
    for(let i=0; i< Math.floor(star); i++){
        rate += '*'
        if ( i !== Math.floor(star) - 1){
            rate += " "
        }
    }
    if(!Number.isInteger(star)){
        rate += ' .'
    }
    return rate;
}

console.log(review(7.5))