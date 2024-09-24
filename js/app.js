/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
};

let timer = null;

let gameOver = null;

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat');
const hungerStatEl = document.querySelector('#hunger-stat');
const sleepinessStatEl = document.querySelector('#sleepiness-stat');

const playBtnEl = document.querySelector('#play');
const feedBtnEl = document.querySelector('#feed');
const sleepBtnEl = document.querySelector('#sleep');

const gameMessageEl = document.querySelector('#message');

const resetBtnEl = document.querySelector('#restart');

/*-------------------------------- Functions --------------------------------*/
const updateStates = () => {
    state.boredom += Math.floor(Math.random() * (4 - 0) + 0);
    state.hunger += Math.floor(Math.random() * (4 - 0) + 0);
    state.sleepiness += Math.floor(Math.random() * (4 - 0) + 0);
};

const render = () => {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;

    if (gameOver === true) {
        clearInterval(timer);
        gameMessageEl.classList.remove('hidden');
        resetBtnEl.classList.remove('hidden');
    };
};

const checkGameOver = () => {
    if (state.boredom > 10 || state.hunger > 10 || state.sleepiness > 10) {
        gameOver = true;
    };
};

const runGame = () => {
    updateStates();
    checkGameOver();
    render();
};

const playBtnClick = () => {
    state.boredom = 0;
    render();
};

const feedBtnClick = () => {
    state.hunger = 0;
    render();
};

const sleepBtnClick = () => {
    state.sleepiness = 0;
    render();
};

const init = () => {
    gameMessageEl.classList.add('hidden');
    resetBtnEl.classList.add('hidden');
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    gameOver = false;
    timer = setInterval(runGame, 2000);
    render();
};


/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', playBtnClick);
feedBtnEl.addEventListener('click', feedBtnClick);
sleepBtnEl.addEventListener('click', sleepBtnClick);

resetBtnEl.addEventListener('click', init);

window.onload = init();