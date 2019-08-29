export default class Knob {

    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.size = 80;
        let verticalHeight = this.gameHeight - this.size;
        if (position === 'left') {
            this.position = { 
                x: this.size, 
                y: verticalHeight
            };
        } else {
            this.position = {
                x: this.gameWidth - this.size, 
                y: verticalHeight
            };
        }
    }

    stop() {
        this.angle = 0;
    }

    draw(context) {
        context.lineWidth = 1;
        context.beginPath();
        
        context.arc(this.position.x, this.position.y, this.size/2, 0, 2 * Math.PI);
        context.fillStyle = 'white';
        
        context.fill();
    }

    update(deltaTime) {}

    
}