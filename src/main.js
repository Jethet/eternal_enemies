'use strict'

// Create HTML elements out of the string that looks like html, parse the string into
// elements via innerHTML, that it can pass into the DOM (DOM representation)

function buildDom(htmlString){
    var div = document.createElement('div');
    div.innerHTML = htmlString;


}

// This runs initial start and call other functions that manage the game

function main(){
    var game;
    var splashScreen;
    var gameOverScreen;

    function createSplashScreen(){

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


