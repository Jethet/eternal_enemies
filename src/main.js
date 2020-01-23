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
            console.log("CLICKED START");
        });
    }

    function removeSplashScreen(){

    }

    function createGameScreen(){

    }

    function removeGameScreen(){

    }

    function createGameOverScreen(){

    }


    function removeGameOverScreen(){

    }

    // Setting game state
    function startGame(){

    }
    function gameOver(){

    }

    // Initialize the start screen:
    createSplashScreen();

    
}

window.addEventListener('load', main);


