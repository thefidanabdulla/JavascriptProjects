const btn = document.querySelector('.btn');
const input_value = document.querySelector('.input-text');
const displayMessage = document.querySelector('.displayMessage');

btn.addEventListener('click', checkPalindrome);

function checkPalindrome() {

    let word = input_value.value;
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    let flip = [...end].reverse().join('');
    if (start == flip) {
        displayMessage.innerHTML = `${word.toUpperCase()} is PALINDROME :)`;
    } else {
        displayMessage.innerHTML = `${word.toUpperCase()} is NOT PALINDROME :/`;
    }
    // window.alert(end)

    input_value.value = ' ';
}