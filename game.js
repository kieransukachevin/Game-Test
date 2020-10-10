import Paddle from 'paddle.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');  // 2d context

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);  // clears the whole screen (800x600)
 
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw();
// ctx.fillStyle = "#f00";
// ctx.fillRect(20, 20, 100, 100);

// ctx.fillStyle = "#00f";
// ctx.fillRect(240, 200, 50, 50);