const selectBox = document.querySelector(".select-box");
const selectXBtn = document.querySelector(".playerX");
const selectOBtn = document.querySelector(".playerO");
const playBoard = document.querySelector(".play-board")

window.onload = () => {
    selectXBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    }
    selectOBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    }
}