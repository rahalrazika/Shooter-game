import Phaser from 'phaser';

export default class Fire extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'fire');
    scene.add.existing(this);
  }
  
}
