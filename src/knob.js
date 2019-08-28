export default class Knob {

    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.radius = 40;
        this.width = 2 * this.radius;
        this.height = 2 * this.radius;
        this.angle = 0;
        this.maxRotate = 5;
        this.maxSpeed = 10;
        this.speed = 0;
        if (position === 'left') {
            this.position = { 
                x: this.width, 
                y: this.gameHeight - this.height
            };
        } else {
            this.position = {
                x: this.gameWidth - this.width, 
                y: this.gameHeight - this.height
            };
        }
    }

    rotateLeft() {
        this.speed = -this.maxSpeed;
    }

    rotateRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    draw(context) {
        context.fillStyle = '#0ff';
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        context.fill();
    }

    update(deltaTime) {
        if (!deltaTime) return;

        this.position.x += this.speed;

        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;
    }


}