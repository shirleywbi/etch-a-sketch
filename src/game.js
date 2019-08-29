import Knob from "./knob.js";
import InputHandler from "./input.js";
import Line from "./line.js";
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
        this.line = new Line(this);
        this.arrowLeft = new Arrow(this, 'left');
        this.arrowRight = new Arrow(this, 'right');
        this.arrowUp = new Arrow(this, 'up');
        this.arrowDown = new Arrow(this, 'down');
        this.screen = new Screen(this);

        this.staticObjects = [
            this.lknob,
            this.rknob,
            this.arrowLeft,
            this.arrowRight,
            this.arrowUp,
            this.arrowDown,
            this.screen
        ];

        this.gameObjects = [
            this.line
        ];

        new InputHandler(this.line);
    }

    update(deltaTime) {
        this.gameObjects.forEach((object) => object.update(deltaTime));
    }

    drawStatic(context) {
        this.staticObjects.forEach((object) => object.draw(context));
    }

    draw(context) {
        this.gameObjects.forEach((object) => object.draw(context));    
    }
}