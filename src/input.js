export default class InputHandler {

    constructor(line) {
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

        // TODO: Does not take into consideration if you still have that particular key down
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

}