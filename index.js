

var randomnumber1 = Math.floor(Math.random()*6) + 1; // Range 1-6

var randomDiceImage= "dice" + randomnumber1 + ".png"; // Dice image1 -Dice image 6

var randomImageSource ="images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomnumber2 = Math.floor(Math.random()*6 + 1); //Range 1-6

var randomDiceImage = "dice" + randomnumber2 + ".png"; //dice images range 1-6

var randomImageSource2 ="images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);


if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins..!!!";
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector('h1').innerHTML ="Player2 Wins..!!!";
  }
else {
  document.querySelector('h1').innerHTML="GAME TIED ...!!!";
}
