import DragManager from "../helpers/DragManager.js";

export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: "Game"
        })
    }

    preload() {

    }

    create() {
        this.tokenOne = this.add.rectangle(200, 600, 100, 100, 0x00ffff);
        this.tokenTwo = this.add.rectangle(400, 400, 100, 100, 0xff00ff);

        const dragManager = new DragManager(this);
        dragManager.makeDraggable(this.tokenOne);
        dragManager.makeDraggable(this.tokenTwo);
    }

    update() {

    }
}