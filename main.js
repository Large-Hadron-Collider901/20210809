// console.log("hello-world"); sanity test

// Define classes/instantiate clickable classes/add event handlers to track clicks

// Define base set of properties for our domain object
// In a new ES6 class

class GoatPicture {
    // Properties that I want but not passed in
    clicks = 0; // how many times this goat image gets clicked
    timesShown = 0;
    // Initial constructor (MUST BE NAME CONSTRUCTOR)
    constructor(name, imageSrc) 
    {
        this.name = name; //image name
        this.imageSrc = imageSrc; // src href to image
    };

}
// Add variables we need in multiple places
let leftGoatOnThePage  = null;
let rightGoatOnThePage = null;
let totalClicks = 0;
const MAX_CLICKS_ALLOWED = 5;
// We will randomly pull from a list of Goat Image Objects and display them
// First I need them in a list/array. Can add while I instantiate them (or add individually with .push() )
let allGoatImageObjects = [
new GoatPicture('Cruisin Goat', 'assets/cruisin-goat.jpg'),
new GoatPicture('Float Your Goat', 'assets/float-your-goat.jpg'),
new GoatPicture('Kissing Goat', 'assets/kissing-goat.jpg'),
new GoatPicture('Sassy Goat', 'assets/sassy-goat.jpg'),
new GoatPicture('Smiling Goat', 'assets/smiling-goat.jpg'),
new GoatPicture('Sweater Goat', 'assets/sweater-goat.jpg'),
new GoatPicture('Goat out of hand', 'assets/goat-out-of-hand.jpg'),
new GoatPicture('Goat Away', 'assets/goat-away.jpg')


];
//  Set up our element references in the DOM
const goatHeader = document.getElementById('goatHeader')
const goatImageSectionTab = document.getElementById('all_goats')
const finalScores = document.getElementById('finalScores')
const leftGoatImageName = document.getElementById('left_goat_name')
const leftGoatImageTag = document.getElementById('left_goat_img')
const rightGoatImageName = document.getElementById('right_goat_name')
const rightGoatImageTag = document.getElementById('right_goat_img')

// Implement a function to pick 2 random goat objects
let pickNewGoats = function() {
    // randomly pick the left object/goat from our list of goats
    leftGoatIndex = Math.floor(Math.random() * allGoatImageObjects.length); // classic random pattern with a max
    // randomly pick the right object/goat from our list of goats
    // TO DO: In the final version we should check to make sure we dont display the same image
    rightGoatObject = Math.floor(Math.random() * allGoatImageObjects.length);
    // Keep up with the 2 instances of the goat objects that got picked randomly (so we can update view and click count)
    // Render on page at the targeted sections of the page
    // Update left
    leftGoatImageName.innerText = allGoatImageObjects[leftGoatIndex].name;
    leftGoatImageTag.src = allGoatImageObjects[leftGoatIndex].imageSrc;
    // Update right
    rightGoatImageName.innerText = allGoatImageObjects[rightGoatIndex].name;
    rightGoatImageTag.src = allGoatImageObjects[rightGoatIndex].imageSrc;
}
// Handle clicks on the goats
// Get which goat clicked on from the event target
const handleClickOnGoat = function (evt) {
    console.log('You clicked this target element)
}

// POE
// Set event listener at the div level that contains both images
// EVents 


pickNewGoats();


