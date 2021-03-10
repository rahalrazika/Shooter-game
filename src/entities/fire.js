import Phaser from 'phaser';

export default class Fire extends Phaser.GameObjects.Sprite {
  constructor(data) {
    const {
      scene, x, y, texture,
    } = data;
    super(scene.matter.world, x, y, texture);
    this.scene.add.existing(this);
  }
}
