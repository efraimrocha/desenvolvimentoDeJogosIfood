// state -> Aqui são fefinidos os elementos as variaveis que estão estão divididas em
// duas sessões; view e values. Em view estarão os elemntos que será mostrado para o jogador e em values estão valores para cáculos e controle do game.
const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        socre: document.querySelector("#score"),
        lives: document.querySelector("#lives")
    },
    values:{
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
    },
    actions:{
        countDownTimerId: setInterval(countDown, 1000),
        timerId: null,
    }
};


function countDown(){

    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;
    // verifica se tempo engotou
    if (state.values.curretTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        audioGameOver();
        alert("Game over! Your resul: " + state.values.result);
    }
};

function playSound(){
    let audio = new Audio("./src/sounds/hit.m4a")
    audio.volume = 0.05;
    audio.play();
}

function playSoundGameOver(){
    let audioGameOver = new Audio("./src/sounds/game-over.wav")
    audioGameOver.play();
}

function randomSquare(){

    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
};

function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity)
};

function addListnerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", ()=>{
            if (square.id === state.values.hitPosition){
                state.values.result++
                state.view.socre.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound();
            }
        }) 
    });
};

function liveDown(){

}

function init() {
   moveEnemy();
   addListnerHitBox();
};

init();