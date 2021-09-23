export default class DragManager {
    constructor(scene) {
        this.scene = scene;
    }

    makeDraggable(object) {
        object.setInteractive();

        this.scene.input.setDraggable(object);

        this.scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
    }
}