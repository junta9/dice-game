'use strict';
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const scorePlayer0 = document.querySelector("#score--0");
const scorePlayer1 = document.querySelector("#score--1");
const currentPlayer0 = document.querySelector("#current--0");
const currentPlayer1 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener("click", (e) => {
    
    let randomDice = Math.trunc(Math.random() * 6) + 1;
    console.log(randomDice);
    switch (randomDice) {
        case 1: dice.setAttribute("src", "dice-1.png");break;
        case 2: dice.setAttribute("src", "dice-2.png");break;
        case 3: dice.setAttribute("src", "dice-3.png");break;
        case 4: dice.setAttribute("src", "dice-4.png");break;
        case 5: dice.setAttribute("src", "dice-5.png");break;
        default : dice.setAttribute("src", "dice-6.png");
    }
    currentScore += randomDice;

    if (activePlayer == 0){
        currentPlayer0.innerHTML = currentScore;
        if (randomDice == 1){
            player0.classList.remove("player--active");
            player1.classList.add("player--active");
            currentPlayer0.innerHTML = 0;
            activePlayer = 1;
        }
        currentScore = 0;
    }  else if (activePlayer == 1){
        currentPlayer1.innerHTML = currentScore;
        if (randomDice == 1 ) {
            player1.classList.remove("player--active");
            player0.classList.add("player--active");
            currentPlayer1.innerHTML = 0;
            activePlayer = 0;
        }
        currentScore = 0;
    } 
    
    
});


btnHold.addEventListener("click", () => {
    if (activePlayer == 0){
        scorePlayer0.innerHTML = parseInt(scorePlayer0.innerHTML) + parseInt(currentPlayer0.innerHTML) ;
        activePlayer = 1;
        player0.classList.remove("player--active");
        player1.classList.add("player--active");
        console.log(scorePlayer0.innerHTML);
    } else {
        scorePlayer1.innerHTML = parseInt(scorePlayer1.innerHTML) + parseInt(currentPlayer1.innerHTML) ;
        activePlayer = 0;
        player1.classList.remove("player--active");
        player0.classList.add("player--active");
        console.log(scorePlayer1.innerHTML);
    }
    
})

btnNew.addEventListener("click", () => {
    scorePlayer0.innerHTML = 0;
    scorePlayer1.innerHTML = 0;
})