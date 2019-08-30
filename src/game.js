// require ../src/knob.js;
// require ../src/input.js;
// require ../src/line.js;
// require ../src/arrow.js;
// require ../src/screen.js;

function Game(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.start = function() {
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

    this.update = function(deltaTime) {
        this.gameObjects.forEach((object) => object.update(deltaTime));
    }

    this.resetScreen = function(context) {
        context.clearRect(this.screen.position.x, this.screen.position.y, this.screen.width, this.screen.height);
        this.line.clear();
        this.screen.draw(context);
        let shaking = document.getElementById('shake');
        shaking.play();
    }

    this.drawStatic = function(context) {
        this.staticObjects.forEach((object) => object.draw(context));
    }

    this.draw = function(context) {
        this.gameObjects.forEach((object) => object.draw(context));    
    }
}

