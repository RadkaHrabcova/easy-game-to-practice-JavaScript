let points;
let pointsInTheRound;
let activePlayer;
let dice;
let finalPoints;

points = [0,0];
pointsInTheRound = 0;
activePlayer = 0;
finalPoints = 25;
dice = Math.floor(Math.random()*6)+1;
console.log(dice);

document.querySelector("#soucasne-" + activePlayer).textContent = dice;

document.querySelector(".kostka").style.display = "none";