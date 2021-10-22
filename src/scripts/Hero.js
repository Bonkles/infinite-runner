import * as PIXI from "pixi.js"

import { Globals } from "./Globals";

export class Hero {

    constructor() {
        this.container = new PIXI.Container();

        const heroTextures = [Globals.resources["walk1"].texture, Globals.resources["walk2"].texture];
        this.sprite = new PIXI.AnimatedSprite(heroTextures);
        this.sprite.loop = true;
        this.sprite.animationSpeed = .1
        this.sprite.play();
        this.sprite.x = window.innerWidth/2;
        this.sprite.y = window.innerHeight / 2;
        this.container.addChild(this.sprite);
        this.dy = 0;
        this.platform = null;
    }


    update() {
        if (!this.platform) {
            ++this.dy;
            this.sprite.y += this.dy;
        }
    }

    stayOnPlatform(platform) {
        this.platform = platform;
        this.dy = 0;
        this.sprite.y = platform.top - this.sprite.height;
    }

    moveByPlatform(platform) {
        this.sprite.x = platform.nextleft - this.sprite.width;

    }
    get bottom() {
        this.sprite.y + this.sprite.height;
    }

    get nextBottom() {
        return this.bottom + this.dy;
    }

    get left() {
        return this.sprite.x;
    }
    get right() {
        return this.left + this.sprite.width;
    }
    get top() {
        return this.sprite.y;
    }
    get bottom() {
        return this.top + this.sprite.height;
    }
}