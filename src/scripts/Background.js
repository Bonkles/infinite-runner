import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class Background {

    constructor() {
        this.container = new PIXI.Container();
        this.sprites = [];
        this.createSprites();
        this.speed = 5;
    }

    createSprites() {
        for (let i = 0; i < 3; i++){
            this.createSprite(i);
        }
    }

    createSprite(i) {
        const sprite = new PIXI.Sprite(Globals.resources["bg"].texture);
        sprite.x = sprite.width * i;
        sprite.y = 0;

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