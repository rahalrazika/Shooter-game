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
    this.text = this.add.text(300, 20, 'HIGH SCORE', {
      color: 'black',
      fontSize: '32px ',
    }).setOrigin(0.5, 0.5);
    let y = 210;
    gameScores().then((scores) => {
      const { result } = scores;
      result.sort((first, next) => next.score - first.score);
      for (let i = 0; i < 5; i += 1) {
        if (result[i]) {
          this.add.text(230,
            y += 60,
            `${i + 1}. ${this.scores[i].user}: ${this.scores[i].score}`,
            { fontSize: '40px', fill: '#ffffff' });
        }
      }
    });

    this.back = this.add.image(300, 300, 'back-btn');
    this.back.setScale(0.1);

    this.back.setInteractive().on('pointerdown', function startScene() {
      this.scene.start('MenuScene');
    },
    this);
  }
}