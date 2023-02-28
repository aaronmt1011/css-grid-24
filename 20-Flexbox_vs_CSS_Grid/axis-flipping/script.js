// flip() switches direction of the columns

function flip(e) {
    const flipper = document.querySelector('.flipper');
    flipper.classList.toggle('flip');
}

const flipBtn = document.querySelector('.flip-btn')

flipBtn.addEventListener('click', flip);