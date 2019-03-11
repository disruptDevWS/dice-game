//Random number 1-6
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

//Concatenate random number into dice image name
var randomDice1 = `/images/dice${randomNumber1}.png`;
var randomDice2 = `/images/dice${randomNumber2}.png`;

//Manipulate DOM to change dice image in browser
document.querySelectorAll("img")[0].setAttribute("src", randomDice1);
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

//If statement to change h1 to reflect winner
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
