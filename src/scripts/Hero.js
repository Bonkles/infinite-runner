import * as PIXI from "pixi.js"

import { Globals } from "./Globals";

export class Hero {

    constructor() {
        this.container = new PIXI.Container();

        const heroTextures = [Globals.resources["walk1"].texture, Globals.resources["walk2"].texture];
        this.herosprite = new PIXI.AnimatedSprite(heroTextures);
        this.herosprite.loop = true;
        this.herosprite.animationSpeed = .1
        this.herosprite.play();
        this.container.addChild(this.herosprite);
        this.container.x = window.innerWidth/2;
        this.container.y = window.innerHeight/2;
    }
}