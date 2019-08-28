import {parseRadians} from './utils/utils';

export default class Knob {

    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.image = document.getElementById('img_knob');
        this.size = 80;
        this.angle = parseRadians(0);
        this.deltaAngle = parseRadians(5);
        this.direction = parseRadians(0);
        if (position === 'left') {
            this.position = { 
                x: this.size * 1/2, 
                y: this.gameHeight - this.size * 3/2
            };
        } else {
            this.position = {
                x: this.gameWidth - this.size * 3/2, 
                y: this.gameHeight - this.size * 3/2
            };
        }
    }

    rotateLeft() {
        this.angle = -this.deltaAngle;
    }

    rotateRight() {
        this.angle = this.deltaAngle;
    }

    stop() {
        this.angle = 0;
    }

    draw(context) {
        // this.image.rotate(this.direction);
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        this.direction += this.angle;
    }

    
}