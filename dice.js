
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png

var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice2.png-

var randomImageSource = "images/" + randomDiceImage; //images/dice2.png

var image2 = document.querySelectorAll("img") [1];

image2.setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Lydia Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = " Maggie Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "🚩 Draw!";
}
