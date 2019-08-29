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

        // TODO: Does not take into consideration if you still have that particular key down
        document.addEventListener("keyup", event => {
            switch(event.key) {
                case 'z':
                case 'KeyZ':
                        line.stop();
                    break;
                case 'x':
                case 'KeyX':
                        line.stop();
                    break;
                case '.':
                case 'Period':
                        line.stop();
                    break;
                case '/':
                case 'Slash':
                        line.stop();
                    break;
            }
        });
    }

}