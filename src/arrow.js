export default class Arrow {
    
    constructor(game, dir) {
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.image = document.getElementById('img_arrow_' + dir);
        this.size = 15;
        this.space = 5;
        switch (dir) {
            case 'left':
                this.position = {
                    x: this.game.lknob.position.x + this.game.lknob.size/2 - (2 * this.size + this.space)/2, 
                    y: this.game.lknob.position.y - this.size - 10
                };
                break;
            case 'right':
                this.position = {
                    x: this.game.arrowLeft.position.x + this.size + this.space, 
                    y: this.game.arrowLeft.position.y
                };
                break;
            case 'up':
                this.position = {
                    x: this.game.rknob.position.x + this.game.rknob.size/2 - this.size/2, 
                    y: this.game.rknob.position.y - this.size * 2 - this.space - 10
                };
                break;
            case 'down':  
                this.position = {
                    x: this.game.arrowUp.position.x, 
                    y: this.game.arrowUp.position.y + this.size + this.space
                };
                break;  
        }        
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {}
}