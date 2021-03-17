import Phaser from 'phaser';

export default class Enemy extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    const {
      scene, x, y, texture, frame,
    } = data;
    super(scene.matter.world, x, y, texture, frame);
    this.scene.add.existing(this);
    const { Body, Bodies } = Phaser.Physics.Matter.Matter;
    const enemyCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'enemyCollider' });
    const enemySensor = Bodies.circle(this.x, this.y, 24, { isSensor: false, label: 'enemySensor' });
    const compoundBody = Body.create({

      parts: [enemyCollider, enemySensor],
      frictionAir: 0,
    });
    this.setExistingBody(compoundBody);
  }

  static preload(scene) {
    scene.load.atlas('enemy', '../src/assets/enemy.png', '../src/assets/enemy_atlas.json');
    scene.load.animation('enemy', '../src/assets/enemy_anim.json');
  }

  update() {
    this.anims.play('enemy_walk', true);
  }
  
}