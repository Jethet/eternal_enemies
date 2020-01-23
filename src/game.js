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

Game.prototype.startLoop = function(){
    var loop = function(){
        console.log('loop');

    // 1. update state of player, game, enemy: 
        // a. player was created already; 
        // b. enemies must be created randomly;
        if (Math.random() > 0.98){
            var randomY = this.canvas.height * Math.random();
            var newEnemy = new Enemy(this.canvas, randomY, 5);
            this.enemies.push(newEnemy);
        }
        // c. collisions of player need to be checked (check all of the enemies);
        this.checkCollisions();

        // d. update the player and check if he is colliding with the screen
        this.player.handleScreenCollision();

        // e. update the existing enemies (move them)
        // f. check if enemies are out of the screen (i.e. create array with enemies
        // who pass these conditions)
        this.enemies = this.enemies.filter(function(enemyObj){
            enemyObj.updatePosition();
            return enemyObj.isInsideScreen();  // will evaluate to true or false
        });

    // 2. clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 3. update the canvas (draw)
    //  a. draw the player
        this.player.draw();

    //  b. draw the enemies
        this.enemies.forEach(function(enemyObj){
            enemyObj.draw()
    })

    // 4. terminate the loop if game is over

    if (!this.gameIsOver){
        requestAnimationFrame(loop);
    };
    }.bind(this);
    loop();
};


Game.prototype.updateGameStats = function(){};

Game.prototype.gameOver = function(){};

Game.prototype.removeGameScreen = function(){};

Game.prototype.checkCollisions = function(){};
