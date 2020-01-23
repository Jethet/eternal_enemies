'use strict'

function Enemy(canvas, y, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.size = 20;
    this.x = this.canvas.width + this.size;
    this.y = y;
    this.speed = speed;
}

Enemy.prototype.draw = function(){
    this.ctx.fillStyle = 'orange';

    // fillRect(x, y, width, heitght):
    this.ctx.fillRect(this.x, this.y, this.size, this.size) // using this.size 2 times gives a square size

}

Enemy.prototype.updatePosition = function(){
    this.x = this.x - this.speed;   // every time the enemy moves, the value is decreased with
            // the value of speed in every frame

}

// outside screen = value of x plus value of size of the box (player),
// with enemy moving from right to left (disappearing out of view on the left)

Enemy.prototype.isInsideScreen = function(){
    return this.x + this.size > 0;

}