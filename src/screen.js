function Screen(game) {
    this.game = game;
    this.position = {
        x: this.game.lknob.position.x/2, 
        y: this.game.lknob.diameter/2
    }
    this.width = game.gameWidth - game.rknob.diameter;
    this.height = game.arrowUp.position.y - game.rknob.diameter * 0.5 - 20;

    this.draw = function(context) {
        context.fillStyle = 'lightgray';
        context.strokeStyle = 'lightgray';
        
        // Create corner lines
        let cornerRadius = 20;
        context.lineJoin = "round";
        context.lineWidth = cornerRadius;

        // Fill in block
        context.strokeRect(this.position.x+(cornerRadius/2), this.position.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
        context.fillRect(this.position.x+(cornerRadius/2), this.position.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);  

    }
}