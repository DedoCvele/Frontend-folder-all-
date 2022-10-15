/* 
    Find the first 6 incomplete todos in a given API
*/

async function toDos(test){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await promise.json();
    const inComplete = result.filter(element => !element.inComplete).slice(0, 6)
    console.log(inComplete)
}

toDos(1)