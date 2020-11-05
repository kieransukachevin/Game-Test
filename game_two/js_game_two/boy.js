export default class Boy {
    constructor(game) {
        this.image = document.getElementById("img_boy");

        this.show = true;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.width = this.image.width;
        this.height = this.image.height;

        this.spriteWidth = this.width / 4;
        this.spriteHeight = this.height / 2;

        this.cycleLoop = [0, 1, 2, 3];
        this.currentLoopIndex = 0;

        this.frameLimit = 10;
        this.frameCount = 0;

        this.currentDirection = 0;
        this.hasMoved = false;     

        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 9;
        this.position = {x: 500, y: 500}
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
        // If the boy is moving, increment loop index based on frameCount
        if (this.hasMoved) {
            this.frameCount++;
            if (this.frameCount >= this.frameLimit) {
                this.frameCount = 0;
                this.currentLoopIndex++;
                if (this.currentLoopIndex >= this.cycleLoop.length) {
                    this.currentLoopIndex = 0;
                }
            }
        }

        // If the boy is not moving, set loop index to idle sprite
        if (!this.hasMoved) {
            if (this.currentDirection == 0) {
                this.currentLoopIndex = 3;
            }
            else {
                this.currentLoopIndex = 0;
            }
        }

        this.position.x += this.speedX;
        this.position.y += this.speedY;

        // Check collision with borders of the canvas
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
            this.position.y = this.gameHeight - this.spriteHeight;
        }
    }

    // NEEDS WORK TO SET COLLISION
    collision(setting) {
        setting.collisions.forEach(collision => {
            if ((this.position.x + this.spriteWidth > collision[0] && this.position.x < (collision[0] + collision[2]))) {
                if ((this.position.y + this.spriteHeight > collision[1] && (this.position.y + this.spriteHeight - 30) < (collision[1] + collision[3]))) {

                    // let d1 = 
                    // let d2 = 
                    // let d3 = 
                    // let d4 = 
                    
                    this.speedX = 0;
                    this.speedY = 0;

                }
            }
        });
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