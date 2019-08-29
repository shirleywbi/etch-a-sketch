import Knob from "./knob.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Arrow from "./arrow.js";
import Screen from "./screen.js";

export default class Game {
    
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.lknob = new Knob(this, 'left');
        this.rknob = new Knob(this, 'right');
        this.ball = new Ball(this);
        this.arrowLeft = new Arrow(this, 'left');
        this.arrowRight = new Arrow(this, 'right');
        this.arrowUp = new Arrow(this, 'up');
        this.arrowDown = new Arrow(this, 'down');
        this.screen = new Screen(this);

        this.staticObjects = [
            this.arrowLeft,
            this.arrowRight,
            this.arrowUp,
            this.arrowDown,
            this.screen
        ];

        this.gameObjects = [
            this.lknob,
            this.rknob,
            this.ball
        ];

        new InputHandler(this.ball);
    }

    update(deltaTime) {
        this.gameObjects.forEach((object) => object.update(deltaTime));
    }

    draw(context) {
        this.staticObjects.forEach((object) => object.draw(context));
        this.gameObjects.forEach((object) => object.draw(context));    
    }
}