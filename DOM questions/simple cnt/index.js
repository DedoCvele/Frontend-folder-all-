let add = document.getElementById("increment")
let remove = document.getElementById("decrement")

let cnt = document.getElementById("number")

let int = 0;

function up(){
    int += 1;
    cnt.innerHTML = int;
}

function down(){
    int -= 1;
    cnt.innerHTML = int;
}

