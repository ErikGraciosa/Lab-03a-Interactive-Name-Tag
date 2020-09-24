//Set variable to be used
const nameTagName = document.getElementById('name-tag-name');
const nameChanger = document.getElementById('submit-name');
const newName = document.getElementById('name-entry');
//Grab input from text box using button


nameChanger.addEventListener('click', () => {
    // post-click logic goes here!
        nameTagName.textContent = newName.value;
    //clear entry field   
        newName.value = "";
});



//Update name with new name from entry field





//Color changing buttons
const buttonPink = document.getElementById('pink');
const buttonLightGreen = document.getElementById('lightgreen');
const buttonLightBlue = document.getElementById('lightblue');
const colorHello = document.getElementById('hello');
const colorMyNameIs = document.getElementById('my-name-is');
const colorMain = document.getElementById('main');


buttonPink.addEventListener('click', () => {
    // post-click logic goes here!
        colorHello.style.backgroundColor = "pink";
        colorMyNameIs.style.backgroundColor = "pink";
        colorMain.style.backgroundColor = "pink";       
});

buttonLightGreen.addEventListener('click', () => {
    // post-click logic goes here!
        colorHello.style.backgroundColor = "lightgreen";
        colorMyNameIs.style.backgroundColor = "lightgreen";
        colorMain.style.backgroundColor = "lightgreen";       
});

buttonLightBlue.addEventListener('click', () => {
    // post-click logic goes here!
        colorHello.style.backgroundColor = "lightblue";
        colorMyNameIs.style.backgroundColor = "lightblue";
        colorMain.style.backgroundColor = "lightblue";       
});