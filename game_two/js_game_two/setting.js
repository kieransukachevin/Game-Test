export default class Setting {
    constructor(level, game) {
        for (const [key, value] of Object.entries(level)) {
            if (key == "id") {
                this.id = value;
            }
            if (key == "collisions") {
                this.collisions = value;
            }
        }

        this.image = document.getElementById(this.id);

        this.show = false;
    }

    update(deltaTime) {

    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            0,
            0
        );
        // ctx.fillRect(this.collisions[0][0], this.collisions[0][1], this.collisions[0][2], this.collisions[0][3]);
    }

    getCollisions() {
        return this.collisions;
    }
}
