'use strict'

// Create HTML elements out of the string that looks like html, parse the string into
// elements via innerHTML, that it can pass into the DOM (DOM representation)

function buildDom(htmlString){
    var div = document.createElement('div');
    div.innerHTML = htmlString;

    return div.children[0];
}

// This runs initial start and call other functions that manage the game

function main(){
    var game;
    var splashScreen;
    var gameOverScreen;

    function createSplashScreen(){
        splashScreen = buildDom(`
        <main>
        <h1>Eternal Enemies</h1>
        <button>Start</button>
        </main>`);

        document.body.appendChild(splashScreen);
        var startButton = splashScreen.querySelector('button');
        startButton.addEventListener('click', function(){
            startGame();
        });
    }

    function removeSplashScreen(){
        splashScreen.remove();   // remove() is HTML method that removes entire element

    }
    // Game screen
    function createGameScreen(){
        var gameScreen = buildDom(`
        <main class="game container">
        <header>
            <div class="lives">
            <span class="label">Lives:</span>
            <span class="value"></span>
            </div>
            <div class="score">
            <span class="label">Score:</span>
            <span class="value"></span>
            </div>
        </header>
        <div class="canvas-container">
            <canvas></canvas>
        </div>
        </main>`);

        document.body.appendChild(gameScreen);
        return gameScreen;
    }

    function removeGameScreen(){
        game.gameScreen.remove();

    }

    function createGameOverScreen(score){
        gameOverScreen = buildDom(`
        <main>
            <h1>Game over</h1>
            <p>Your score: <span>${score}</span></p>
            <button>Restart</button>
        </main>
        `); // this button needs an event listener

        document.body.appendChild(gameOverScreen);
        var button = gameOverScreen.querySelector('button');
        button.addEventListener('click', startGame);
    }


    function removeGameOverScreen(){
        if (gameOverScreen !== undefined){
            gameOverScreen.remove();
        }
    }

    // Setting game state
    function startGame(){
        removeSplashScreen();
        removeGameOverScreen();

        game = new Game();  // constructor with properties is in game.js
        game.gameScreen = createGameScreen();   // when game is over, this has to be deleted
                                                // it is now a property of the game object
        
        //Start the game (function in game.js)
        game.start();
        game.passGameOverCallback(gameOver);

        // End the game
    }

    function gameOver(){
        removeGameScreen();
        createGameOverScreen();
    }

    // Initialize the start screen:
    createSplashScreen();

}

window.addEventListener('load', main);


