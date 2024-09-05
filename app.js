let points;
let pointsInTheRound;
let activePlayer;
let dice;
let finalPoints;

points = [0,0];
pointsInTheRound = 0;
activePlayer = 0;
finalPoints = 25;



document.getElementById("body-0").textContent = "0";
document.getElementById("body-1").textContent = "0";
document.getElementById("soucasne-0").textContent = "0";
document.getElementById("soucasne-1").textContent = "0";

//

document.querySelector(".kostka").style.display = "none";

document.querySelector(".tlacitko-hod").addEventListener("click", function(){
    //1.Nahodne cislo
    dice = Math.floor(Math.random()*6)+1;
    //2. Zobrazit vysledek
    let diceDOM = document.querySelector(".kostka");
    diceDOM.style.display = "block";
    diceDOM.textContent = dice;
    //3. Aktualizovat body kola pokud padla/nepadla 1
});