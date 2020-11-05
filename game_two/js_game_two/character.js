export default class Character {
    constructor(id, width, height, x, y) {
        this.image = document.getElementById(id);

        this.width = width;
        this.height = height;

        this.position = {
            x: x,
            y: y
        };
    }
}