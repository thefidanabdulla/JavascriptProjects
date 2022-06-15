let locust = document.querySelector('#locust');
let frog = document.querySelector('#frog');
let overlay = document.querySelector('#overlay');
let refreshButton = document.querySelector('refresh');

    window.addEventListener('keypress', jumpLocust);
    //refreshButton.addEventListener('click', refreshPage);

function jumpLocust(e){
    if(e.keyCode == '32'){
        locust.classList.add('jump');
        setTimeout(()=> {
            locust.classList.remove('jump');
        },1000)
    }  
}

let checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(locust).getPropertyValue("top"));
    let frogRight = parseInt(window.getComputedStyle(frog).getPropertyValue("right"));

    if(frogRight<950 && frogRight>780 && characterTop >= -30  ){
        frog.style.animation = "none";
        frog.style.display = "none";
        overlay.classList.add('active')
    }
}, 10)

function refreshPage(){
    window.location.reload();
}