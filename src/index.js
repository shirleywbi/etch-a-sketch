import Knob from "./knob.js";

let canvas = document.getElementById("gameScreen");

let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


let lknob = new Knob(GAME_WIDTH, GAME_HEIGHT, 'left');
let rknob = new Knob(GAME_WIDTH, GAME_HEIGHT, 'right');

lknob.draw(context);

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    
    context.clearRect(0, 0, 800, 600);
    lknob.update(deltaTime);
    lknob.draw(context);

    requestAnimationFrame(gameLoop);

}

gameLoop();
