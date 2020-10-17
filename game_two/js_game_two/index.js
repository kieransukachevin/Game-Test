import Boy from './boy.js';
import InputHandler from './input.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 800;

let boy = new Boy(GAME_WIDTH, GAME_HEIGHT);
new InputHandler(boy);

let lastTime = 0;
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    boy.update(deltaTime);
    boy.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);