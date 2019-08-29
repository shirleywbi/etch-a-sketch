export default class Knob {

    constructor(game, position) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.diameter = 80;
        let verticalHeight = this.gameHeight - this.diameter;
        if (position === 'left') {
            this.position = { 
                x: this.diameter, 
                y: verticalHeight
            };
        } else {
            this.position = {
                x: this.gameWidth - this.diameter, 
                y: verticalHeight
            };
        }
    }

    stop() {
        this.angle = 0;
    }

    draw(context) {
        context.lineWidth = 1;

        // Draw Big Circle
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.diameter/2, 0, 2 * Math.PI);
        context.fillStyle = 'white';
        context.fill();
        context.closePath();

        // Draw Knob Notches
        context.beginPath();
        context.strokeStyle = 'lightgray';
        let notch = 0;
        let notchCount = 60;
        while (notch < notchCount) {
            context.moveTo(this.position.x, this.position.y);
            context.lineTo(
                this.position.x + this.diameter/2 * Math.cos(2*Math.PI/notchCount * notch) * 0.99, 
                this.position.y + this.diameter/2 * Math.sin(2*Math.PI/notchCount * notch) * 0.99
            );
            notch++;
            context.stroke();
            
        }
        context.closePath();

        // Draw Small Circle
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.diameter/2 * 0.8, 0, 2 * Math.PI);
        context.fillStyle = 'white';
        context.fill();
        context.closePath();
    }

    update(deltaTime) {}

    
}