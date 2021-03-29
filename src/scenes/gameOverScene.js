import Phaser from 'phaser';
import { gameScores } from '../APi/api';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  init(data) {
    this.userName = data.user;
    this.score = data.score;
  }

  preload() {
    this.load.image('gameOver', '../src/assets/gameOver.png');
    this.load.image('replay-btn', '../src/assets/replay.png');
    this.load.image('blue-btn-score', '../src/assets/hscoreBlue.png');
  }

  create() {
    this.cameras.main.setBackgroundColor(0xFFFFFF);
    this.gameOver = this.add.image(300, 180, 'gameOver');
    this.replay = this.add.image(300, 250, 'replay-btn');
    this.hScoreBlue = this.add.image(300, 290, 'blue-btn-score');

    this.gameOver.setScale(2);
    this.replay.setScale(0.1);
    this.hScoreBlue.setScale(0.2);

    gameScores({ user: this.userName, score: this.score });
    this.replay.setInteractive().on('pointerdown', function startScene() {
      this.scene.start('PlayerName');
    },
    this);

    this.hScoreBlue.setInteractive().on('pointerdown', function startScene() {
      this.scene.start('LeaderBoard');
    },
    this);
  }
}