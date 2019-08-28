import Knob from "./knob.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

export default class Game {
    
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.lknob = new Knob(this, 'left');
        this.rknob = new Knob(this, 'right');
        this.ball = new Ball(this);

        this.gameObjects = [
            this.ball,
            this.lknob,
            this.rknob
        ];

        new InputHandler(this.lknob, this.rknob);
    }

    update(deltaTime) {
        this.gameObjects.forEach((object) => object.update(deltaTime));
    }

    draw(context) {
        this.gameObjects.forEach((object) => object.draw(context));    
    }
}