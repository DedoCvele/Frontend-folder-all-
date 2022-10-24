const allSquares = document.querySelectorAll(".board__square")
const title = document.querySelector(".board__title")

let currentP = "X"
let gameOver = false;
let board = new Array(9)

allSquares.forEach((square, i) =>{
    square.addEventListener("click", () =>{
        if(square.innerHTML || gameOver){
            return
        }
        square.innerHTML = currentP
        board[i] = currentP


        if(checkWin()){
            title.innerHTML = `${currentP} WON`
            gameOver = true;
            return;
        }

        if(checkDraw()){
            title.innerHTML = `its a DRAW`
            gameOver = true;
            return;
        }

        currentP = currentP === "X" ? "O" : "X"

        title.innerHTML = `${currentP}'s Turn`
        
    })
})

function checkDraw(){
    for(let i=0; i<board.length; i++){
        if(!board[i]){
            return false
        }
    }
    return true
}


function checkWin(){
    const winningInd =[
        // Horizontal Wins
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        // Vertical Wins
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        // Diagonal Wins
        [0, 4, 8],
        [2, 4, 6],
    ];

    for ( let i=0; i<winningInd.length; i++){
        const matchingInd = winningInd[i];
        let sym1 = board[matchingInd[0]]
        let sym2 = board[matchingInd[1]]
        let sym3 = board[matchingInd[2]]

        if(!sym1 || !sym2 || !sym3){
            continue;
        }

        if(sym1 === sym2 && sym2 === sym3){
            return true
        }
    }
}

function restart() {
    title.innerHTML = `${currentP}'s Turn`
    allSquares.forEach(square => {
        square.innerHTML = ''
    })
    board = new Array(9)
    gameOver = false
}