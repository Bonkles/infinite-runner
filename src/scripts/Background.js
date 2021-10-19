import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class Background {

    constructor() {
        this.container = new PIXI.Container();
        this.sprites = [];
        this.createSprite();
        this.speed = .2;
    }

    createSprite() {
        const sprite = new PIXI.Sprite(Globals.resources["bg"].texture);
        sprite.x = 0;
        sprite.y = 0;
        sprite.anchor.set(0);

        this.container.addChild(sprite);
        this.sprites.push(sprite);
    }

    update(dt) {
        const offset = this.speed * dt;

        this.sprites.forEach(sprite => {
            this.move(sprite, offset);
        });
    }

    move(sprite, offset) {
        sprite.x -= offset;
    }
}