const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');



// generateHTML() is used to create a single image overlay
function generateHTML([h, v]) {
    return `
        <div class = "item h${h} v${v}">
            <img src="images/${randomNumber(12)}.jpg">
            <div class="item__overlay">
                <button>View →</button>
            </div>
        </div>
    `;
}



// randomNumber() gives out a random number that is used in the function above
// to pick out a random image.
function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}



// Array digits is created with a length of 50 indexes and uses .from() function
// to fill up the 50 slots with an array that that has 2 random numbers 
// between 1-4.  
const digits = Array.from({length: 50}, () => 
    [randomNumber(4), randomNumber(4)]).
    concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], 
            [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], 
            [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);



// the html var uses .map to put each array index through the generateHTML().
// .join() is then used to convert to a string.
const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;