let player1Score = 0;
let player2Score = 0;
let enemyScore = 0;
let currentPlayer = 'Player 1';

document.getElementById('odd-btn').addEventListener('click', function() {
    playGame('odd');
});

document.getElementById('even-btn').addEventListener('click', function() {
    playGame('even');
});

document.getElementById('player-select').addEventListener('change', function() {
    currentPlayer = this.value;
    document.getElementById('current-player').innerText = currentPlayer;
    updateScores();
});

document.getElementById('play-again').addEventListener('click', function() {
    document.getElementById('result').innerText = '';
    document.getElementById('enemy-result').innerText = '';
    document.getElementById('play-again').classList.add('hidden');
    document.getElementById('odd-btn').disabled = false;
    document.getElementById('even-btn').disabled = false;
});

function playGame(playerGuess) {
    const playerNumber = parseInt(document.getElementById('player-number').value);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const isEven = randomNumber % 2 === 0;
    const resultMessage = `${currentPlayer} chose ${playerNumber}. Random number is ${randomNumber}. It is ${isEven ? 'Even' : 'Odd'}.`;

    document.getElementById('result').innerText = resultMessage;

    // Player's guess
    if ((playerGuess === 'odd' && !isEven) || (playerGuess === 'even' && isEven)) {
        document.getElementById('result').innerText += ` ${currentPlayer} guessed right!`;
        if (currentPlayer === 'Player 1') {
            player1Score++;
        } else {
            player2Score++;
        }
    } else {
        document.getElementById('result').innerText += ` ${currentPlayer} guessed wrong!`;
    }

    // Enemy's guess
    const enemyGuess = Math.random() < 0.5 ? 'odd' : 'even';
    const enemyResultMessage = `Enemy guessed ${enemyGuess}. Enemy ${enemyGuess === (isEven ? 'even' : 'odd') ? 'won' : 'lost'}.`;

    if (enemyGuess === (isEven ? 'even' : 'odd')) {
        enemyScore++;
    }

    document.getElementById('enemy-result').innerText = enemyResultMessage;

    // Update scores
    updateScores();

    document.getElementById('play-again').classList.remove('hidden');
    document.getElementById('odd-btn').disabled = true;
    document.getElementById('even-btn').disabled = true;
}

function updateScores() {
    if (currentPlayer === 'Player 1') {
        document.getElementById('player-score').innerText = player1Score;
    } else {
        document.getElementById('player-score').innerText = player2Score;
    }
    document.getElementById('enemy-score').innerText = enemyScore;
}
