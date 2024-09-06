let points;
let pointsInTheRound;
let activePlayer;
let dice;
let finalPoints;

points = [0, 0];
pointsInTheRound = 0;
activePlayer = 0;
finalPoints = 15;



document.getElementById("body-0").textContent = "0";
document.getElementById("body-1").textContent = "0";
document.getElementById("soucasne-0").textContent = "0";
document.getElementById("soucasne-1").textContent = "0";

//

document.querySelector(".kostka").style.display = "none";

document.querySelector(".tlacitko-hod").addEventListener("click", function () {
    //1.Random number
    dice = Math.floor(Math.random() * 6) + 1;
    //2. Display result
    let diceDOM = document.querySelector(".kostka");
    diceDOM.style.display = "block";
    diceDOM.textContent = dice;
    //3. Update the points in the round if 1 is rolled on the dice
    if (dice !== 1) {
        //Add points
        pointsInTheRound += dice;
        document.querySelector("#soucasne-" + activePlayer).textContent = pointsInTheRound;
    } else {
        //4.Switch players
        switchPlayers()
    }
});

document.querySelector(".tlacitko-dost").addEventListener("click", function () {
    //1.Add points in the round to the player points
    points[activePlayer] += pointsInTheRound;
    //2.Update UI
    document.querySelector("#body-" + activePlayer).textContent = points[activePlayer];
    //3. Check if the player wins.
    if(points[activePlayer]>= finalPoints){
        document.querySelector("#jmeno-" + activePlayer).textContent = "Vítěz!"
        document.querySelector(".hrac-" + activePlayer + "-panel").classList.remove("aktivni");
        document.querySelector(".hrac-" + activePlayer + "-panel").classList.add("vitez");
        document.querySelector(".kostka").style.display = "none";
    }else{
        switchPlayers()
    }

    //4. Switch players.
  


});

function switchPlayers(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    pointsInTheRound = 0;

    document.getElementById("soucasne-0").textContent = "0";
    document.getElementById("soucasne-1").textContent = "0";

    document.querySelector(".hrac-0-panel").classList.toggle("aktivni");
    document.querySelector(".hrac-1-panel").classList.toggle("aktivni");

};