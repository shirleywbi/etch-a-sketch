export default class InputHandler {

    constructor(knob1, knob2) {
        document.addEventListener("keydown", event => {
            switch(event.key) {
                // Move left
                case 'z':
                case 'KeyZ':
                    knob1.rotateLeft();
                    break;
                // Move right
                case 'x':
                case 'KeyX':
                    knob1.rotateRight();
                    break;
                // Move up
                case '.':
                case 'Period':
                    knob2.rotateLeft();
                    break;
                // Move down
                case '/':
                case 'Slash':
                    knob2.rotateRight();
                    break;
            }
        });

        document.addEventListener("keyup", event => {
            switch(event.key) {
                case 'z':
                case 'KeyZ':
                    if (knob1.speed < 0)
                        knob1.stop();
                    break;
                case 'x':
                case 'KeyX':
                    if (knob1.speed > 0)
                        knob1.stop();
                    break;
                case '.':
                case 'Period':
                    if (knob2.speed < 0)
                        knob2.stop();
                    break;
                case '/':
                case 'Slash':
                    if (knob2.speed > 0)
                        knob2.stop();
                    break;
            }
        });
    }

}