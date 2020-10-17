export default class InputHandler {
    constructor(boy) {
        document.addEventListener("keydown", (event) => {
            boy.hasMoved = true;

            switch(event.key) {
                case "ArrowLeft":
                    boy.currentDirection = boy.spriteHeight;
                    boy.moveLeft();
                    break;

                case "ArrowRight":
                    boy.currentDirection = 0;
                    boy.moveRight();
                    break;

                case "ArrowUp":
                    boy.moveUp();
                    break;
                
                case "ArrowDown":
                    boy.moveDown();
                    break;
            }
        });

        document.addEventListener("keyup", (event) => {
            boy.hasMoved = false;

            switch(event.key) {
                case "ArrowLeft":
                    if (boy.speedX < 0) boy.speedX = 0;
                    break;

                case "ArrowRight":
                    if (boy.speecX > 0) boy.speedX = 0;
                    break;

                case "ArrowUp":
                    if (boy.speedY < 0) boy.speedY = 0;
                    break;
                
                case "ArrowDown":
                    if (boy.speedY > 0) boy.speedY = 0;
                    break;
            }
        });
    }
}