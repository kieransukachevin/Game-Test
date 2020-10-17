export default class Boy {
    constructor(gameWidth, gameHeight) {
        this.image = document.getElementById("img_boy");

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.width = this.image.width;
        this.height = this.image.height;
        this.spriteWidth = this.width / 4;
        this.spriteHeight = this.height / 2;

        this.cycleLoop = [0, 1, 2, 3];
        this.currentLoopIndex = 0;

        this.frameLimit = 12;
        this.frameCount = 0;

        this.currentDirection = 0;
        this.hasMoved = false;     

        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 10;
        this.position = {x: 0, y: 0}
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.currentLoopIndex * this.spriteWidth,
            this.currentDirection,
            this.spriteWidth,
            this.spriteHeight,
            this.position.x,
            this.position.y,
            this.spriteWidth,
            this.spriteHeight
        );
    }

    update(deltaTime) {
        if (this.hasMoved) {
            this.frameCount++;
            if (this.frameCount >= this.frameLimit) {
                this.frameCount = 0;
                this.currentLoopIndex++;
                if (this.currentLoopIndex >= this.cycleLoop.lenght) {
                    this.currentLoopIndex = 0;
                }
            }
        }

        if (!this.hasMoved) {
            this.currentLoopIndex = 0;
        }

        this.position.x += this.speedX;
        this.position.y += this.speedY;

        if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.x + this.spriteWidth > this.gameWidth) {
            this.position.x = this.gameWidth - this.spriteWidth;
        }
        if (this.position.y < 0) {
            this.position.y = 0;
        }
        if (this.position.y + this.spriteHeight > this.gameHeight) {
            this.position.y = this.gameHeight - this.spritHeight;
        }
    }

    moveLeft() {
        this.speedX = -this.maxSpeed;
    }

    moveRight() {
        this.speedX = this.maxSpeed;
    }

    moveUp() {
        this.speedY = -this.maxSpeed;
    }

    moveDown() {
        this.speedY = this.maxSpeed;
    }
}