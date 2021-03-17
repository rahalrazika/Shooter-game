import Phaser from 'phaser';

export default class Fire extends Phaser.Physics.Matter.Sprite {
  constructor(scene, x, y) {
    super(scene.matter.world, x, y, 'fire');
    this.scene.add.existing(this);
    this.speed = Phaser.Math.GetSpeed(10000, 1);
    const { Body, Bodies } = Phaser.Physics.Matter.Matter;
    const fireCollider = Bodies.circle(this.x, this.y, 5, { isSensor: false, label: 'fireCollider' });
    const fireSensor = Bodies.circle(this.x, this.y, 8, { isSensor: false, label: 'fireSensor' });
    const compoundBody = Body.create({

      parts: [fireCollider, fireSensor],
      frictionAir: 0,
    });
    this.setExistingBody(compoundBody);

  }

  fires(x, y) {
    this.setPosition(x + 20, y - this.scene.player.height / 60);
    this.setActive(true);
    this.setVisible(true);
  }

  update(time, delta) {
    this.x += this.speed * delta;

    if (this.y < -50) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}
