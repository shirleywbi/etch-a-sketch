// Reference: http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/

export default class Line {

    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.position = {
            x: 200,
            y: 500
        }
        this.maxSpeed = {
            x: 1,
            y: 1
        }
        this.speed = {
            x: 0,
            y: 0
        };
        this.size = 1;
        this.drawX = new Array();
        this.drawY = new Array();
    }

    // EFFECTS: adds screen position to drawX, drawY
    addScreenPos() {
        this.drawX.push(this.position.x);
        this.drawY.push(this.position.y);
    }

    moveLeft() {
        this.speed.x = -this.maxSpeed.x;
    }

    moveRight() {
        this.speed.x = this.maxSpeed.x;
    }

    moveUp() {
        this.speed.y = -this.maxSpeed.y;
    }

    moveDown() {
        this.speed.y = this.maxSpeed.y;
    }

    stop() {
        this.speed.x = 0;
        this.speed.y = 0;
    }

    clear() {
        this.drawX = [];
        this.drawY = [];
    }

    draw(context) {
        context.strokeStyle = 'rgba(46, 49, 49, 1)';
        context.lineWidth = this.size;
        for (let i=0; i < this.drawX.length; i++) {
            context.beginPath();
            context.moveTo(this.drawX[i-1], this.drawY[i-1]);
            context.lineTo(this.drawX[i], this.drawY[i]);
            context.closePath();
            context.stroke();
        }
        this.addScreenPos();
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        
        let screen = this.game.screen;

        // restrict to screen size
        // wall on left or right
        if (this.position.x < screen.position.x) {
            this.position.x = screen.position.x;
        } else if (this.position.x + this.size > screen.position.x + screen.width) {
            this.position.x = screen.position.x + screen.width - this.size;
        }

        // wall on top or bottom
        if (this.position.y - this.size < screen.position.y) {
            this.position.y = screen.position.y;
        } else if (this.position.y + this.size > screen.position.y + screen.height) {
            this.position.y = screen.position.y + screen.height - this.size;
        }
    }
}