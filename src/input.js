export default class InputHandler {

    constructor(line) {
        document.addEventListener("keydown", event => {
            switch(event.key) {
                // Move left
                case 'z':
                case 'KeyZ':
                    line.moveLeft();
                    break;
                // Move right
                case 'x':
                case 'KeyX':
                    line.moveRight();
                    break;
                // Move up
                case '.':
                case 'Period':
                    line.moveUp();
                    break;
                // Move down
                case '/':
                case 'Slash':
                    line.moveDown();
                    break;
            }
        });

        document.addEventListener("keyup", event => {
            switch(event.key) {
                case 'z':
                case 'KeyZ':
                    if (line.speed < 0)
                        line.stop();
                    break;
                case 'x':
                case 'KeyX':
                    if (line.speed > 0)
                        line.stop();
                    break;
                case '.':
                case 'Period':
                    if (line.speed < 0)
                        line.stop();
                    break;
                case '/':
                case 'Slash':
                    if (line.speed > 0)
                        line.stop();
                    break;
            }
        });
    }

}