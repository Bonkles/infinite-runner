import * as PIXI from "pixi.js";
import { Globals } from "./Globals";
import { Background } from "./Background";
import { Platforms } from "./Platforms";
import { Hero } from "./Hero";
export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createPlatforms();
        this.createHero();

    }

    createBackground() {
        this.bg = new Background();
        this.container.addChild(this.bg.container);
    }

    createPlatforms() {
        this.platforms = new Platforms();
        this.container.addChild(this.platforms.container);
    }

    createHero() {
        this.hero = new Hero();
        this.container.addChild(this.hero.container)
    }

    update(dt) {
        this.bg.update(dt);
        this.platforms.checkCollisions(this.hero);
        this.platforms.update(dt);
        this.hero.update(dt);
    }
}