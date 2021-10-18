import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class Background {

    constructor() {
        this.container = new PIXI.Container();
        this.createSprite();
    }

    createSprite() {
        const sprite = new PIXI.Sprite(Globals.resources["bg"].texture);
        sprite.x = 0;
        sprite.y = 0;
        sprite.anchor.set(0);

        this.container.addChild(sprite);
    }
}