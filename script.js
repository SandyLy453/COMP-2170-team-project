const bodyColors = ["black", "#000066", "tomato", "#993300", "#5c5c3d"];
const earColors = ["black", "pink", "gray", "white", "#993300"];
const eyeColors = ["black", "#99ccff", "#ff999f", "#993300"];
const tailColors = ["black", "gray", "pink", "#993300", "orange"];
const frontLegColors = ["black", "#5c5c3d", "#993300", "#000066"];
const backLegColors = ["black", "#5c5c3d", "#993300", "#000066"];
const faceColors = ["black", "#5c5c3d", "#993300", "#000066"];
/*
const accessories = [
    "url_to_acc1_image",
    "url_to_acc2_image",
    "url_to_acc3_image",
    "url_to_acc4_image"
]; */


//
function changeEars() {
    let currentIndex = Math.floor(Math.random() * earColors.length);    
    document.querySelectorAll(".left-ear, .right-ear").forEach((ear) => {
    ear.style.borderColor = earColors[currentIndex];
    });
}


function changeTail() {
    let currentIndex = Math.floor(Math.random() * tailColors.length);
    document.querySelectorAll(".tail").forEach((tail) => {
        tail.style.backgroundColor = tailColors[currentIndex];
        });
}

function changeEyes() {
    let currentIndex = Math.floor(Math.random() * earColors.length);    
    document.querySelectorAll(".left-inner-eye, .right-inner-eye").forEach((eyes) => {
    eyes.style.backgroundColor = eyeColors[currentIndex];
    });
}

function changeFace() {
    let currentIndex = Math.floor(Math.random() * faceColors.length);    
    document.querySelectorAll(".cat-head").forEach((face) => {
    face.style.backgroundColor = faceColors[currentIndex];
    face.style.borderColor = faceColors[currentIndex];
    });
}

function changeBody() {
    let currentIndex = Math.floor(Math.random() * bodyColors.length);    
    document.querySelectorAll(".cat-body").forEach((body) => {
    body.style.backgroundColor = bodyColors[currentIndex];
    });
}

function changeBackLegs() {
    let currentIndex = Math.floor(Math.random() * backLegColors.length);    
    document.querySelectorAll(".foot").forEach((backlegs) => {
    backlegs.style.backgroundColor = backLegColors[currentIndex];
    });
}

function changeFrontLegs() {
    let currentIndex = Math.floor(Math.random() * frontLegColors.length);    
    document.querySelectorAll(".arm").forEach((frontLegs) => {
    frontLegs.style.backgroundColor = frontLegColors[currentIndex];
    });
}


var input = document.querySelector('.form');
var search = document.querySelector('input');
var button = document.querySelector('.open');
var saveButton = document.querySelector('.save');
var displayName = document.getElementById('displayName');

button.addEventListener('click', function (e) {
    e.preventDefault();
    input.classList.toggle('active');
});

search.addEventListener('focus', function () {
    input.classList.add('focus');
});

search.addEventListener('blur', function () {
    if (search.value.length !== 0) {
        input.classList.add('focus');
    } else {
        input.classList.remove('focus');
    }
});

search.addEventListener('input', function () {
    if (search.value.length !== 0) {
        saveButton.style.display = 'block';
    } else {
        saveButton.style.display = 'none';
    }
});

saveButton.addEventListener('click', function (e) {
    e.preventDefault();
    displayName.textContent = search.value;
    search.value = '';
    saveButton.style.display = 'none';
    input.classList.remove('focus');
});




const shirts = ["shirt1","shirt2","shirt3","shirt4", "shirt5"]








