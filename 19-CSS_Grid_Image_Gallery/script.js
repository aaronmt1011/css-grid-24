const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');


// generateHTML() is used to create the image overlay
function generateHTML([h, v]) {
    return `
        <div class = "item h${h} v${v}
            <img src="images/${randomNumber(12)}.jpg>
            <div class="item__overlay">
                <button>View -></button>
            </div>
        </div>
    `;
}


// randomNumber() gives out a random number that is used in the function above
// to pick out a random image.
function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}