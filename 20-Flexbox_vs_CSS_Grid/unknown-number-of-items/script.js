// Unknown Amount of Elements
function addItem() {
    const unknown = document.querySelector('.unknown');
    unknown.innerHTML += `<div class="item">${++unknown.childElementCount}</div>`;
}

const addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', addItem);