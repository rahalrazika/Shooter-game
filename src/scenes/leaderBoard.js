import Phaser from 'phaser';
import { gameScores } from '../APi/api';

export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  preload() {
    this.load.image('back-btn', '../src/assets/back.png');
  }

  create() {
    this.cameras.main.setBackgroundColor(0xFFFFFF);
    this.text = this.add.text(270, 20, 'HIGH SCORE', {
      color: 'black',
      fontSize: '32px ',
    }).setOrigin(0.5, 0.5);
    let y = 15;
    gameScores().then(({ result: scores }) => {
      const sortedScores = scores.sort(
        (first, next) => next.score - first.score,
      );

      sortedScores.forEach((score, index) => {
        this.add.text(
          200,
          (y += 30),
          `${index + 1}. ${score.user}: ${score.score}`,
          { fontSize: '20px', fill: '#000' },
        );
      });
    });

    this.back = this.add.image(250, 300, 'back-btn');
    this.back.setScale(0.1);

    this.back.setInteractive().on('pointerdown', function startScene() {
      this.scene.start('MenuScene');
    },
    this);
  }
}