function Knob(game, position) {
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

    this.stop = function() {
        this.angle = 0;
    }

    this.draw = function(context) {
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
   
}

function InputHandler(line) {
    document.addEventListener("keydown", event => {
        switch(event.key) {
            // Move left
            case 'z':
            case 'KeyZ':
            case 'ArrowLeft':
                line.moveLeft();
                break;
            // Move right
            case 'x':
            case 'KeyX':
            case 'ArrowRight':
                line.moveRight();
                break;
            // Move up
            case '.':
            case 'Period':
            case 'ArrowUp':
                line.moveUp();
                break;
            // Move down
            case '/':
            case 'Slash':
            case 'ArrowDown':
                line.moveDown();
                break;
        }
    });

    document.addEventListener("keyup", event => {
        switch(event.key) {
            case 'z':
            case 'KeyZ':
            case 'ArrowLeft':
                line.stop();
                break;
            case 'x':
            case 'KeyX':
            case 'ArrowRight':
                line.stop();
                break;
            case '.':
            case 'Period':
            case 'ArrowUp':
                line.stop();
                break;
            case '/':
            case 'Slash':
            case 'ArrowDown':
                line.stop();
                break;
        }
    });
}

// Reference: http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/

function Line(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.position = {
        x: 200,
        y: 500
    }
    this.maxSpeed = {
        x: 1,
        y: 1
    }
    this.speed = {
        x: 0,
        y: 0
    };
    this.size = 1;
    this.drawX = new Array();
    this.drawY = new Array();

    // EFFECTS: adds screen position to drawX, drawY
    this.addScreenPos = function() {
        this.drawX.push(this.position.x);
        this.drawY.push(this.position.y);
    }

    this.moveLeft = function() {
        this.speed.x = -this.maxSpeed.x;
    }

    this.moveRight = function() {
        this.speed.x = this.maxSpeed.x;
    }

    this.moveUp = function() {
        this.speed.y = -this.maxSpeed.y;
    }

    this.moveDown = function() {
        this.speed.y = this.maxSpeed.y;
    }

    this.stop = function() {
        this.speed.x = 0;
        this.speed.y = 0;
    }

    this.clear = function() {
        this.drawX = [];
        this.drawY = [];
    }

    this.draw = function(context) {
        context.strokeStyle = 'rgba(46, 49, 49, 1)';
        context.lineWidth = this.size;
        for (let i=0; i < this.drawX.length; i++) {
            context.beginPath();
            context.moveTo(this.drawX[i-1], this.drawY[i-1]);
            context.lineTo(this.drawX[i], this.drawY[i]);
            context.closePath();
            context.stroke();
        }
        this.addScreenPos();
    }

    this.update = function(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        
        let screen = this.game.screen;

        // restrict to screen size
        // wall on left or right
        if (this.position.x < screen.position.x) {
            this.position.x = screen.position.x;
        } else if (this.position.x + this.size > screen.position.x + screen.width) {
            this.position.x = screen.position.x + screen.width - this.size;
        }

        // wall on top or bottom
        if (this.position.y - this.size < screen.position.y) {
            this.position.y = screen.position.y;
        } else if (this.position.y + this.size > screen.position.y + screen.height) {
            this.position.y = screen.position.y + screen.height - this.size;
        }
    }
}

function Arrow(game, dir) {
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

    this.draw = function(context) {
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
}

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

// require ./game.js;

let canvas = document.getElementById("gameScreen");

let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();
game.drawStatic(context);

document.addEventListener("dblclick", event => {
    game.resetScreen(context);
});

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    game.update(deltaTime);
    game.draw(context);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);