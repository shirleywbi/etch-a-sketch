export default class Line {

    constructor(game) {
        this.image = document.getElementById('img_ball');
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.position = {
            x: 50,
            y: 50
        }
        this.maxSpeed = {
            x: 5,
            y: 5
        }
        this.speed = {
            x: 0,
            y: 0
        };
        this.size = 50;
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

    clear(context) {
        let screen = this.game.screen;
        context.clear(screen.position.x, screen.position.y, screen.width, screen.height);
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
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
        if (this.position.y < screen.position.y) {
            this.position.y = screen.position.y;
        } else if (this.position.y + this.size > screen.position.y + screen.height) {
            this.position.y = screen.position.y + screen.height - this.size;
        }
    }
}