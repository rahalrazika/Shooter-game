import Phaser from 'phaser';

export default class Fire extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'fire');
    scene.add.existing(this);
    this.speed = Phaser.Math.GetSpeed(400, 1);
  }

  fires(x, y) {
    this.setPosition(x + 15, y - this.scene.player.height / 10);
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
