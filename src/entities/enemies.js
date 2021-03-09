import Phaser from 'phaser';

export default class Enemy extends Phaser.GameObjects.Matter.Sprite {
  constructor(data) {
    const {
      scene, x, y, texture, frame,
    } = data;
    super(scene.matter.world, x, y, texture, frame);
    this.scene.add.existing(this);
  }

  static preload(scene) {
    scene.load.atlas('enemy', '../src/assets/enemy.png', '../src/assets/enemy_atlas.json');
    scene.load.animation('enemy', '../src/assets/enemy_anim.json');
  }

  update() {
    this.anims.play('enemy_walk', true);
  }
}