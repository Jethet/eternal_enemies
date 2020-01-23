'use strict'

// Create game constructor

function Game(){
    this.canvas = null;
    this.ctx =  null;

    this.enemies = [];   // array of enemies
    this.player = null;

    this.gameIsOver = false;
    this.gameScreen = null;   // to save the game

};

Game.prototype.start = function(){   // initialize game and canvas: grab elements to work with (parent element has size and
    this.canvasContainer = document.querySelector('.canvas-container'); // size of the canvas must be within parent of canvas
    this.canvas = this.canvasContainer.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.livesElement = this.gameScreen.querySelector('.lives .value');
    this.scoreElement = this.gameScreen.querySelector('.score .value');

    var containerWidth = this.canvasContainer.offsetWidth;    // built-in property to take entire size
    var containerHeight = this.canvasContainer.offsetHeight;   // of the element, incl borders etc. ??

    this.canvas.setAttribute('width', containerWidth);
    this.canvas.setAttribute('height', containerHeight);

    // Create player
    this.player = new Player(this.canvas, 3, 100);  // is created by player constructor

    // Add keydown event listeners (for movements)
    this.handleKeyDown = function(event){
        if (event.key === 'ArrowUp'){
            console.log("UP");
            this.player.setDirection('up');
        } else if (event.key === 'ArrowDown'){
            console.log("DOWN");
            this.player.setDirection('down');
        }
    };

    window.addEventListener('keydown', this.handleKeyDown.bind(this)); // this.handleKeyDown is callback, need to bind to object player
// BIND is necessary when using window because by default the event listener is applied to
// window. If it is meant to aplly to something else, bind() is needed. 
// Window is needed here because the event listener needs to get the events from the entire
// window, wherever the event takes place.

    // Start the game initially
    this.startLoop();
};

Game.prototype.startLoop = function(){};

Game.prototype.updateGameStats = function(){};

Game.prototype.gameOver = function(){};

Game.prototype.removeGameScreen = function(){};

Game.prototype.checkCollisions = function(){};
