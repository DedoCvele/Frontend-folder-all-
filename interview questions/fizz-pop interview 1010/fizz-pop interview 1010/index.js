
for(let i=1; i<=100; i++){
    
    if( i%5 == 0 && i%3 == 0 ){
        console.log("Fizz")
    }
    else if( i%3 == 0 ){
        console.log("POP")
    }else if( i%5 == 0 ){
        console.log("Fizz-pop")
    }else{
        console.log(i);
    }  
}

