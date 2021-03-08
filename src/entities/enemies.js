import Phaser from 'phaser';

export default class FireGroup extends Phaser.Physics.Matter.Group {
  constructor(scene) {
    super(scene.physics.world, scene);
  }
}