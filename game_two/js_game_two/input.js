export default class InputHandler {
    constructor(boy) {
        document.addEventListener("keydown", (event) => {
            // boy.frameCount = 9;

            switch(event.key) {
                case "ArrowLeft":
                    boy.hasMoved = true;
                    boy.currentDirection = boy.spriteHeight;
                    boy.moveLeft();
                    break;

                case "ArrowRight":
                    boy.hasMoved = true;
                    boy.currentDirection = 0;
                    boy.moveRight();
                    break;

                case "ArrowUp":
                    boy.hasMoved = true;
                    boy.moveUp();
                    break;
                
                case "ArrowDown":
                    boy.hasMoved = true;
                    boy.moveDown();
                    break;
            }
        });

        document.addEventListener("keyup", (event) => {

            switch(event.key) {
                case "ArrowLeft":
                    boy.hasMoved = false;
                    if (boy.speedX < 0) boy.speedX = 0;
                    break;

                case "ArrowRight":
                    boy.hasMoved = false;
                    if (boy.speedX > 0) boy.speedX = 0;
                    break;

                case "ArrowUp":
                    boy.hasMoved = false;
                    if (boy.speedY < 0) boy.speedY = 0;
                    break;
                
                case "ArrowDown":
                    boy.hasMoved = false;
                    if (boy.speedY > 0) boy.speedY = 0;
                    break;
            }
        });
    }
}