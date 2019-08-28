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
            x: 4,
            y: 2
        };
        this.size = 50;
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);

    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // wall on left or right
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        // wall on top or bottom
        if (this.position.y - this.size > this.gameHeight || this.position.y < 0) {
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