"use strict";

function Game() {
  this.canvas = null;
  this.ctx = null;

  this.enemies = []; // push enemiy objects at random
  this.player = null;

  this.gameIsOver = false;
  this.gameScreen = null;
}

// Initialize the game and canvas
Game.prototype.start = function() {
  this.canvasContainer = document.querySelector(".canvas-container");
  this.canvas = this.canvasContainer.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");

  this.livesElement = this.gameScreen.querySelector(".lives .value");
  this.scoreElement = this.gameScreen.querySelector(".score .value");

  var containerWidth = this.canvasContainer.offsetWidth;
  var containerHeight = this.canvasContainer.offsetHeight;

  this.canvas.setAttribute("width", containerWidth);
  this.canvas.setAttribute("height", containerHeight);

  // Create the player
  this.player = new Player(this.canvas, 3, 100);

  // Add keydown event listeners
  this.handleKeyDown = function(event) {
    if (event.key === "ArrowUp") {
      console.log("UP");
      this.player.setDirection("up");
    } else if (event.key === "ArrowDown") {
      console.log("DOWN");
      this.player.setDirection("down");
    }
  };

  // this = game instance
  window.addEventListener("keydown", this.handleKeyDown.bind(this));

  // Start the game initially
  this.startLoop();
};

Game.prototype.startLoop = function() {
  var loop = function() {
    console.log("IN LOOP");

    // 1. UPDATE THE STATE (game, player, enemy)

    // 0. Player was created already

    // 1. Create enemies randomly

    if (Math.random() > 0.98) {
      var randomY = this.canvas.height * Math.random();
      var newEnemy = new Enemy(this.canvas, randomY, 5);

      this.enemies.push(newEnemy);
    }

    // 2. Check if the player had collisions with enemies (check all of the enemies)
    this.checkCollisions();

    // 3. Update the player and check if he is colliding the screen
    this.player.handleScreenCollision();

    // 4. Update the existing enemies (move them)
    // 5. Check if the enemies our out of the screen
    // [x, x, x ,x ]

    this.enemies = this.enemies.filter(function(enemyObj) {
      enemyObj.updatePosition(); // 4
      return enemyObj.isInsideScreen(); // 5
    });

    // 2. CLEAR THE CANVAS
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 3. UPDATE THE CANVAS (DRAW)
    // 1. Draw the player
    this.player.draw();

    // 2. Draw all of the enemies
    this.enemies.forEach(function(enemyObj) {
      enemyObj.draw();
    });

    // 4. TERMINATE THE LOOP IF THE GAME IS OVER
    if (!this.gameIsOver) {
      requestAnimationFrame(loop);
    }
  }.bind(this);

  // requestAnimationFrame(loop);
  loop();
};

Game.prototype.updateGameStats = function() {};

Game.prototype.gameOver = function() {
    this.gameIsOver = true;
    console.log("GAME OVER");

    this.startOver(); // the callback function ( gameOver ) passed from main
};

Game.prototype.removeGameScreen = function() {};

Game.prototype.checkCollisions = function() {
  this.enemies.forEach(function(enemy) {
    if (this.player.didCollide(enemy)) {
      this.player.removeLife();
      console.log("lives", this.player.lives);

      // move the enemy out of the screen
      enemy.x = 0 - enemy.size;

      if (this.player.lives === 0) {
        this.gameOver();
      }
    }
  }, this);
};

Game.prototype.passGameOverCallback = function(gameOverFunc){
    this.startOver = gameOverFunc;
}