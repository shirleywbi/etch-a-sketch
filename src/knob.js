export default class Knob {

    constructor(gameWidth, gameHeight, position) {
        this.width = 150;
        this.height = 30;
        this.position = {
            x: gameWidth / 2 - this.width /2,
            y: gameHeight - this.height - 10
        };
    }

    draw(context) {
        context.fillStyle = '#0ff';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return;

        this.position.x += 5 / deltaTime;
    }
}