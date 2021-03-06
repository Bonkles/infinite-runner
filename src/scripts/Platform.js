import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

const TILESIZE = 64; //pixels

export class Platform {

    constructor(rows, cols, x) {
        this.rows = rows;
        this.cols = cols;
        this.width = this.cols * TILESIZE;
        this.height = this.rows * TILESIZE;
        this.createContainer(x);
        this.createTiles();
        this.speed = 10;

    }

    get left() {
        return this.container.x;
    }

    get nextleft() {
        return this.left - this.speed;
    }

    get right() {
        return this.left + this.width;
    }

    get top() {
        return this.container.y
    }

    get bottom() {
        return this.top + this.height;
    }

    checkCollision(hero) {
        if (this.collideTop(hero)) {
            hero.stayOnPlatform(this);
        } else if (this.collideLeft(hero)) {
            hero.moveByPlatform(this)
        } else {
            if (hero.platform === this) {
                hero.platform = null;
            }
        }
    }

    collideTop(hero) {
        return (hero.right >= this.left &&
        hero.left <= this.right &&
        hero.bottom <= this.top &&
        hero.nextBottom >= this.top )
    }

    collideLeft(hero) {
        return (hero.right <= this.left &&
            hero.right >= this.nextleft &&
            hero.bottom >= this.top && hero.top <= this.bottom)
    }

    createContainer(x) {
        this.container = new PIXI.Container();
        this.container.x = x;
        this.container.y = window.innerHeight - this.rows * TILESIZE;
    }

    createTiles() {
        for (let row = 0; row < this.rows; row++){
            for (let col = 0; col < this.cols; col++) {
                this.createTile(row, col);
            }
        }
    }


    move() {
        this.container.x -= this.speed;

        if (this.right < 0) {
            this.container.emit("hidden");
        }
    }

    createTile(row, col) {
        const texture = row === 0 ? "platform" : "tile";
        const tile = new PIXI.Sprite(Globals.resources[texture].texture);
        this.container.addChild(tile);
        tile.x = tile.width * col;
        tile.y = tile.height * row;
    }
}