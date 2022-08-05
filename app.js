// DOM elements for the dropdowns
const waterDropEl = document.getElementById('water-dropdown');
const skylineDropEl = document.getElementById('skyline-dropdown');
const landDropEl = document.getElementById('land-dropdown');

// DOM for pictures
const waterPicEl = document.getElementById('water-picture');
const skylinePicEl = document.getElementById('skyline-picture');
const landPicEl = document.getElementById('land-picture');

//DOM for updating the report
const reportEl = document.getElementById('change-report');

//DOM for the slogan
const sloganInputEl = document.getElementById('slogan-input');
const sloganButtEl = document.getElementById('slogan-button');
const sloganListEl = document.getElementById('slogan-list');

// let state

let waterChanges = 0;
let skylineChanges = 0;
let landChanges = 0;

let sloganArr = [];

// set event listeners 

waterDropEl.addEventListener('change', () => {
    const waterPic = waterDropEl.value;
    waterPicEl.style.backgroundImage = `url(./assets/${waterPic}-water.png)`;
    waterChanges++;
    reportDisplay();
});

skylineDropEl.addEventListener('change', () => {
    const skylinePic = skylineDropEl.value;
    skylinePicEl.style.backgroundImage = `url(./assets/${skylinePic}-skyline.png)`;
    skylineChanges++;
    reportDisplay();
});

landDropEl.addEventListener('change', () => {
    const landPic = landDropEl.value;
    landPicEl.style.backgroundImage = `url(./assets/${landPic}-land.png)`;
    landChanges++;
    reportDisplay();
});

sloganButtEl.addEventListener('click', () => {
    const userInput = sloganInputEl.value;
    sloganArr.push(userInput);
    sloganInputEl.value = '';
    displaySlogan();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function displaySlogan() {
    sloganListEl.textContent = '';

    for (let slogan of sloganArr) {
        const sloganText = document.createElement('p');
        sloganText.textContent = slogan;
        sloganListEl.append(sloganText);
    }
}


function reportDisplay() {
    reportEl.textContent = `You have changed the water selection ${waterChanges} time(s), the skyline selection ${skylineChanges} time(s), and also the land selection ${landChanges} time(s)!`;
}