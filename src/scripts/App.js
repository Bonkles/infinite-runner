import TWEEN from "@tweenjs/tween.js";
import * as PIXI from "pixi.js";
import { Loader } from "./Loader";
import { MainScene } from "./MainScene";
import Stats from 'stats.js';
export class App {
    run() {
        // create canvas
        this.app = new PIXI.Application({ resizeTo: window });
        this.stats = new Stats();
        this.stats.showPanel(0);

        document.body.appendChild(this.stats.dom);
        document.body.appendChild(this.app.view);

        // load sprites
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => this.start());
    }

    start() {
        this.scene = new MainScene();
        this.app.ticker.add( dt => {
//            TWEEN.update();
            this.stats.begin();
            this.scene.update(dt);
            this.stats.end();
        });
        this.app.stage.addChild(this.scene.container);

    }
}