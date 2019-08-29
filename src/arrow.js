export default class Arrow {
    
    constructor(game, dir) {
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.direction = dir;
        this.size = 15;
        this.space = 5;

        let leftRightY = this.game.lknob.position.y - this.game.lknob.diameter/2 - this.size - 10;
        let upDownX = this.game.rknob.position.x - this.size/2;
        switch (dir) {
            case 'left':
                this.position = {
                    x: this.game.lknob.position.x - (2 * this.size + this.space)/2, 
                    y: leftRightY
                };
                break;
            case 'right':
                this.position = {
                    x: this.game.arrowLeft.position.x + this.size + this.space, 
                    y: leftRightY
                };
                break;
            case 'up':
                this.position = {
                    x: upDownX, 
                    y: this.game.rknob.position.y - this.game.rknob.diameter/2 - this.size * 2 - this.space - 10
                };
                break;
            case 'down':  
                this.position = {
                    x: upDownX, 
                    y: this.game.rknob.position.y - this.game.rknob.diameter/2 - this.size - 10
                };
                break;  
        }
    }

    draw(context) {
        context.fillStyle = 'black';
        switch(this.direction) {
            case 'left': 
                context.beginPath();
                context.moveTo(this.position.x, this.position.y + this.size/2);
                context.lineTo(this.position.x + this.size, this.position.y + this.size);
                context.lineTo(this.position.x + this.size, this.position.y);
                context.fill();
                context.closePath();
                break;
            case 'right':
                context.beginPath();
                context.moveTo(this.position.x, this.position.y);
                context.lineTo(this.position.x + this.size, this.position.y + this.size/2);
                context.lineTo(this.position.x, this.position.y + this.size);
                context.fill();
                context.closePath();
                break;
            case 'up':
                context.beginPath();
                context.moveTo(this.position.x, this.position.y + this.size);
                context.lineTo(this.position.x + this.size/2, this.position.y);
                context.lineTo(this.position.x + this.size, this.position.y + this.size);
                context.fill();
                context.closePath();
                break;
            case 'down':
                context.beginPath();
                context.moveTo(this.position.x, this.position.y);
                context.lineTo(this.position.x + this.size/2, this.position.y + this.size);
                context.lineTo(this.position.x + this.size, this.position.y);
                context.fill();
                context.closePath();
                break;
        }   
    }

    update(deltaTime) {}
}