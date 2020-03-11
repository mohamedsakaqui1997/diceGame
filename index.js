var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6
var playerOneImages = "images/dice"+randomNumber1+".png"; // images/dice1.png
var playerTwoImages = "images/dice"+randomNumber2+".png";// images/dice1.png

document.querySelector(".img1").setAttribute("src", playerOneImages);
document.querySelector(".img2").setAttribute("src", playerTwoImages);

if(playerOneImages > playerTwoImages){
    document.querySelector("h1").innerHTML = "🎉Player 1 Wins";
} else if (playerTwoImages > playerOneImages){
  document.querySelector("h1").innerHTML = "Player 2 Wins🎉";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
