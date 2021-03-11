import Phaser from 'phaser';
import Fire from './fire';

export default class Enemy extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    const {
      scene, x, y, texture, frame,
    } = data;
    super(scene.matter.world, x, y, texture, frame);
    const randomY = Math.random() * 300;
    const randomX = Math.random() * 300;
    this.x = randomX;
    this.y = randomY;
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