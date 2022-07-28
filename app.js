// DOM elements for the dropdowns
const waterDropEl = document.getElementById('water-dropdown');
const skylineDropEl = document.getElementById('skyline-dropdown');
const landDropEl = document.getElementById('land-dropdown');

// DOM for pictures
const waterPicEl = document.getElementById('water-picture');
const skylinePicEl = document.getElementById('skyline-picture');
const landPicEl = document.getElementById('land-picture');

// let state

// set event listeners 

waterDropEl.addEventListener('change', () => {
    const waterPic = waterDropEl.value;
    waterPicEl.style.backgroundImage = `url(./assets/${waterPic}-water.png)`;
});

skylineDropEl.addEventListener('change', () => {
    const skylinePic = skylineDropEl.value;
    skylinePicEl.style.backgroundImage = `url(./assets/${skylinePic}-skyline.png)`;
});

landDropEl.addEventListener('change', () => {
    const landPic = landDropEl.value;
    landPicEl.style.backgroundImage = `url(./assets/${landPic}-land.png)`;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
