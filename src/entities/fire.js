import Phaser from 'phaser';

class Fire extends Phaser.GameObjects.Sprite {
  constructor(data) {
    const {
      scene, x, y, texture, frame,
    } = data;
    super(scene.matter.world, x, y, texture, frame);
    this.scene.add.existing(this);
  }

  static preload(scene) {
    scene.load.atlas('fire', '../src/assets/fire1.png');
  }
}

export default Fire;