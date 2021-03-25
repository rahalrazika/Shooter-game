import Phaser from 'phaser';

import { player } from '../index';
import { createScore } from '../APi/api';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  preload() {
    this.load.image('gameOver', '../src/assets/gameOver.png');
    this.load.image('replay-btn', '../src/assets/replay.png');
  }

  create() {
    // Save User State
    createScore(player);

    this.cameras.main.setBackgroundColor(0xffffff);
    this.gameOver = this.add.image(300, 180, 'gameOver');
    this.replay = this.add.image(300, 250, 'replay-btn');

    this.gameOver.setScale(2);
    this.replay.setScale(0.1);

    this.replay.setInteractive().on(
      'pointerdown',
      function startScene() {
        this.scene.start('IntroScene');
      },
      this
    );
  }
}
