const spinnerDots = document.querySelectorAll('.spinner-dot');


function spinnerDot() {
    spinnerDots.forEach((dot, index) => {
        
        setTimeout(() => {
            for (let i = 0; i < spinnerDots.length; i++) {
                spinnerDots[i].classList.remove('spinner-dot-active');
            }
            dot.classList.add('spinner-dot-active')
        }, 125 * index)
    })
}
setInterval(() => {
    spinnerDot()
}, 1000)


