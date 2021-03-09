import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    const {
      scene, x, y, texture, frame,
    } = data;
    super(scene.matter.world, x, y, texture, frame);
    this.scene.add.existing(this);
    const { Body, Bodies } = Phaser.Physics.Matter.Matter;
    const playerCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'playerCollider' });
    const playerSensor = Bodies.circle(this.x, this.y, 24, { isSensor: true, label: 'playerSensor' });
    const compoundBody = Body.create({

      parts: [playerCollider, playerSensor],
      frictionAir: 0.35,
    });
    this.setExistingBody(compoundBody);
  }

  static preload(scene) {
    scene.load.atlas('doctor', '../src/assets/doctor.png', '../src/assets/doctor_atlas.json');
    scene.load.animation('doctor', '../src/assets/doctor_anim.json');
  }

  get velocity() {
    return this.body.velocity;
  }

  update() {
    const speed = 2.5;
    const playerVelocity = new Phaser.Math.Vector2();
    if (this.inputKeys.left.isDown) {
      playerVelocity.x = -1;
    } else if (this.inputKeys.right.isDown) {
      playerVelocity.x = 1;
    }

    if (this.inputKeys.up.isDown) {
      playerVelocity.y = -1;
    } else if (this.inputKeys.down.isDown) {
      playerVelocity.y = 1;
    }

    playerVelocity.normalize();
    playerVelocity.scale(speed);
    this.setVelocity(playerVelocity.x, playerVelocity.y);
    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
      this.anims.play('doctor_walk', true);
    } else {
      this.anims.play('doctor_idle', true);
    }

    if (this.inputKeys.space.isDown) {
      this.anims.play('doctor_shoot', true);
      // this.fireGun(this);
    }
  }
}