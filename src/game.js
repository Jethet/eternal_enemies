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

    this.livesElement = document.querySelector('.lives .value');
    this.scoreElement = document.querySelector('.score .value');

    var containerWidth = this.canvasContainer.offsetWidth();    // built-in property to take entire size
    var containerHeight = this.canvasContainer.offsetHeight();   // of the element, incl borders etc. ??

    this.canvas.setAttribute('width', containerWidth);
    this.canvas.setAttribute('height', containerHeight);

    // Create player
    this.player = {};  // will be created by player constructor

    // Add keydown event listeners (for movements)
    

    // Start the game initially
    this.startLoop();
};

Game.prototype.startLoop = function(){};

Game.prototype.updateGameStats = function(){};

Game.prototype.gameOver = function(){};

Game.prototype.removeGameScreen = function(){};

Game.prototype.checkCollisions = function(){};
