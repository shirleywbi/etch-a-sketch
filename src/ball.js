export default class Ball {

    constructor(game) {
        this.image = document.getElementById('img_ball');
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.position = {
            x: 50,
            y: 50
        }
        this.speed = {
            x: 3,
            y: 1
        };
        this.size = 50;
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);

    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        
        let screen = this.game.screen;

        // wall on left or right
        if (this.position.x < screen.position.x || this.position.x + this.size > screen.position.x + screen.width) {
            this.speed.x = -this.speed.x;
        }

        // wall on top or bottom
        if (this.position.y < screen.position.y || this.position.y + this.size > screen.position.y + screen.height) {
            this.speed.y = -this.speed.y;
        }

        // check collision with paddle
        let bottomOfBall = this.position.y + this.size;
        let topOfPaddle = this.game.lknob.position.y;
        let leftSideOfPaddle = this.game.lknob.position.x;
        let rightSideOfPaddle = this.game.lknob.position.x + this.game.lknob.width;

        if (bottomOfBall >= topOfPaddle
            && this.position.x >= leftSideOfPaddle
            && this.position.x + this.size <= rightSideOfPaddle
        ) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.lknob.position.y - this.size;
        }
    }
}