const selectBox = document.querySelector(".select-box");
const selectXBtn = document.querySelector(".playerX");
const selectOBtn = document.querySelector(".playerO");
const playBoard = document.querySelector(".play-board");
const allBox = document.querySelectorAll(".box");
const players = document.querySelector(".players");
const playArea = document.querySelector(".play-area")

window.onload = () => {

    selectXBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    }
    selectOBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute("class", "players active player");
    }
}

playArea.addEventListener("click", clickedBox())

function clickedBox(event){
    // if(players.classList.contains("player")){
    //      .innerHTML = "O"
    // }else{
    //      .innerHTML = "X" 
    // }
    // let a = event.target.value;
    console.log("salam")
}