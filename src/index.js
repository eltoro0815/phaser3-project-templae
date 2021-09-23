import Phaser from 'phaser';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        
    }
      
    create ()
    {
        this.token = this.add.rectangle(200, 600, 100, 100, 0x00ffff).setInteractive();
        
        this.input.setDraggable(this.token);
        
        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1300,
    height: 900,
    scene: MyGame
};

const game = new Phaser.Game(config);
