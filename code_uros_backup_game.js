"use strict";

function Game() {
  this.canvas = null;
  this.ctx = null;

  this.enemies = [];
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
    console.log("WHAT IS THIS", this);

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

Game.prototype.startLoop = function() {};

Game.prototype.updateGameStats = function() {};

Game.prototype.gameOver = function() {};

Game.prototype.removeGameScreen = function() {};

Game.prototype.checkCollisions = function() {};
