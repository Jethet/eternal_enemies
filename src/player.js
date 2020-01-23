'use strict'

// Constructor for player

function Player(canvas, lives){
    this.ctx = canvas.getContext('2d');
    this.lives = lives;
    this.size = 100;

    this.x = 50;
    this.y = canvas.height / 2; // this is the start position: centered

    this.direction = 0;     // direction is only up and down so can be 1, 0 or -1
    this.speed = 5;
}

Player.prototype.setDirection = function(){
    // increase with -1 for up, +1 for down due to y axis
    if (direction === 'up') this.direction = -1;
    else if (direction === 'down') this.direction = 1;
    else if (direction === 'stop') this.direction = 0;
};

Player.prototype.didCollide = function(){  


};

Player.prototype.updatePosition = function(){
    this.y = this.y + (this.direction * this.speed);
    
};

Player.prototype.handleScreenCollision = function(){
    this.updatePosition();
    var screenTop = 0;                      
    var screenBottom = this.canvas.height;

    if (this.y + this.size > screenBottom) this.direction = -1;
    else if (this.y < screenTop) this.direction = 1;
};



Player.prototype.removeLife = function(){};

Player.prototype.draw = function(){
    this.ctx.fillStyle = 'lightblue';

    // fillRect(x, y, width, heitght):
    this.ctx.fillRect(this.x, this.y, this.size, this.size) // using this.size 2 times gives a square size

};
