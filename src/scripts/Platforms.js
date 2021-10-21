import * as PIXI from "pixi.js";
import { Platform } from './Platform';

export class Platforms {
    constructor() {
        this.platforms = [];
        this.container = new PIXI.Container();

        this.ranges = {
            rows: {
                min: 2,
                max: 6,
            },
            cols: {
                min: 3,
                max: 9
            },
            offset: {
                min: 60,
                max: 200
            }
        };


        this.createPlatform({
            rows: 4,
            cols: 6,
            x: 200
        });
    }



    get randomPlatformData() {
        let data = {};

        data.rows = Math.floor(Math.random() * this.ranges.rows.max - this.ranges.rows.min+ .5) + this.ranges.rows.min;
        data.cols = Math.floor(Math.random() * this.ranges.cols.max - this.ranges.cols.min + .5) + this.ranges.cols.min;
        const offset = Math.floor(Math.random() * this.ranges.offset.max - this.ranges.offset.min + .5) + this.ranges.offset.min;

        data.x = this.current.right + offset;
        return data;
    }

    createPlatform(data) {
        const platform = new Platform(data.rows, data.cols, data.x);
        this.container.addChild(platform.container);
        this.platforms.push(platform);
        this.current = platform;

        platform.container.once("hidden", () => {
            this.platforms = this.platforms.filter (curPlatform => platform != curPlatform)
        });
    }

    update(dt) {
        const offset = this.speed * dt;

        if (this.current.right < window.innerWidth) {
            this.createPlatform(this.randomPlatformData)
        }

        this.platforms.forEach(platform => {
            platform.move(platform, offset);
        });

    }

}