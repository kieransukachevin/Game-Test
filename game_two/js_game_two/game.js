import InputHandler from './input.js';
import Boy from './boy.js';
import Character from './character.js';
import Setting from './setting.js';

import {level1} from './levels.js';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.boy = new Boy(this);

        this.setting = new Setting(level1, this);
        this.setting.show = true;

        this.gameLevels = [this.setting];

        new InputHandler(this.boy);
    }

    update(deltaTime) {
        this.boy.update(deltaTime, this.gameLevels);

        this.gameLevels.forEach((object) => {if (object.show) this.boy.collision(object)});
    }

    draw(ctx) {
        this.gameLevels.forEach((object) => {if (object.show) object.draw(ctx)});
        this.boy.draw(ctx);
    }
}